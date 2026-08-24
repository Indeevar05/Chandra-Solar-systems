import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { calculateSolar, formatINR, formatINRCompact, cn, getWhatsAppUrl } from '@/lib/utils'
import {
  SunIcon,
  RupeeIcon,
  LeafIcon,
  CalendarIcon,
  BoltIcon,
  ChartIcon,
} from '@/components/icons'
import { Button } from '@/components/shared/Button'
import { SITE } from '@/constants'

const BILL_PRESETS = [1000, 2000, 3000, 5000, 8000, 12000]

type PropertyType = 'residential' | 'commercial'

function AnimatedNumber({
  value,
  format = (n: number) => Math.round(n).toLocaleString('en-IN'),
  className,
}: {
  value: number
  format?: (n: number) => string
  className?: string
}) {
  const spring = useSpring(value, { stiffness: 90, damping: 20, mass: 0.6 })
  const [display, setDisplay] = useState(format(value))

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(format(v)))
    return unsub
  }, [spring, format])

  return <span className={cn('tabular-nums tracking-normal', className)}>{display}</span>
}

function MetricCard({
  label,
  value,
  hint,
  highlight,
  icon,
}: {
  label: string
  value: React.ReactNode
  hint?: string
  highlight?: boolean
  icon: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 p-4 border transition-colors',
        highlight
          ? 'bg-[#E8F5EE] border-[#B8D4C0]'
          : 'bg-[#F4F7F4] border-[#D8E0DA]'
      )}
    >
      <div className={cn('flex items-center gap-2', highlight ? 'text-[#2D6A4F]' : 'text-[#5C6B62]')}>
        {icon}
        <span className="text-[10px] font-medium uppercase tracking-widest">{label}</span>
      </div>
      <div className={cn('text-xl sm:text-2xl font-sans font-semibold leading-none', highlight ? 'text-[#2D6A4F]' : 'text-[#14261C]')}>
        {value}
      </div>
      {hint && <p className="text-[11px] text-[#5C6B62] font-light leading-snug">{hint}</p>}
    </div>
  )
}

export function SavingsCalculator() {
  const [bill, setBill] = useState(3000)
  const [propertyType, setPropertyType] = useState<PropertyType>('residential')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })
  const result = calculateSolar({ monthlyBill: bill, propertyType })
  const resultKey = `${bill}-${propertyType}-${result.systemSize}`

  const handleBillChange = useCallback((value: number) => {
    setBill(Math.min(50000, Math.max(0, value)))
  }, [])

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseInt(e.target.value, 10)
    if (e.target.value === '') {
      setBill(0)
      return
    }
    if (!isNaN(v) && v >= 0 && v <= 50000) {
      setBill(v)
    }
  }, [])

  const sliderPct = ((Math.min(bill, 20000) - 500) / (20000 - 500)) * 100

  return (
    <section id="calculator" className="section bg-[var(--color-secondary)] border-y border-[#D8E0DA]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="mb-7">
              <span className="text-[#14261C] text-[10px] font-medium tracking-[0.3em] uppercase block mb-3">
                Energy Analysis
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-[#14261C] leading-tight mb-3">
                Calculate Your <span className="italic font-light text-[#2D6A4F]">ROI</span>
              </h2>
              <p className="text-[#5C6B62] font-light text-sm max-w-xl">
                Live estimate for Vizianagaram using AP tariff, local solar yield (~130 units/kW/month), and PM Surya Ghar subsidy.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-7 border border-[#D8E0DA] shadow-sm">
              <div className="flex flex-wrap gap-2 mb-6">
                {([
                  { id: 'residential', label: 'Home' },
                  { id: 'commercial', label: 'Commercial' },
                ] as const).map(opt => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPropertyType(opt.id)}
                    className={cn(
                      'px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] border transition-colors cursor-pointer',
                      propertyType === opt.id
                        ? 'bg-[#2D6A4F] text-white border-[#2D6A4F]'
                        : 'bg-transparent text-[#5C6B62] border-[#D8E0DA] hover:border-[#2D6A4F] hover:text-[#2D6A4F]'
                    )}
                    aria-pressed={propertyType === opt.id}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <label className="block mb-3 text-xs font-medium text-[#14261C] uppercase tracking-widest">
                Average Monthly Bill
              </label>

              <div className="relative mb-5 flex items-center border-b border-[#D8E0DA] focus-within:border-[#2D6A4F] transition-colors">
                <span className="text-2xl font-light text-[#5C6B62] pr-2 pb-1">₹</span>
                <input
                  type="number"
                  value={bill || ''}
                  onChange={handleInput}
                  min={0}
                  max={50000}
                  step={100}
                  className="w-full h-14 text-3xl font-sans font-light tabular-nums tracking-normal text-[#14261C] bg-transparent focus:outline-none rounded-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="3000"
                  aria-label="Monthly electricity bill in rupees"
                />
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {BILL_PRESETS.map(preset => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handleBillChange(preset)}
                    className={cn(
                      'px-3.5 py-2 text-[11px] font-medium font-sans tabular-nums tracking-normal border transition-colors cursor-pointer',
                      bill === preset
                        ? 'bg-[#14261C] text-white border-[#14261C]'
                        : 'bg-transparent text-[#5C6B62] border-[#D8E0DA] hover:border-[#14261C] hover:text-[#14261C]'
                    )}
                    aria-pressed={bill === preset}
                  >
                    ₹{preset.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              <div className="relative mb-2">
                <input
                  type="range"
                  min={500}
                  max={20000}
                  step={100}
                  value={clampSlider(bill)}
                  onChange={handleInput}
                  className="w-full h-1.5 appearance-none bg-[#D8E0DA] accent-[#2D6A4F] cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #2D6A4F 0%, #2D6A4F ${sliderPct}%, #D8E0DA ${sliderPct}%, #D8E0DA 100%)`,
                  }}
                  aria-label="Adjust monthly bill with slider"
                />
                <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest text-[#5C6B62]">
                  <span>₹500</span>
                  <span>₹20,000</span>
                </div>
              </div>

              {/* Bill reduction bar */}
              <div className="mt-7 mb-7">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-[#5C6B62]">Bill reduction</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={result.billReductionPercent}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="text-sm font-semibold text-[#2D6A4F] tabular-nums"
                    >
                      {result.billReductionPercent}%
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="h-2.5 bg-[#E8F5EE] overflow-hidden">
                  <motion.div
                    className="h-full bg-[#3D8B6E]"
                    initial={false}
                    animate={{ width: `${result.billReductionPercent}%` }}
                    transition={{ type: 'spring', stiffness: 80, damping: 18 }}
                  />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="border border-[#D8E0DA] p-3">
                    <div className="text-[10px] uppercase tracking-widest text-[#5C6B62] mb-1">Current bill</div>
                    <div className="text-lg font-semibold text-[#14261C] line-through decoration-[#C45C5C]/60">
                      <AnimatedNumber value={bill} format={(n) => `₹${Math.round(n).toLocaleString('en-IN')}`} />
                      <span className="text-xs font-light text-[#5C6B62]">/mo</span>
                    </div>
                  </div>
                  <div className="border border-[#B8D4C0] bg-[#E8F5EE] p-3">
                    <div className="text-[10px] uppercase tracking-widest text-[#2D6A4F] mb-1">After solar</div>
                    <div className="text-lg font-semibold text-[#2D6A4F]">
                      <AnimatedNumber
                        value={result.newMonthlyBill}
                        format={(n) => `₹${Math.round(n).toLocaleString('en-IN')}`}
                      />
                      <span className="text-xs font-light">/mo</span>
                    </div>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={resultKey}
                  initial={{ opacity: 0.4, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="grid grid-cols-2 gap-3 pt-6 border-t border-[#D8E0DA]"
                >
                  <MetricCard
                    label="System Size"
                    value={<>{result.systemSize} <span className="text-base font-normal">kW</span></>}
                    hint={`~${result.monthlyGeneration} units/mo generated`}
                    icon={<SunIcon size={16} strokeWidth={1.5} />}
                  />
                  <MetricCard
                    label="Govt Subsidy"
                    value={formatINR(result.subsidy)}
                    hint={propertyType === 'commercial' ? 'Residential scheme only' : 'PM Surya Ghar'}
                    highlight={result.subsidy > 0}
                    icon={<RupeeIcon size={16} strokeWidth={1.5} />}
                  />
                  <MetricCard
                    label="Net Investment"
                    value={formatINR(result.netCost)}
                    hint={`Gross ${formatINRCompact(result.systemCost)}`}
                    icon={<ChartIcon size={16} strokeWidth={1.5} />}
                  />
                  <MetricCard
                    label="Monthly Savings"
                    value={formatINR(result.monthlySavings)}
                    hint={`${formatINR(result.annualSavings)} / year`}
                    highlight
                    icon={<BoltIcon size={16} strokeWidth={1.5} />}
                  />
                  <MetricCard
                    label="Payback"
                    value={<>{result.paybackYears} <span className="text-base font-normal">yrs</span></>}
                    hint="Break-even on net cost"
                    icon={<CalendarIcon size={16} strokeWidth={1.5} />}
                  />
                  <MetricCard
                    label="25-Year Savings"
                    value={formatINRCompact(result.lifetimeSavings)}
                    hint={`${result.roiPercent}% lifetime ROI`}
                    highlight
                    icon={<LeafIcon size={16} strokeWidth={1.5} />}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 justify-between pt-5 border-t border-[#D8E0DA]">
                <p className="text-[11px] text-[#5C6B62] font-light leading-relaxed max-w-sm">
                  Saves ~{result.co2Tons} tonnes CO₂ over 25 years — equal to planting about {result.treesEquivalent.toLocaleString('en-IN')} trees.
                </p>
                <Button
                  as="a"
                  href={getWhatsAppUrl(
                    `Hi Chandra Solar Systems, I used your ROI calculator. My monthly bill is ₹${bill.toLocaleString('en-IN')} (${propertyType}). Suggested system: ${result.systemSize} kW. Please share an exact quote.`,
                    SITE.whatsappRaw
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="accent"
                  size="md"
                  className="shrink-0"
                >
                  Get Exact Quote
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative min-h-[320px] lg:min-h-[560px] w-full lg:sticky lg:top-28"
          >
            <div className="absolute inset-0 bg-[#D8E0DA] translate-x-3 -translate-y-3" />
            <div className="relative h-full min-h-[320px] lg:min-h-[560px] w-full overflow-hidden">
              <img
                src="/images/calculator.png"
                alt="House with solar panels showing savings"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14261C]/80 via-[#14261C]/20 to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:w-[240px] bg-white/95 backdrop-blur-sm p-4 shadow-card border border-white/40">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#5C6B62] mb-1">You save every month</div>
              <div className="text-3xl font-sans font-semibold text-[#2D6A4F] tabular-nums leading-none mb-4">
                <AnimatedNumber
                  value={result.monthlySavings}
                  format={(n) => `₹${Math.round(n).toLocaleString('en-IN')}`}
                />
              </div>

              <div className="space-y-2.5">
                <BarRow
                  label="Old bill"
                  value={bill}
                  max={Math.max(bill, result.newMonthlyBill, 1)}
                  color="#C45C5C"
                  muted
                />
                <BarRow
                  label="New bill"
                  value={result.newMonthlyBill}
                  max={Math.max(bill, result.newMonthlyBill, 1)}
                  color="#2D6A4F"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-[#D8E0DA] flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[#5C6B62]">Payback</span>
                <span className="text-sm font-semibold text-[#14261C] tabular-nums">{result.paybackYears} years</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function clampSlider(bill: number) {
  return Math.min(20000, Math.max(500, bill || 500))
}

function BarRow({
  label,
  value,
  max,
  color,
  muted,
}: {
  label: string
  value: number
  max: number
  color: string
  muted?: boolean
}) {
  const pct = Math.max(6, (value / max) * 100)
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className={cn('text-[10px] uppercase tracking-widest', muted ? 'text-[#5C6B62]' : 'text-[#2D6A4F]')}>
          {label}
        </span>
        <span className={cn('text-[11px] font-medium tabular-nums', muted ? 'text-[#5C6B62] line-through' : 'text-[#14261C]')}>
          ₹{value.toLocaleString('en-IN')}
        </span>
      </div>
      <div className="h-1.5 bg-[#E8F5EE] overflow-hidden">
        <motion.div
          className="h-full"
          style={{ backgroundColor: color }}
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
        />
      </div>
    </div>
  )
}
