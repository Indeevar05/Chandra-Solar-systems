import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn, getWhatsAppUrl } from '@/lib/utils'
import { SITE, NAV_LINKS } from '@/constants'
import { useScrollY } from '@/hooks/useScrollProgress'
import { Button } from '@/components/shared/Button'
import {
  PhoneIcon,
  WhatsAppIcon,
} from '@/components/icons'
import { mobileMenuVariants, mobileMenuLinkVariants } from '@/lib/animations'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollY = useScrollY()
  const isScrolled = scrollY > 20

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-[100]',
          'transition-all duration-500',
          'bg-white border-b border-[#E5E5E5]',
          isScrolled ? 'py-3 shadow-sm' : 'py-4'
        )}
        role="banner"
      >
        <div className="container-custom flex items-center justify-between gap-8">
          <a
            href="/"
            className="flex items-center group focus-visible:outline-none"
            aria-label="Chandra Solar Systems — Home"
          >
            <img
              src="/logo.png"
              alt="Chandra Solar Systems"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium animated-underline transition-colors duration-300 text-[#5C6B62] hover:text-[#2D6A4F]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={getWhatsAppUrl(SITE.whatsappMessage, SITE.whatsappRaw)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] uppercase tracking-widest font-medium transition-colors duration-300 flex items-center gap-2 animated-underline text-[#737373] hover:text-[#25D366] leading-none"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={13} />
              <span>WhatsApp</span>
            </a>

            <Button
              as="a"
              href={`tel:${SITE.phoneRaw}`}
              variant="primary"
              size="sm"
            >
              Call Now
            </Button>
          </div>

          {}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 transition-colors cursor-pointer text-[#1C1C1C]"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className={cn("block w-6 h-px transition-all duration-300 bg-[#1C1C1C]", mobileOpen && "rotate-45 translate-y-[7px]")} />
            <span className={cn("block w-6 h-px transition-all duration-300 bg-[#1C1C1C]", mobileOpen && "opacity-0")} />
            <span className={cn("block w-6 h-px transition-all duration-300 bg-[#1C1C1C]", mobileOpen && "-rotate-45 -translate-y-[7px]")} />
          </button>
        </div>
      </motion.header>

      {}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[99] bg-white flex flex-col px-6 pt-24 pb-10 overflow-y-auto"
          >
            <nav className="relative flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  variants={mobileMenuLinkVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => setMobileOpen(false)}
                  className="text-[#1C1C1C] text-xl font-serif tracking-tight flex items-center justify-between border-b border-[#E5E5E5] py-4 group"
                >
                  <span>{link.label}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#E5E5E5] group-hover:text-[#1C1C1C] transition-colors">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </motion.a>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 pt-8">
              <a
                href={getWhatsAppUrl(SITE.whatsappMessage, SITE.whatsappRaw)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-transparent border border-[#25D366] text-[#25D366] text-[11px] font-medium uppercase tracking-[0.18em] leading-none transition-colors hover:bg-[#25D366] hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                <WhatsAppIcon size={14} />
                WhatsApp
              </a>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 bg-[#1C1C1C] text-white text-sm font-medium tabular-nums tracking-normal leading-none"
                onClick={() => setMobileOpen(false)}
              >
                <PhoneIcon size={14} strokeWidth={1.5} />
                {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
