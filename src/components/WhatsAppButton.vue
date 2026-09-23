<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    :class="[
      'inline-flex items-center justify-center gap-2 font-bold transition-all rounded-xl shadow-lg px-6 py-3.5',
      variantClasses,
      customClass,
    ]"
  >
    <!-- Slot allows overriding text or adding icons from outside -->
    <slot>
      <span>{{ label }}</span>
    </slot>

    <!-- Optional Right Arrow Icon -->
    <svg v-if="showIcon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { useWhatsApp } from '../composables/useWhatsApp'

const { whatsappUrl } = useWhatsApp()

const props = defineProps({
  label: {
    type: String,
    default: 'Chat with Cik Rosz',
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  // Style variant: 'primary' (Emerald green) or 'secondary' (Outline/Dark)
  variant: {
    type: String,
    default: 'primary',
  },
  // Allows adding/overriding specific Tailwind classes
  customClass: {
    type: String,
    default: 'px-6 py-3.5',
  },
})

const variantClasses = computed(() => {
  if (props.variant === 'secondary') {
    return 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 shadow-slate-900/20'
  }
  // Default primary emerald green styling
  return 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30'
})
</script>
