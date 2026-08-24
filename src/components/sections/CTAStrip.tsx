import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/shared/Button'
import { SITE } from '@/constants'
import { PhoneIcon, WhatsAppIcon } from '@/components/icons'
import { getWhatsAppUrl } from '@/lib/utils'

export function CTAStrip() {
  return (
    <section
      className="relative overflow-hidden bg-[#14261C] py-12 md:py-14"
      aria-labelledby="cta-strip-heading"
    >
      <div className="relative container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2
                id="cta-strip-heading"
                className="text-2xl sm:text-3xl font-serif text-white leading-tight"
              >
                Get a Free Quotation
              </h2>
              <p className="mt-3 text-white/65 text-sm leading-relaxed font-light">
                Book a free professional site survey this month and receive a detailed solar feasibility report — absolutely free, no obligation to install.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0"
          >
            <Button
              as="a"
              href={getWhatsAppUrl("Hi Chandra Solar Systems, I'd like to get a free solar quotation.", SITE.whatsappRaw)}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              leftIcon={<WhatsAppIcon size={14} />}
              className="w-full sm:w-auto bg-[#3D8B6E] text-white hover:bg-[#2D6A4F]"
            >
              Book on WhatsApp
            </Button>
            <Button
              as="a"
              href={`tel:${SITE.phoneRaw}`}
              variant="outline"
              size="md"
              leftIcon={<PhoneIcon size={14} strokeWidth={1.5} />}
              className="w-full sm:w-auto border-white/40 text-white hover:bg-white hover:text-[#14261C] tracking-normal normal-case tabular-nums"
            >
              {SITE.phone}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
