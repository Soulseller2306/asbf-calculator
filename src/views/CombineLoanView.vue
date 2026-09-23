<template>
  <BasePageLayout
    badge="Debt Consolidation Tool"
    title="JOM Combine Loan! Calculator"
    subtitle="Consolidate multiple high-interest debts into a single structured loan to lower your monthly commitments."
  >
    <div class="grid lg:grid-cols-12 gap-6 md:gap-8">
      <!-- Left Column: Input Existing Loans & Refinance Terms -->
      <div class="lg:col-span-7 space-y-6">
        <!-- Existing Commitments Card -->
        <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200">
          <div class="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
            <h2 class="text-base sm:text-lg font-bold text-slate-900">
              1. Current Loans / Commitments
            </h2>
            <button
              @click="addLoan"
              class="text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 font-semibold px-3 py-1.5 rounded-lg border border-blue-200 transition-colors"
            >
              + Add Loan
            </button>
          </div>

          <!-- Dynamic Loan Inputs List -->
          <div class="space-y-4">
            <div
              v-for="(loan, index) in existingLoans"
              :key="index"
              class="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 relative grid grid-cols-12 gap-3 items-center"
            >
              <div class="col-span-12 sm:col-span-4">
                <label class="block text-xs font-semibold text-slate-600 mb-1">Loan Name</label>
                <input
                  v-model="loan.name"
                  type="text"
                  placeholder="e.g. Credit Card"
                  class="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label class="block text-xs font-semibold text-slate-600 mb-1">Balance (RM)</label>
                <input
                  v-model.number="loan.balance"
                  type="number"
                  placeholder="10000"
                  class="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div class="col-span-5 sm:col-span-3">
                <label class="block text-xs font-semibold text-slate-600 mb-1">Monthly (RM)</label>
                <input
                  v-model.number="loan.monthlyPayment"
                  type="number"
                  placeholder="500"
                  class="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div class="col-span-1 flex justify-end">
                <button
                  v-if="existingLoans.length > 1"
                  @click="removeLoan(index)"
                  class="text-rose-500 hover:text-rose-700 p-1 rounded-lg hover:bg-rose-50"
                  title="Remove loan"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Refinancing Terms Card -->
        <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200">
          <h2
            class="text-base sm:text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-3"
          >
            2. New Consolidated Loan Terms
          </h2>

          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1"
                >Consolidated Interest Rate (%)</label
              >
              <input
                v-model.number="newInterestRate"
                type="number"
                step="0.1"
                class="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-600 mb-1"
                >New Tenure (Years): {{ newTenure }}</label
              >
              <input
                v-model.number="newTenure"
                type="range"
                min="1"
                max="10"
                step="1"
                class="w-full accent-blue-600 mt-2"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Comparison & Summary -->
      <div class="lg:col-span-5">
        <div
          class="sticky top-20 bg-slate-900 text-white p-5 sm:p-6 rounded-2xl shadow-xl border border-slate-800 space-y-5"
        >
          <h2 class="text-lg sm:text-xl font-bold border-b border-slate-800 pb-3 text-blue-400">
            Comparison Summary
          </h2>

          <div class="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
            <span class="text-xs text-slate-400 block mb-0.5"
              >Total Outstanding Amount to Consolidate</span
            >
            <span class="text-xl sm:text-2xl font-extrabold text-white"
              >RM {{ totalBalance.toFixed(2) }}</span
            >
          </div>

          <div class="grid grid-cols-2 gap-3 sm:gap-4">
            <div class="bg-slate-800/40 p-3.5 sm:p-4 rounded-xl border border-slate-800">
              <span class="text-xs text-slate-400 block mb-0.5">Current Monthly</span>
              <span class="text-base sm:text-lg font-bold text-rose-400"
                >RM {{ currentTotalMonthly.toFixed(2) }}</span
              >
            </div>

            <div class="bg-slate-800/40 p-3.5 sm:p-4 rounded-xl border border-slate-800">
              <span class="text-xs text-slate-400 block mb-0.5">New Monthly</span>
              <span class="text-base sm:text-lg font-bold text-emerald-400"
                >RM {{ newMonthlyPayment }}</span
              >
            </div>
          </div>

          <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center">
            <span class="text-xs text-emerald-300 uppercase font-semibold tracking-wider block mb-1"
              >Monthly Cashflow Relief</span
            >
            <span class="text-2xl sm:text-3xl font-black text-emerald-400">
              RM {{ monthlySavings }}
            </span>
            <span class="text-xs text-emerald-300/80 block mt-1">saved per month</span>
          </div>
          <WhatsAppButton label="Consult Cik Rosz on Whatsapp" custom-class="w-full" />
          <div class="pt-2 border-t border-slate-800 text-[11px] sm:text-xs text-slate-400">
            <div>*Figures are estimated for illustrative purposes only.</div>
          </div>
        </div>
      </div>
    </div>
  </BasePageLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import BasePageLayout from '../components/BasePageLayout.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'

const existingLoans = ref([
  { name: 'Credit Card', balance: 15000, monthlyPayment: 750 },
  { name: 'Personal Loan', balance: 25000, monthlyPayment: 620 },
])

const newInterestRate = ref(4.8)
const newTenure = ref(7)

const addLoan = () => {
  existingLoans.value.push({ name: '', balance: 0, monthlyPayment: 0 })
}

const removeLoan = (index) => {
  existingLoans.value.splice(index, 1)
}

const totalBalance = computed(() => {
  return existingLoans.value.reduce((sum, item) => sum + (Number(item.balance) || 0), 0)
})

const currentTotalMonthly = computed(() => {
  return existingLoans.value.reduce((sum, item) => sum + (Number(item.monthlyPayment) || 0), 0)
})

const newMonthlyPayment = computed(() => {
  const p = totalBalance.value
  const annualRate = newInterestRate.value / 100
  const years = newTenure.value

  if (!p || !annualRate || !years) return '0.00'

  const r = annualRate / 12
  const n = years * 12
  const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  return monthly.toFixed(2)
})

const monthlySavings = computed(() => {
  const diff = currentTotalMonthly.value - parseFloat(newMonthlyPayment.value)
  return diff > 0 ? diff.toFixed(2) : '0.00'
})
</script>
