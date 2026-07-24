import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '@/constants'
import { PhoneIcon, WhatsAppIcon, ArrowUpIcon } from '@/components/icons'
import { useScrollY } from '@/hooks/useScrollProgress'
import { openWhatsApp } from '@/lib/utils'

export function FloatingButtons() {
  const scrollY = useScrollY()
  const showBackToTop = scrollY > 500

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-[90] flex flex-col items-end gap-3"
      role="region"
      aria-label="Quick contact buttons"
    >
      {}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#64748B] dark:text-slate-400 shadow-md hover:shadow-xl hover:text-[#0F172A] dark:hover:text-white hover:-translate-y-1 transition-all cursor-pointer"
            aria-label="Back to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUpIcon size={18} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

      {}
      <motion.a
        href={`tel:${SITE.phoneRaw}`}
        className="w-14 h-14 rounded-full bg-[#0F172A] flex items-center justify-center text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={`Call us at ${SITE.phone}`}
        title={`Call: ${SITE.phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
      >
        <PhoneIcon size={20} strokeWidth={2} />
      </motion.a>

      {}
      <motion.button
        onClick={() => openWhatsApp(SITE.whatsappRaw, 'Hi! I\'m interested in solar installation. Please send me more details.')}
        className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 pulse-glow transition-all cursor-pointer"
        style={{ '--tw-shadow-color': 'rgba(37, 211, 102, 0.3)' } as React.CSSProperties}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={`Chat on WhatsApp: ${SITE.whatsapp}`}
        title={`WhatsApp: ${SITE.whatsapp}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
      >
        <WhatsAppIcon size={24} />
      </motion.button>
    </div>
  )
}
