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
        className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-[#1C1C1C] leading-[1.15] tracking-tight"
      >
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="text-[#2D6A4F] italic">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="mt-5 text-base text-[#737373] leading-relaxed max-w-2xl font-light"
          style={align === 'center' ? { margin: '1.25rem auto 0' } : {}}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
