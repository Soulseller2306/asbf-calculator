<template>
  <div class="bg-slate-50 min-h-screen">
    <!-- 1. Hero Section -->
    <section
      class="bg-slate-900 text-white py-16 md:py-24 border-b border-slate-800 relative overflow-hidden"
    >
      <!-- Background Glow Effect -->
      <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span
          class="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-xs uppercase tracking-wider mb-4"
        >
          Financial Advisory Tools
        </span>
        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
        >
          Smart Financial Calculators <br class="hidden sm:inline" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
            >Made Simple & Fast</span
          >
        </h1>
        <p class="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Plan your investments, optimize monthly commitments, and explore debt consolidation
          options with our easy-to-use calculators.
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link
            to="/asbf"
            class="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-center"
          >
            Explore ASBF Calculator
          </router-link>
          <router-link
            to="/jom-combine"
            class="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-8 py-3.5 rounded-xl transition-all text-center"
          >
            JOM Combine Loan!
          </router-link>
        </div>
      </div>
    </section>

    <!-- 2. Calculator Suite Section -->
    <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
          Choose Your Calculator
        </h2>
        <p class="text-slate-600 text-sm sm:text-base">
          Select a tool below to run your numbers instantly.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Tool Card 1: ASB Financing -->
        <div
          class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
        >
          <div>
            <!-- Tool Icon / Tag -->
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl"
              >
                📈
              </div>
              <span
                class="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-200"
              >
                Wealth Growth
              </span>
            </div>

            <h3
              class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
            >
              ASB Financing Calculator
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
              Calculate potential dividend returns, yearly compounding projections, and monthly
              installments to maximize your ASB wealth growth strategy.
            </p>

            <!-- Key Features List -->
            <ul class="space-y-2 text-xs font-medium text-slate-500 mb-8">
              <li class="flex items-center gap-2">
                <svg
                  class="w-4 h-4 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Dividend compounding estimates
              </li>
              <li class="flex items-center gap-2">
                <svg
                  class="w-4 h-4 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Flexible tenure and interest rate adjustments
              </li>
            </ul>
          </div>

          <router-link
            to="/asbf"
            class="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
          >
            <span>Launch ASBF Calculator</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </router-link>
        </div>

        <!-- Tool Card 2: Debt Consolidation -->
        <div
          class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
        >
          <div>
            <!-- Tool Icon / Tag -->
            <div class="flex items-center justify-between mb-6">
              <div
                class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl"
              >
                💳
              </div>
              <span
                class="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-200"
              >
                Cashflow Relief
              </span>
            </div>

            <h3
              class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors"
            >
              JOM Combine Loan!
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
              Consolidate multiple personal loans or credit card balances into a single structured
              loan to significantly cut down monthly payments.
            </p>

            <!-- Key Features List -->
            <ul class="space-y-2 text-xs font-medium text-slate-500 mb-8">
              <li class="flex items-center gap-2">
                <svg
                  class="w-4 h-4 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Multi-debt dynamic input comparison
              </li>
              <li class="flex items-center gap-2">
                <svg
                  class="w-4 h-4 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Instant monthly savings calculation
              </li>
            </ul>
          </div>

          <router-link
            to="/jom-combine"
            class="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-center transition-colors flex items-center justify-center gap-2"
          >
            <span>Launch Combine Calculator</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 3. Advisory Callout Banner -->
    <section class="py-12 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 class="text-2xl font-bold mb-2">Need Professional Guidance?</h3>
          <p class="text-slate-400 text-sm max-w-xl">
            Have questions about your calculated results? Get a tailored financial review directly
            with Puan Rosz on WhatsApp.
          </p>
        </div>

        <a
          :href="whatsappUrl"
          target="_blank"
          class="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-2"
        >
          <span>Chat with Puan Rosz</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useWhatsApp } from '../composables/useWhatsApp'

const { whatsappUrl } = useWhatsApp()
</script>
