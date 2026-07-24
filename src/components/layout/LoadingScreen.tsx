import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SolarPanelIcon } from '@/components/icons'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          aria-label="Loading Chandra Solar Systems"
          role="status"
        >
          {}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <div className="w-96 h-96 bg-[#FDB813]/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            {}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FDB813] to-[#f5a800] flex items-center justify-center shadow-glow"
            >
              <SolarPanelIcon size={28} className="text-white" strokeWidth={2} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-white text-xl font-bold tracking-tight">Chandra Solar Systems</span>
              <span className="text-white/40 text-xs font-medium uppercase tracking-widest">Vizianagaram, Andhra Pradesh</span>
            </motion.div>

            {}
            <motion.div
              className="w-40 h-0.5 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#FDB813] to-[#16A34A] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
