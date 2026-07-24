



export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: number
  suffix?: string
  prefix?: string
  label: string
  isCurrency?: boolean
}

export interface Brand {
  name: string
  logo: string
}

export interface Feature {
  id: string
  title: string
  description: string
}

export interface Service {
  id: string
  title: string
  description: string
  size: string
}

export interface InstallationStep {
  step: string
  title: string
  description: string
  duration: string
}

export interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  review: string
  savings: string
  system: string
  avatar: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface QuoteFormData {
  name: string
  phone: string
  email?: string
  city: string
  monthlyBill: string
  systemType: string
  message?: string
}

export interface ToastMessage {
  id: string
  type: 'success' | 'error' | 'info'
  message: string
  duration?: number
}

export interface Theme {
  isDark: boolean
  toggle: () => void
}
