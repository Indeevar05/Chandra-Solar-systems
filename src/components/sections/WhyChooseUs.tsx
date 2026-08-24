import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { WHY_CHOOSE_FEATURES } from '@/constants'
import {
  GovernmentIcon,
  ChartIcon,
  ShieldIcon,
  ToolIcon,
  GridIcon,
  SupportIcon,
} from '@/components/icons'

const ICONS = {
  subsidy: GovernmentIcon,
  panels: ChartIcon,
  warranty: ShieldIcon,
  installation: ToolIcon,
  'net-metering': GridIcon,
  amc: SupportIcon,
}

function FeatureCard({ feature, index }: { feature: typeof WHY_CHOOSE_FEATURES[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const Icon = ICONS[feature.id as keyof typeof ICONS] ?? ChartIcon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-4 px-6 py-8 lg:px-8 lg:py-10 bg-transparent border-t border-[#D8E0DA] transition-colors duration-500 hover:bg-white"
    >
      <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full border border-[#D8E0DA] bg-[#F4F7F4] text-[#14261C] group-hover:border-[#B8D4C0] group-hover:text-[#2D6A4F] transition-colors">
        <Icon size={22} strokeWidth={1.25} />
      </div>

      <h3 className="font-medium tracking-wide text-[#14261C] uppercase text-xs">
        {feature.title}
      </h3>
      <p className="text-[#5C6B62] text-sm leading-relaxed font-light">
        {feature.description}
      </p>

      <div className="mt-auto pt-5 text-[10px] font-medium tracking-widest uppercase text-[#2D6A4F]">
        <span>Included</span>
      </div>
    </motion.div>
  )
}

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section bg-[var(--color-secondary)]">
      <div className="container-custom">
        <SectionHeader
          title="Built on Trust, Backed by "
          highlight="Quality"
          subtitle="We don't just install solar panels — we build long-term energy partnerships with every homeowner, backed by industry-leading warranties and end-to-end support."
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10">
          {WHY_CHOOSE_FEATURES.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
