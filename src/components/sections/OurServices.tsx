import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/shared/Button'
import { SERVICES } from '@/constants'
import { ArrowRightIcon } from '@/components/icons'

const SERVICE_IMAGES: Record<string, string> = {
  residential: '/images/residential.png',
  commercial: '/images/commercial.png',
  'on-grid': 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80',
  'off-grid': 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=1600&q=80',
  hybrid: '/images/hybrid.png',
  maintenance: 'https://images.unsplash.com/photo-1581092926214-ee3f62eb74b1?w=1600&q=80',
}

function ServiceRow({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const isEven = index % 2 === 0
  const image = SERVICE_IMAGES[service.id] || SERVICE_IMAGES['on-grid']

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-10 lg:py-12 border-b border-[#E5E5E5] last:border-b-0 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-[48%] relative h-[220px] sm:h-[280px] lg:h-[340px]"
      >
        <div className="absolute inset-0 bg-[#F4F7F4] translate-x-4 translate-y-4" />
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </motion.div>

      {}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-[52%] flex flex-col items-start"
      >
        <div className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#2D6A4F] mb-3">
          {service.size}
        </div>
        <h3 className="text-3xl lg:text-4xl font-serif text-[#1C1C1C] mb-4 leading-tight">
          {service.title}
        </h3>
        <p className="text-base text-[#737373] font-light leading-relaxed mb-7 max-w-md">
          {service.description}
        </p>
        
        <Button
          as="a"
          href="#contact"
          variant="outline"
          size="md"
          rightIcon={<ArrowRightIcon size={14} strokeWidth={1} />}
        >
          Explore Solution
        </Button>
      </motion.div>
    </div>
  )
}

export function OurServices() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        <div className="mb-8 lg:mb-10">
          <span className="text-[#1C1C1C] text-[10px] font-medium tracking-[0.3em] uppercase block mb-3">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1C1C1C] max-w-2xl leading-tight">
            Complete Solar Solutions <span className="italic font-light text-[#737373]">Under One Roof</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
