import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/shared/Button'
import { useToast } from '@/context/ToastContext'
import { SITE } from '@/constants'
import { openWhatsApp } from '@/lib/utils'

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: z.string().email('Enter a valid email').optional().or(z.literal('')),
  city: z.string().min(2, 'Please enter your city'),
  monthlyBill: z.string().min(1, 'Please select your monthly bill range'),
  systemType: z.string().min(1, 'Please select a system type'),
  message: z.string().optional(),
})

type QuoteFormData = z.infer<typeof quoteSchema>

const BILL_OPTIONS = ['Under ₹1,000', '₹1,000 – ₹2,000', '₹2,000 – ₹4,000', '₹4,000 – ₹7,000', 'Above ₹7,000']
const SYSTEM_OPTIONS = ['Residential – On-Grid', 'Residential – Hybrid', 'Commercial Solar', 'Off-Grid System', 'Just Need Information']

function InputField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-medium uppercase tracking-widest text-[#1C1C1C]">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

const inputCls = 'w-full h-12 pb-2 border-b border-[#E5E5E5] bg-transparent text-[#1C1C1C] text-sm placeholder:text-[#737373] focus:outline-none focus:border-[#1C1C1C] transition-colors rounded-none'
const selectCls = inputCls

export function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { showToast } = useToast()

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  })

  const onSubmit = async (data: QuoteFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const msg = `Hi, I'm ${data.name} from ${data.city}. Monthly bill: ${data.monthlyBill}. Interested in: ${data.systemType}. Phone: ${data.phone}.${data.message ? ` Message: ${data.message}` : ''}`
    openWhatsApp(SITE.whatsappRaw, msg)
    showToast({ type: 'success', message: 'Quote request sent! We\'ll contact you within 24 hours.' })
    reset()
  }

  return (
    <section id="contact" className="section bg-[var(--color-secondary)]">
      <div className="container-custom">
        <div className="mb-20 text-center">
          <span className="text-[#1C1C1C] text-[10px] font-medium tracking-[0.3em] uppercase block mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-tight">
            Start Your <span className="italic font-light text-[#737373]">Solar Journey</span>
          </h2>
        </div>

        <div ref={ref} className="max-w-6xl mx-auto">
          {}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[400px] lg:h-[600px] mb-20 relative"
          >
            <div className="absolute inset-0 bg-[#E5E5E5] translate-x-4 -translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
              alt="Chandra Solar Systems Office"
              className="relative w-full h-full object-cover"
            />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col gap-12"
            >
              <div>
                <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#B85B3F] mb-6">Headquarters</h3>
                <div className="text-xl font-serif text-[#1C1C1C] leading-relaxed mb-8">
                  {SITE.address.line1}<br />
                  {SITE.address.line2}<br />
                  {SITE.address.line3}<br />
                  {SITE.address.city}, {SITE.address.state}
                </div>
                
                <div className="flex flex-col gap-4 text-sm text-[#737373] font-light">
                  <p><strong className="text-[#1C1C1C] font-medium mr-2">Phone:</strong> {SITE.phone}</p>
                  <p><strong className="text-[#1C1C1C] font-medium mr-2">Email:</strong> {SITE.email}</p>
                  <p><strong className="text-[#1C1C1C] font-medium mr-2">Hours:</strong> {SITE.workingHours.weekdays}, {SITE.workingHours.hours}</p>
                </div>
              </div>

              {}
              <div className="w-full h-[300px] bg-[#E5E5E5]">
                <iframe
                  src={SITE.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chandra Solar Systems Location"
                  className="w-full h-full grayscale contrast-125 opacity-80 mix-blend-multiply"
                />
              </div>
            </motion.div>

            {}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 bg-white p-10 lg:p-16 shadow-sm border border-[#E5E5E5]"
            >
              <h3 className="text-3xl font-serif text-[#1C1C1C] mb-8">Request a Proposal</h3>
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <InputField label="Full Name *" error={errors.name?.message}>
                    <input {...register('name')} className={inputCls} placeholder="John Doe" />
                  </InputField>
                  <InputField label="Mobile Number *" error={errors.phone?.message}>
                    <input {...register('phone')} className={inputCls} placeholder="9603565222" type="tel" maxLength={10} />
                  </InputField>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <InputField label="Email (Optional)" error={errors.email?.message}>
                    <input {...register('email')} className={inputCls} placeholder="you@example.com" type="email" />
                  </InputField>
                  <InputField label="City *" error={errors.city?.message}>
                    <input {...register('city')} className={inputCls} placeholder="Vizianagaram" />
                  </InputField>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <InputField label="Monthly Bill *" error={errors.monthlyBill?.message}>
                    <select {...register('monthlyBill')} className={selectCls}>
                      <option value="">Select range</option>
                      {BILL_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </InputField>
                  <InputField label="System Type *" error={errors.systemType?.message}>
                    <select {...register('systemType')} className={selectCls}>
                      <option value="">Select type</option>
                      {SYSTEM_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </InputField>
                </div>

                <InputField label="Additional Details" error={errors.message?.message}>
                  <textarea
                    {...register('message')}
                    className={`${inputCls} h-24 py-3 resize-none`}
                    placeholder="Tell us about your roof space, requirements, etc..."
                  />
                </InputField>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full mt-4"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
