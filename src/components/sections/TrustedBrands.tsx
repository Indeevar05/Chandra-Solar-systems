import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/shared/Button'

function TataSolarLogo() {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto text-[#1C1C1C]">
      <text x="0" y="28" fontFamily="sans-serif" fontSize="24" fontWeight="700" fill="currentColor">TATA</text>
      <text x="0" y="40" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="currentColor" opacity="0.5">POWER SOLAR</text>
    </svg>
  )
}

function AdaniSolarLogo() {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto text-[#1C1C1C]">
      <text x="0" y="28" fontFamily="sans-serif" fontSize="24" fontWeight="700" fill="currentColor">ADANI</text>
      <text x="0" y="40" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="currentColor" opacity="0.5">SOLAR</text>
    </svg>
  )
}

function WaareeLogo() {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto text-[#1C1C1C]">
      <text x="0" y="28" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill="currentColor">WAAREE</text>
      <text x="0" y="40" fontFamily="sans-serif" fontSize="11" fontWeight="500" fill="currentColor" opacity="0.5">ENERGIES</text>
    </svg>
  )
}

const PREMIUM_BRANDS = [
  {
    name: 'Tata Power Solar',
    Logo: TataSolarLogo,
    logoImage: '/images/tata-logo.png',
    image: '/images/tata-installation.png',
    tagline: 'Highest Efficiency',
    description: 'Tier-1 bifacial panels that capture sunlight from both sides, maximizing yield for luxury residences.',
  },
  {
    name: 'Adani Solar',
    Logo: AdaniSolarLogo,
    logoImage: '/images/adani-logo.png',
    image: '/images/adani-installation.jpg',
    tagline: '25 Years Warranty',
    description: 'Robust engineering built for the Indian climate. Exceptional low-light performance and extreme durability.',
  },
  {
    name: 'Waaree Energies',
    Logo: WaareeLogo,
    logoImage: '/images/waaree-logo.png',
    image: '/images/waaree-installation.png',
    tagline: 'Premium Aesthetics',
    description: 'All-black panel designs that blend seamlessly with modern architectural roofing.',
  }
]

function BrandShowcase({ brand, index }: { brand: typeof PREMIUM_BRANDS[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-16 py-24 border-b border-[#E5E5E5] last:border-b-0 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 relative h-[350px] lg:h-[500px]"
      >
        <div className="absolute inset-0 bg-[#F9F9F6] translate-x-4 -translate-y-4 z-0" />
        <img
          src={brand.image}
          alt={brand.name}
          className="absolute inset-0 w-full h-full object-cover z-10"
          onError={(e) => {
            const target = e.currentTarget
            target.src = '/images/tata-installation.png'
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-1/2 flex flex-col items-start"
      >
        <img 
          src={brand.logoImage} 
          alt={`${brand.name} logo`} 
          className="h-16 w-auto object-contain mb-2 mix-blend-multiply filter brightness-110 contrast-125" 
          style={{ mixBlendMode: 'multiply' }} 
        />
        <brand.Logo />
        <div className="mt-12 text-[#B85B3F] text-[10px] font-medium tracking-[0.3em] uppercase mb-4">
          {brand.tagline}
        </div>
        <p className="text-xl text-[#737373] font-light leading-relaxed">
          {brand.description}
        </p>
      </motion.div>
    </div>
  )
}

export function TrustedBrands() {
  return (
    <section className="section bg-[var(--color-secondary)]">
      <div className="container-custom">
        <div className="mb-20">
          <span className="text-[#1C1C1C] text-[10px] font-medium tracking-[0.3em] uppercase block mb-6">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] max-w-2xl leading-tight">
            Premium Tier-1 <span className="italic font-light text-[#737373]">Equipment</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {PREMIUM_BRANDS.map((brand, i) => (
            <BrandShowcase key={brand.name} brand={brand} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
