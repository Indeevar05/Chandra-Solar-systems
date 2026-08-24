import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/shared/Button'
import { ArrowRightIcon } from '@/components/icons'

export function PMSuryaGhar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="pm-surya-ghar" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {}
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/images/pm-surya-ghar-logo.png" 
                alt="PM Surya Ghar Muft Bijli Yojana" 
                className="h-12 w-auto object-contain shrink-0"
              />
              <span className="text-xs text-[#737373] font-light leading-snug">
                Central Government Authorized Subsidy Scheme
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-[#1C1C1C] leading-tight mb-5">
              Govt. Subsidy <br />
              <span className="italic font-light text-[#737373]">Up to <span className="not-italic font-sans font-normal tabular-nums tracking-normal">₹78,000</span></span>
            </h2>

            <p className="text-base text-[#737373] font-light leading-relaxed mb-8 max-w-lg">
              India's largest rooftop solar scheme provides direct subsidies to households. We handle all DISCOM approvals, feasibility checks, and net-metering paperwork.
            </p>

            <div className="w-full border-t border-[#E5E5E5] pt-6 mb-8">
              <h3 className="text-[11px] font-semibold uppercase tracking-widest text-[#1C1C1C] mb-4">Eligibility & Process</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#2D6A4F] font-sans text-sm font-semibold tabular-nums w-6 shrink-0">01</span>
                  <span className="text-[#737373] font-light text-sm">Valid residential electricity connection</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2D6A4F] font-sans text-sm font-semibold tabular-nums w-6 shrink-0">02</span>
                  <span className="text-[#737373] font-light text-sm">Register on National Portal via our engineers</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2D6A4F] font-sans text-sm font-semibold tabular-nums w-6 shrink-0">03</span>
                  <span className="text-[#737373] font-light text-sm">Installation & Net Metering approval</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#2D6A4F] font-sans text-sm font-semibold tabular-nums w-6 shrink-0">04</span>
                  <span className="text-[#737373] font-light text-sm">Subsidy credited directly to your bank</span>
                </li>
              </ul>
            </div>

            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="md"
              rightIcon={<ArrowRightIcon size={14} strokeWidth={1} />}
            >
              Check Eligibility
            </Button>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[280px] sm:h-[360px] lg:h-[440px] w-full"
          >
            <div className="absolute inset-0 bg-[#F4F7F4] -translate-x-4 translate-y-4" />
            <div className="relative h-full w-full overflow-hidden">
              <img
                src="/images/family.png"
                alt="Happy family with solar installation"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            
            <div className="absolute top-4 left-4 lg:top-6 lg:-left-6 bg-white px-4 py-3 shadow-card max-w-[200px]">
              <div className="text-xl font-sans font-medium tabular-nums tracking-normal text-[#1C1C1C] mb-1">₹78,000</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#2D6A4F]">Maximum Subsidy</div>
              <div className="text-xs text-[#737373] mt-2 leading-relaxed">
                Directly credited to your Aadhaar linked bank account in 30 days.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
