import React, { lazy, Suspense } from 'react'
import { ThemeProvider } from '@/context/ThemeContext'
import { ToastProvider } from '@/context/ToastContext'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingButtons } from '@/components/layout/FloatingButtons'
import { Hero } from '@/components/sections/Hero'
import { useLenis } from '@/hooks/useLenis'


const TrustedBrands     = lazy(() => import('@/components/sections/TrustedBrands').then(m => ({ default: m.TrustedBrands })))
const WhyChooseUs       = lazy(() => import('@/components/sections/WhyChooseUs').then(m => ({ default: m.WhyChooseUs })))
const PMSuryaGhar       = lazy(() => import('@/components/sections/PMSuryaGhar').then(m => ({ default: m.PMSuryaGhar })))
const OurServices       = lazy(() => import('@/components/sections/OurServices').then(m => ({ default: m.OurServices })))
const SavingsCalculator = lazy(() => import('@/components/sections/SavingsCalculator').then(m => ({ default: m.SavingsCalculator })))
const InstallationProcess = lazy(() => import('@/components/sections/InstallationProcess').then(m => ({ default: m.InstallationProcess })))
const FAQ               = lazy(() => import('@/components/sections/FAQ').then(m => ({ default: m.FAQ })))
const CTAStrip          = lazy(() => import('@/components/sections/CTAStrip').then(m => ({ default: m.CTAStrip })))
const Contact           = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })))


function SectionSkeleton() {
  return (
    <div className="section flex items-center justify-center" aria-hidden="true">
      <div className="w-8 h-8 rounded-full border-2 border-[#D8E0DA] border-t-[#3D8B6E] animate-spin" />
    </div>
  )
}


function AppInner() {
  useLenis() 

  return (
    <div className="relative bg-[#F4F7F4] min-h-screen">
      {}
      <FloatingButtons />

      {}
      <Navbar />

      {}
      <main id="main-content">
        {}
        <Hero />

        <Suspense fallback={<SectionSkeleton />}>
          <TrustedBrands />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <WhyChooseUs />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <PMSuryaGhar />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <OurServices />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <SavingsCalculator />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <InstallationProcess />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <CTAStrip />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>

      {}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AppInner />
      </ToastProvider>
    </ThemeProvider>
  )
}
