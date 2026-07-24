import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { WHY_CHOOSE_FEATURES } from '@/constants'
import {
  GovernmentIcon,
  SolarPanelIcon,
  ShieldIcon,
  ToolIcon,
  GridIcon,
  SupportIcon,
} from '@/components/icons'

const ICONS = {
  subsidy: GovernmentIcon,
  panels: SolarPanelIcon,
  warranty: ShieldIcon,
  installation: ToolIcon,
  'net-metering': GridIcon,
  amc: SupportIcon,
}

function FeatureCard({ feature, index }: { feature: typeof WHY_CHOOSE_FEATURES[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const Icon = ICONS[feature.id as keyof typeof ICONS] ?? SolarPanelIcon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col p-8 bg-transparent border-t border-[#E5E5E5] transition-colors duration-500 hover:bg-[#F9F9F6]"
    >
      {}
      <div className="w-10 h-10 flex items-center justify-center mb-8 shrink-0 text-[#1C1C1C]">
        <Icon size={24} strokeWidth={1} />
      </div>

      {}
      <h3 className="text-lg font-medium tracking-wide text-[#1C1C1C] mb-4 uppercase text-xs">
        {feature.title}
      </h3>
      <p className="text-[#737373] text-sm leading-relaxed font-light">
        {feature.description}
      </p>

      {}
      <div className="mt-8 pt-4 border-t border-[#E5E5E5] flex items-center gap-2 text-[10px] font-medium tracking-widest uppercase text-[#B85B3F]">
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

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
          {WHY_CHOOSE_FEATURES.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
