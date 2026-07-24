import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/shared/Button'
import { SITE } from '@/constants'
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from '@/components/icons'

export function CTAStrip() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#FDB813] via-[#f5a800] to-[#e59500] py-16"
      aria-labelledby="cta-strip-heading"
    >
      {}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#0F172A]/10 rounded-full blur-3xl" />
        {}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0F172A 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A]/10 text-[#0F172A] text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/60 inline-block" aria-hidden="true" />
                Limited Time Offer
              </span>
              <h2
                id="cta-strip-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] leading-tight font-serif"
              >
                Get a Free Quotation
              </h2>
              <p className="mt-3 text-[#0F172A]/70 text-base max-w-xl">
                Book a free professional site survey this month and receive a detailed solar feasibility report — absolutely free, no obligation to install.
              </p>
            </motion.div>
          </div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <motion.a
              href={`https://wa.me/${SITE.whatsappRaw}?text=Hi! I'd like to get a free solar quotation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-[#0F172A] text-white font-semibold text-sm shadow-md hover:shadow-xl transition-all whitespace-nowrap shrink-0"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <WhatsAppIcon size={18} />
              Book on WhatsApp
            </motion.a>
            <motion.a
              href={`tel:${SITE.phoneRaw}`}
              className="flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-white/90 text-[#0F172A] font-semibold text-sm shadow-sm hover:shadow-md transition-all whitespace-nowrap shrink-0"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <PhoneIcon size={16} strokeWidth={2} />
              {SITE.phone}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
