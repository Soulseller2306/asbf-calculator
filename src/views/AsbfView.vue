<template>
  <BasePageLayout
    badge="Wealth Growth Tool"
    title="ASB Financing Calculator"
    subtitle="Calculate potential dividend returns, yearly compounding projections, and monthly installments."
  >
    <!-- Calculator Section -->
    <div class="mx-auto">
      <div class="grid lg:grid-cols-12 gap-6 md:gap-8">
        <!-- Left Column: Inputs -->
        <div class="lg:col-span-7 space-y-6">
          <div class="bg-white p-5 sm:p-8 rounded-2xl shadow-xl border border-slate-200">
            <div class="space-y-5 sm:space-y-6">
              <div>
                <label class="block font-semibold text-slate-700 text-sm sm:text-base mb-2">
                  Financing Amount (RM)
                </label>
                <input
                  v-model.number="amount"
                  type="number"
                  step="10000"
                  min="10000"
                  max="200000"
                  class="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                />
              </div>

              <div>
                <label class="block font-semibold text-slate-700 text-sm sm:text-base mb-2">
                  Interest / Profit Rate (%)
                </label>
                <input
                  v-model.number="profitRate"
                  type="number"
                  step="0.05"
                  class="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                />
              </div>

              <div>
                <label class="block font-semibold text-slate-700 text-sm sm:text-base mb-2">
                  Tenure (Years): {{ tenure }}
                </label>
                <input
                  v-model.number="tenure"
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  class="w-full accent-blue-600"
                />
              </div>

              <div>
                <label class="block font-semibold text-slate-700 text-sm sm:text-base mb-2">
                  Estimated ASB Dividend Rate (%)
                </label>
                <input
                  v-model.number="dividendRate"
                  type="number"
                  step="0.25"
                  class="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Estimation Summary -->
        <div class="lg:col-span-5">
          <div
            class="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full border border-slate-800"
          >
            <div>
              <h3
                class="text-base sm:text-lg font-semibold text-slate-300 mb-5 sm:mb-6 border-b border-slate-800 pb-3"
              >
                Estimation Summary
              </h3>

              <!-- Responsive grid for mobile vs desktop -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-slate-800/40 p-3.5 sm:p-4 rounded-xl border border-slate-800/80">
                  <span class="text-xs text-slate-400 block mb-0.5">Monthly Payment</span>
                  <span class="text-xl sm:text-2xl font-extrabold text-blue-400 break-words">
                    RM {{ monthlyInstallment }}
                  </span>
                </div>

                <div class="bg-slate-800/40 p-3.5 sm:p-4 rounded-xl border border-slate-800/80">
                  <span class="text-xs text-slate-400 block mb-0.5">Annual Dividend</span>
                  <span class="text-xl sm:text-2xl font-bold text-emerald-400 break-words">
                    RM {{ annualDividend }}
                  </span>
                </div>

                <div class="bg-slate-800/40 p-3.5 sm:p-4 rounded-xl border border-slate-800/80">
                  <span class="text-xs text-slate-400 block mb-0.5">Total Paid (1 Yr)</span>
                  <span class="text-base sm:text-lg font-semibold text-slate-200 break-words">
                    RM {{ (monthlyInstallment * 12).toFixed(2) }}
                  </span>
                </div>

                <div class="bg-slate-800/40 p-3.5 sm:p-4 rounded-xl border border-slate-800/80">
                  <span class="text-xs text-slate-400 block mb-0.5">Net Yearly Yield</span>
                  <span
                    class="text-base sm:text-lg font-semibold break-words"
                    :class="
                      annualDividend - monthlyInstallment * 12 >= 0
                        ? 'text-emerald-400'
                        : 'text-rose-400'
                    "
                  >
                    RM
                    {{ (annualDividend - monthlyInstallment * 12).toFixed(2) }}
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-6 sm:mt-8 space-y-3">
              <WhatsAppButton
                label="Consult Cik Rosz on Whatsapp"
                custom-class="w-full text-sm sm:text-base py-3"
              />
              <div class="pt-2 border-t border-slate-800 text-[11px] sm:text-xs text-slate-400">
                <div>*Figures are estimated for illustrative purposes only.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
        <h3 class="text-xl font-bold text-slate-900 mb-2">5-Year Growth & Payments Comparison</h3>
        <p class="text-sm text-slate-500 mb-6">
          Compare cumulative bank payments vs. projected ASB dividend growth over 5 years.
        </p>

        <div class="h-80">
          <Bar :data="chartData" :options="chartOptions" />
        </div>
      </div>
    </div>
  </BasePageLayout>
</template>
<script setup>
import { ref, computed } from 'vue'
import BasePageLayout from '../components/BasePageLayout.vue'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import WhatsAppButton from '../components/WhatsAppButton.vue'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const amount = ref(100000)
const profitRate = ref(4.0)
const tenure = ref(40)
const dividendRate = ref(5.75)

const monthlyInstallment = computed(() => {
  const p = amount.value
  const r = profitRate.value / 100 / 12
  const n = tenure.value * 12

  if (!p || !r || !n) return '0.00'
  const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  return monthly.toFixed(2)
})

const annualDividend = computed(() => {
  const div = amount.value * (dividendRate.value / 100)
  return div.toFixed(2)
})

const chartData = computed(() => {
  const yearlyInstallment = monthlyInstallment.value * 12
  const yearlyDividend = parseFloat(annualDividend.value)

  return {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    datasets: [
      {
        label: 'Cumulative Monthly Payments (RM)',
        backgroundColor: '#3b82f6',
        data: Array.from({ length: 5 }, (_, i) => ((i + 1) * yearlyInstallment).toFixed(2)),
      },
      {
        label: 'Cumulative ASB Dividends (RM)',
        backgroundColor: '#10b981',
        data: Array.from({ length: 5 }, (_, i) => ((i + 1) * yearlyDividend).toFixed(2)),
      },
    ],
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
}
</script>
