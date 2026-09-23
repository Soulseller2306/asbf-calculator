import { computed } from 'vue'

// Shared configuration values
const phoneNumber = '60139290495'
const defaultMessage = 'Hi Cik Rosz, I have a question about financial planning.'

export function useWhatsApp() {
  const whatsappUrl = computed(
    () => `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`,
  )

  return {
    phoneNumber,
    defaultMessage,
    whatsappUrl,
  }
}
