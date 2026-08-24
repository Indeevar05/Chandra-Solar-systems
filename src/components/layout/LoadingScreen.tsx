import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <div className="w-96 h-96 bg-[#2D6A4F]/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative flex flex-col items-center gap-6">
            <motion.img
              src="/logo.png"
              alt="Chandra Solar Systems"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="h-16 md:h-20 w-auto object-contain"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#5C6B62] text-xs font-medium uppercase tracking-widest"
            >
              Vizianagaram, Andhra Pradesh
            </motion.p>

            <motion.div
              className="w-40 h-0.5 bg-[#D8E0DA] rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-[#2D6A4F] rounded-full"
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
