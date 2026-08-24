import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PREMIUM_BRANDS = [
  {
    name: 'Tata Power Solar',
    logoImage: '/images/tata-logo.png',
    image: '/images/tata-installation.png',
    tagline: 'Highest Efficiency',
    description: 'Tier-1 bifacial panels that capture sunlight from both sides, maximizing yield for luxury residences.',
  },
  {
    name: 'Adani Solar',
    logoImage: '/images/adani-logo.png',
    image: '/images/adani-installation.png',
    tagline: '25 Years Warranty',
    description: 'Robust engineering built for the Indian climate. Exceptional low-light performance and extreme durability.',
  },
  {
    name: 'Waaree Energies',
    logoImage: '/images/waaree-logo.png',
    image: '/images/waaree-installation.png',
    tagline: 'Premium Aesthetics',
    description: 'All-black panel designs that blend seamlessly with modern architectural roofing.',
  },
]

function BrandShowcase({ brand, index }: { brand: typeof PREMIUM_BRANDS[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-10 lg:py-12 border-b border-[#E5E5E5] last:border-b-0 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-[48%] relative h-[220px] sm:h-[260px] lg:h-[320px]"
      >
        <img
          src={brand.image}
          alt={brand.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-[52%] flex flex-col items-start"
      >
        <img
          src={`${brand.logoImage}?v=3`}
          alt={`${brand.name} logo`}
          className="h-11 sm:h-12 w-auto max-w-[180px] object-contain object-left mb-6"
        />
        <div className="text-[#2D6A4F] text-[10px] font-medium tracking-[0.22em] uppercase mb-3">
          {brand.tagline}
        </div>
        <p className="text-base text-[#737373] font-light leading-relaxed max-w-md">
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
        <div className="mb-8 lg:mb-10">
          <span className="text-[#1C1C1C] text-[10px] font-medium tracking-[0.3em] uppercase block mb-3">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1C1C1C] max-w-2xl leading-tight">
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
