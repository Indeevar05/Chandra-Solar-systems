import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FAQ_ITEMS, SITE } from '@/constants'

function FAQItem({ item, index }: { item: typeof FAQ_ITEMS[number]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-[#E5E5E5] last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer group"
        aria-expanded={isOpen}
        id={`faq-btn-${item.id}`}
        aria-controls={`faq-panel-${item.id}`}
      >
        <span className={`text-base md:text-lg font-light leading-snug transition-colors duration-300 ${isOpen ? 'text-[#1C1C1C]' : 'text-[#737373] group-hover:text-[#1C1C1C]'}`}>
          {item.question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 border flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'border-[#1C1C1C] bg-[#1C1C1C] text-white rotate-45' : 'border-[#E5E5E5] text-[#737373]'
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-panel-${item.id}`}
            role="region"
            aria-labelledby={`faq-btn-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-5 pr-12 text-[#737373] font-light leading-relaxed text-sm">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <span className="text-[#1C1C1C] text-[10px] font-medium tracking-[0.3em] uppercase block mb-3">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#1C1C1C] leading-tight mb-4">
                Common <span className="italic font-light text-[#737373]">Questions</span>
              </h2>
              <p className="text-[#737373] font-light leading-relaxed mb-6 text-sm">
                Everything you need to know about going solar in Andhra Pradesh — from subsidies to installation to long-term performance.
              </p>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="text-[10px] font-medium uppercase tracking-widest text-[#1C1C1C] animated-underline pb-1"
              >
                Still have questions? Call us →
              </a>
            </div>
          </div>

          {}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {FAQ_ITEMS.map((item, i) => (
                <FAQItem key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
