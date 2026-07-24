import React from 'react'
import { motion } from 'framer-motion'
import { SITE, NAV_LINKS } from '@/constants'
import {
  SolarPanelIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
} from '@/components/icons'
import { Button } from '@/components/shared/Button'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1C1C1C] relative overflow-hidden" role="contentinfo">
      
      {}
      <div className="relative pt-32 pb-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=2000&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/50 to-[#1C1C1C]" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-none mb-10">
              Ready to <br />
              <span className="italic font-light text-[#B85B3F]">Switch?</span>
            </h2>
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="lg"
              className="bg-white text-[#1C1C1C] hover:bg-[#E5E5E5] px-12 text-lg inline-flex"
            >
              Request Formal Proposal
            </Button>
          </motion.div>
        </div>
      </div>

      {}
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 pb-20 border-b border-[#333333]">
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-serif text-white mb-4">Join our newsletter.</h3>
            <p className="text-[#737373] font-light mb-6 max-w-md">Get the latest insights on solar technology, government policies, and architectural integration.</p>
            <form className="flex gap-4 max-w-md">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-transparent border-b border-[#333333] text-white px-0 py-3 focus:outline-none focus:border-white transition-colors"
                required
              />
              <button 
                type="submit" 
                className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-transparent hover:border-white transition-all pb-1 mt-auto mb-3"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 text-white font-serif items-center text-center">
            <div className="text-lg font-bold tracking-widest uppercase">Adani</div>
            <div className="text-lg font-bold tracking-widest uppercase">Tata</div>
            <div className="text-lg font-bold tracking-widest uppercase">Luminous</div>
            <div className="text-lg font-bold tracking-widest uppercase">Waaree</div>
          </div>

        </div>
      </div>

      {}
      <div className="container-custom py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        
        {}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 flex items-center justify-center text-white">
              <SolarPanelIcon size={24} strokeWidth={1} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-white">Chandra</span>
              <span className="text-[9px] font-light text-[#737373] tracking-[0.3em] uppercase">Systems</span>
            </div>
          </div>
          <p className="text-[#737373] text-sm leading-relaxed mb-8 font-light">
            Vizianagaram's premium solar integration firm. Precision engineering for discerning property owners.
          </p>
          <div className="flex items-center gap-6">
            {[
              { Icon: FacebookIcon, href: SITE.social.facebook, label: 'Facebook' },
              { Icon: InstagramIcon, href: SITE.social.instagram, label: 'Instagram' },
              { Icon: YouTubeIcon, href: SITE.social.youtube, label: 'YouTube' },
              { Icon: LinkedInIcon, href: SITE.social.linkedin, label: 'LinkedIn' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#737373] hover:text-white transition-colors duration-300"
              >
                <Icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {}
        <div>
          <h3 className="text-white text-[10px] font-medium mb-8 uppercase tracking-[0.3em]">Navigation</h3>
          <ul className="space-y-4">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className="text-[#737373] hover:text-white text-sm transition-colors font-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {}
        <div>
          <h3 className="text-white text-[10px] font-medium mb-8 uppercase tracking-[0.3em]">Expertise</h3>
          <ul className="space-y-4">
            {['Residential Architecture', 'Commercial Facilities', 'Grid-Tied Systems', 'Off-Grid Solutions', 'Hybrid Integration'].map(s => (
              <li key={s}>
                <a href="#services" className="text-[#737373] hover:text-white text-sm transition-colors font-light">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {}
        <div>
          <h3 className="text-white text-[10px] font-medium mb-8 uppercase tracking-[0.3em]">Headquarters</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4 text-[#737373] text-sm leading-relaxed font-light">
              <MapPinIcon size={18} className="text-white shrink-0 mt-0.5" strokeWidth={1} />
              <span>
                {SITE.address.line1},<br />
                {SITE.address.line3},<br />
                {SITE.address.city}, {SITE.address.state}
              </span>
            </li>
            <li className="flex items-center gap-4 text-[#737373] text-sm font-light">
              <PhoneIcon size={18} className="text-white shrink-0" strokeWidth={1} />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-white transition-colors">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-4 text-[#737373] text-sm font-light">
              <MailIcon size={18} className="text-white shrink-0" strokeWidth={1} />
              <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {}
      <div className="border-t border-[#333333] relative z-10">
        <div className="container-custom py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[#737373] text-[10px] font-medium uppercase tracking-widest">
            © {year} Chandra Solar Systems
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[#737373] hover:text-white text-[10px] uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#737373] hover:text-white text-[10px] uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  )
}
