import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { INSTALLATION_STEPS } from '@/constants'

function TimelineStep({ step, index }: { step: typeof INSTALLATION_STEPS[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-10 lg:mb-12 last:mb-0 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
    >
      {}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full lg:w-1/2 flex flex-col items-start pl-14 lg:pl-0 ${
          isEven ? 'lg:pr-14 lg:items-end lg:text-right' : 'lg:pl-14 lg:items-start lg:text-left'
        }`}
      >
        {}
        <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white border border-[#E5E5E5] flex items-center justify-center rounded-full z-10 shadow-sm">
          <span className="text-[#1C1C1C] font-sans text-sm font-semibold tabular-nums tracking-normal">{step.step}</span>
        </div>

        <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#2D6A4F] mb-3 mt-1 lg:mt-3">
          {step.duration}
        </div>
        <h3 className="text-xl lg:text-2xl font-serif text-[#1C1C1C] mb-2">
          {step.title}
        </h3>
        <p className="text-sm lg:text-base text-[#737373] font-light leading-relaxed max-w-sm">
          {step.description}
        </p>
      </motion.div>

      {}
      <div className="hidden lg:block w-1/2" />
    </div>
  )
}

export function InstallationProcess() {
  return (
    <section id="installation" className="section bg-[var(--color-secondary)]">
      <div className="container-custom max-w-5xl">
        <div className="mb-10 text-center">
          <span className="text-[#1C1C1C] text-[10px] font-medium tracking-[0.3em] uppercase block mb-3">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1C1C1C] leading-tight">
            From Survey to <span className="italic font-light text-[#737373]">Go Live</span>
          </h2>
        </div>

        <div className="relative">
          {}
          <div className="absolute left-[19px] lg:left-1/2 top-4 bottom-4 w-px bg-[#E5E5E5] lg:-translate-x-1/2 z-0" />
          
          <div className="relative z-10">
            {INSTALLATION_STEPS.map((step, i) => (
              <TimelineStep key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
