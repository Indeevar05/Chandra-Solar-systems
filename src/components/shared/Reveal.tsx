import React from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
  className?: string
  once?: boolean
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  once = true,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-60px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
      x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
      scale: direction === 'scale' ? 0.92 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={direction === 'none' ? fadeUp : variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}
