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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            {}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8 p-4 bg-[#F9F9F6] border border-[#E5E5E5]">
              <img 
                src="/images/pm-surya-ghar-logo.png" 
                alt="PM Surya Ghar Muft Bijli Yojana Official Logo" 
                className="h-20 md:h-24 w-auto object-contain mix-blend-multiply shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-[#1C1C1C] text-[11px] font-bold tracking-[0.2em] uppercase">
                  PM Surya Ghar Muft Bijli Yojana
                </span>
                <span className="text-xs text-[#737373] mt-1 font-light">
                  Central Government Authorized Subsidy Scheme
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-tight mb-8">
              Govt. Subsidy <br />
              <span className="italic font-light text-[#737373]">Up to ₹78,000</span>
            </h2>

            <p className="text-lg text-[#737373] font-light leading-relaxed mb-12 max-w-lg">
              India's largest rooftop solar scheme provides direct subsidies to households. We handle all DISCOM approvals, feasibility checks, and net-metering paperwork.
            </p>

            <div className="w-full border-t border-[#E5E5E5] pt-8 mb-12">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#1C1C1C] mb-6">Eligibility & Process</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-[#B85B3F] font-bold">01</span>
                  <span className="text-[#737373] font-light text-sm">Valid residential electricity connection</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#B85B3F] font-bold">02</span>
                  <span className="text-[#737373] font-light text-sm">Register on National Portal via our engineers</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#B85B3F] font-bold">03</span>
                  <span className="text-[#737373] font-light text-sm">Installation & Net Metering approval</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-[#B85B3F] font-bold">04</span>
                  <span className="text-[#737373] font-light text-sm">Subsidy credited directly to your bank</span>
                </li>
              </ul>
            </div>

            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRightIcon size={16} strokeWidth={1} />}
            >
              Check Eligibility
            </Button>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] lg:h-[800px] w-full"
          >
            <div className="absolute inset-0 bg-[#F9F9F6] -translate-x-4 translate-y-4" />
            <div className="relative h-full w-full overflow-hidden">
              <img
                src="/images/family.png"
                alt="Happy family with solar installation"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
            
            <div className="absolute top-6 left-4 lg:top-10 lg:-left-8 bg-white p-4 lg:p-6 shadow-card max-w-[260px]">
              <div className="text-2xl lg:text-3xl font-serif text-[#1C1C1C] mb-2">₹78,000</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#B85B3F]">Maximum Subsidy</div>
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
