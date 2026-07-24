import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/shared/Button'
import { SITE } from '@/constants'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 lg:pt-32 lg:pb-32 overflow-hidden"
      aria-label="Hero section"
    >
      {}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="/images/hero_indian_solar.png"
          alt="Premium Solar Installation"
          className="w-full h-full object-cover scale-105 animate-ken-burns filter contrast-110 saturate-110 brightness-110 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1C1C1C]/70" />
      </div>

      <div className="container-custom relative z-10 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            {}
            <div className="mb-10">
              <span className="text-[#E6C280] text-[11px] font-medium tracking-[0.4em] uppercase">
                Govt. Authorized Installer
              </span>
            </div>
            
            {}
            <h1 className="text-5xl sm:text-6xl md:text-[5rem] lg:text-[5.5rem] font-serif text-white leading-[1.05] tracking-tight mb-8 drop-shadow-lg">
              Chandra Solar Systems <br />
              <span className="italic font-light text-white drop-shadow-md">for Better Homes</span>
            </h1>
            
            {}
            <p className="text-lg md:text-xl text-[#E0E0E0] max-w-2xl leading-relaxed font-light mb-14 drop-shadow-md">
              Integrating state-of-the-art clean energy solutions into Vizianagaram's finest properties. Experience up to 90% reduction in energy costs without compromising on design.
            </p>
            
            {}
            <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-[#E6C280] text-[#1C1C1C] hover:bg-[#F2D5A1] border-none transition-all duration-500 shadow-xl"
              >
                Schedule Consultation
              </Button>
              <div className="flex items-center gap-3">
                <span className="text-[#E0E0E0] text-sm italic font-serif">or call</span>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="text-white hover:text-[#E6C280] transition-colors duration-300 text-sm tracking-[0.2em] uppercase font-medium animated-underline drop-shadow-sm"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
            
            {}
            <div className="mt-24 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 pt-12 border-t border-white/10">
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-serif text-[#E6C280] drop-shadow-md">25<span className="text-3xl text-[#E6C280]/80 italic">Yr</span></div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#E0E0E0] mt-3 font-medium">Warranty</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-serif text-[#E6C280] drop-shadow-md">Tier<span className="text-[#E6C280]/80">-1</span></div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[#E0E0E0] mt-3 font-medium">Equipment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
