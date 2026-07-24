import type { Variants } from 'framer-motion'






export const SPRING = {
  gentle: { type: 'spring', stiffness: 100, damping: 20, mass: 0.8 },
  snappy: { type: 'spring', stiffness: 200, damping: 25, mass: 0.6 },
  bounce: { type: 'spring', stiffness: 150, damping: 15, mass: 1 },
  slow: { type: 'spring', stiffness: 60, damping: 20, mass: 1.2 },
} as const

export const EASE = {
  smooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  spring: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  out: [0, 0, 0.2, 1] as [number, number, number, number],
}


export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE.smooth },
  },
}


export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE.smooth },
  },
}


export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE.spring },
  },
}


export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE.smooth },
  },
}


export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE.smooth },
  },
}


export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}


export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE.smooth },
  },
}


export const cardHover = {
  rest: {
    y: 0,
    boxShadow: '0 1px 1px rgba(15,23,42,0.04), 0 4px 8px rgba(15,23,42,0.04)',
    transition: { duration: 0.3, ease: EASE.smooth },
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 60px rgba(15,23,42,0.12), 0 8px 16px rgba(15,23,42,0.06)',
    transition: { duration: 0.3, ease: EASE.smooth },
  },
}


export const charReveal: Variants = {
  hidden: { opacity: 0, y: '100%' },
  visible: (i: number) => ({
    opacity: 1,
    y: '0%',
    transition: {
      delay: i * 0.04,
      duration: 0.5,
      ease: EASE.smooth,
    },
  }),
}


export const heroEntrance: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EASE.smooth,
    },
  },
}


export const loadingExit: Variants = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: 0.5, ease: EASE.smooth, delay: 0.2 },
  },
}


export const numberReveal: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: SPRING.bounce,
  },
}


export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: EASE.smooth },
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE.spring },
  },
}

export const mobileMenuLinkVariants: Variants = {
  closed: { opacity: 0, x: -20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.4,
      ease: EASE.smooth,
    },
  }),
}


export const imageReveal: Variants = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.8, ease: EASE.inOut },
  },
}
