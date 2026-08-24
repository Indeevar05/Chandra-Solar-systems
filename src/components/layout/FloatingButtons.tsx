import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '@/constants'
import { PhoneIcon, WhatsAppIcon, ArrowUpIcon } from '@/components/icons'
import { useScrollY } from '@/hooks/useScrollProgress'
import { getWhatsAppUrl } from '@/lib/utils'

export function FloatingButtons() {
  const scrollY = useScrollY()
  const showBackToTop = scrollY > 500

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-[90] flex flex-col items-center gap-3.5"
      role="region"
      aria-label="Quick contact buttons"
    >
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center text-[#737373] shadow-sm hover:text-[#1C1C1C] hover:-translate-y-0.5 transition-all cursor-pointer"
            aria-label="Back to top"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            <ArrowUpIcon size={16} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={`tel:${SITE.phoneRaw}`}
        className="w-11 h-11 rounded-full bg-[#14261C] flex items-center justify-center text-white shadow-md hover:-translate-y-0.5 transition-all"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={`Call us at ${SITE.phone}`}
        title={`Call: ${SITE.phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
      >
        <PhoneIcon size={16} strokeWidth={2} />
      </motion.a>

      <motion.a
        href={getWhatsAppUrl(SITE.whatsappMessage, SITE.whatsappRaw)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md hover:-translate-y-0.5 transition-all"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={`Chat on WhatsApp: ${SITE.whatsapp}`}
        title={`WhatsApp: ${SITE.whatsapp}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
      >
        <WhatsAppIcon size={18} />
      </motion.a>
    </div>
  )
}
