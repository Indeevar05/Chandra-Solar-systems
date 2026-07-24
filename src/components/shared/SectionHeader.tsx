import React from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp, staggerContainer } from '@/lib/animations'

interface SectionHeaderProps {
  badge?: string 
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  title,
  highlight,
  subtitle,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const titleParts = highlight
    ? title.split(highlight)
    : [title]

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={cn(
        'max-w-4xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      <motion.h2
        variants={fadeUp}
        className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1C1C1C] leading-[1.1] tracking-tight"
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-[#B85B3F] italic">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg text-[#737373] leading-relaxed max-w-2xl font-light"
          style={align === 'center' ? { margin: '1.5rem auto 0' } : {}}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
