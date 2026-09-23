<template>
  <div class="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 md:py-12 md:px-8">
    <div class="max-w-6xl mx-auto">
      <!-- Page Header -->
      <header v-if="$slots.header || title" class="text-center mb-8 md:mb-10">
        <span
          v-if="badge"
          class="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs uppercase tracking-wider mb-3"
        >
          {{ badge }}
        </span>
        <h1
          v-if="title"
          class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 sm:mb-3"
        >
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed"
        >
          {{ subtitle }}
        </p>
        <slot name="header"></slot>
      </header>

      <!-- Main Content Slot -->
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup>
defineProps({
  badge: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>
