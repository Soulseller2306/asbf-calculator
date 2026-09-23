<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
    <!-- Navbar Header -->
    <header class="sticky top-0 z-40 bg-slate-900 text-white shadow-lg border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        >
          <div
            class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-lg"
          >
            R
          </div>
          <span>FINANCE<span class="text-blue-400">HUB</span></span>
        </router-link>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
          <router-link
            to="/"
            class="hover:text-blue-400 transition-colors"
            active-class="text-blue-400 font-semibold"
            >Home</router-link
          >
          <router-link
            to="/about-asbf"
            class="hover:text-blue-400 transition-colors"
            active-class="text-blue-400 font-semibold"
            >About ASBF</router-link
          >

          <!-- Calculators Menu -->
          <div class="relative group">
            <button class="hover:text-blue-400 transition-colors flex items-center gap-1 py-5">
              <span>Calculators</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              class="absolute left-0 top-full hidden group-hover:block w-56 bg-slate-800 border border-slate-700 rounded-xl shadow-xl py-2 z-50"
            >
              <router-link
                to="/asbf"
                class="block px-4 py-2.5 text-sm hover:bg-slate-700 hover:text-blue-400 transition-colors"
                >ASB Financing</router-link
              >
              <router-link
                to="/jom-combine"
                class="block px-4 py-2.5 text-sm hover:bg-slate-700 hover:text-blue-400 transition-colors"
              >
                JOM Combine Loan!
              </router-link>
            </div>
          </div>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden md:flex items-center gap-3">
          <a
            :href="whatsappUrl"
            target="_blank"
            class="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all shadow-md"
          >
            WhatsApp Me
          </a>
        </div>

        <!-- Mobile Hamburger Button -->
        <button
          @click="isMobileMenuOpen = true"
          class="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>

    <!-- Mobile Sidebar Drawer Backdrop -->
    <div
      v-if="isMobileMenuOpen"
      @click="isMobileMenuOpen = false"
      class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 md:hidden transition-opacity"
    ></div>

    <!-- Mobile Slide-out Sidebar Drawer -->
    <aside
      class="fixed top-0 right-0 bottom-0 w-72 bg-slate-900 text-white z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl border-l border-slate-800"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div>
        <!-- Sidebar Header -->
        <div class="flex items-center justify-between pb-6 border-b border-slate-800">
          <span class="font-bold text-lg text-white">Menu Navigation</span>
          <button @click="isMobileMenuOpen = false" class="p-1 text-slate-400 hover:text-white">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="mt-6 flex flex-col gap-2">
          <router-link
            to="/"
            @click="isMobileMenuOpen = false"
            class="px-4 py-3 rounded-lg font-medium hover:bg-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
          >
            Home
          </router-link>

          <div class="pt-2">
            <span class="px-4 text-xs font-semibold uppercase text-slate-500 tracking-wider"
              >Calculators</span
            >
            <router-link
              to="/asbf"
              @click="isMobileMenuOpen = false"
              class="mt-1 flex items-center gap-3 px-4 py-3 rounded-lg font-medium hover:bg-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <span>ASB Financing</span>
            </router-link>
            <router-link
              to="/jom-combine"
              @click="isMobileMenuOpen = false"
              class="mt-1 flex items-center gap-3 px-4 py-3 rounded-lg font-medium hover:bg-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
            >
              <span>Jom Combine Loan!</span>
            </router-link>
          </div>
        </nav>
      </div>

      <!-- Sidebar Footer CTA -->
      <div class="pt-6 border-t border-slate-800">
        <a
          :href="whatsappUrl"
          target="_blank"
          class="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </aside>

    <!-- Main View Content -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-sm">
      <p class="inline-flex items-center gap-1.5 justify-center">
        <span>&copy; {{ new Date().getFullYear() }} Handcrafted with</span>
        <svg
          class="shrink-0 size-5 inline text-rose-500 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"
          ></path>
        </svg>
        <span>by Shahrir</span>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useWhatsApp } from '../src/composables/useWhatsApp'

const isMobileMenuOpen = ref(false)
const { whatsappUrl } = useWhatsApp()
</script>
