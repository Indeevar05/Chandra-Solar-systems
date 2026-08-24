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
      className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0 bg-[#14261C]">
        <img
          src="/images/hero_indian_solar.png"
          alt="Premium Solar Installation"
          className="w-full h-full object-cover scale-105 animate-ken-burns opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#14261C]/70 via-[#14261C]/35 to-[#14261C]/90" />
      </div>

      <div className="container-custom relative z-10 w-full flex flex-col items-center text-center">
        <div className="max-w-3xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <div className="mb-5">
              <span className="text-[#A8E6C3] text-[10px] font-medium tracking-[0.28em] uppercase">
                Govt. Authorized Installer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] lg:text-[4.25rem] font-serif text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
              Chandra Solar Systems <br />
              <span className="italic font-light">for Better Homes</span>
            </h1>

            <p className="text-base md:text-[17px] text-white/85 max-w-lg leading-relaxed font-light mb-8">
              Integrating state-of-the-art clean energy solutions into Vizianagaram's finest properties. Experience up to 90% reduction in energy costs without compromising on design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
              <Button
                as="a"
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-[#3D8B6E] text-white hover:bg-[#2D6A4F] border-none transition-all duration-500 shadow-xl"
              >
                Schedule Consultation
              </Button>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2.5 h-12 px-5 bg-[#14261C]/75 backdrop-blur-sm border border-white/15 text-white no-underline hover:bg-[#14261C]/90 transition-colors"
              >
                <span className="text-white/75 text-sm italic font-serif leading-none">or call</span>
                <span className="text-sm font-medium tabular-nums tracking-normal leading-none">
                  {SITE.phone}
                </span>
              </a>
            </div>

            <div className="mt-10 w-full max-w-lg grid grid-cols-2 divide-x divide-white/25 pt-8 border-t border-white/20">
              <div className="flex flex-col items-center pr-6 sm:pr-8">
                <div className="text-4xl sm:text-5xl font-serif text-white leading-none drop-shadow-md">
                  25<span className="text-2xl sm:text-3xl italic text-[#A8E6C3] ml-1">Yr</span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white mt-3 font-medium">Warranty</div>
              </div>
              <div className="flex flex-col items-center pl-6 sm:pl-8">
                <div className="text-4xl sm:text-5xl font-serif text-white leading-none drop-shadow-md">
                  Tier <span className="font-sans font-semibold text-[2rem] sm:text-[2.5rem] tabular-nums tracking-normal text-[#A8E6C3]">1</span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.24em] text-white mt-3 font-medium">Equipment</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
