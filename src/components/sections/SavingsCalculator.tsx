import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { calculateSolar, formatINR } from '@/lib/utils'
import { CalculatorIcon, SunIcon, RupeeIcon, BoltIcon, LeafIcon, CalendarIcon } from '@/components/icons'

const BILL_PRESETS = [500, 1000, 2000, 3000, 5000, 8000]

interface ResultItemProps {
  label: string
  value: string
  highlight?: boolean
  icon: React.ReactNode
}

function ResultItem({ label, value, highlight, icon }: ResultItemProps) {
  return (
    <div className={`flex flex-col gap-2 p-0 bg-transparent ${highlight ? '' : ''}`}>
      <div className={`flex items-center gap-2 ${highlight ? 'text-[#B85B3F]' : 'text-[#737373]'}`}>
        {icon}
        <div className="text-[10px] font-medium uppercase tracking-widest">{label}</div>
      </div>
      <div className={`text-2xl sm:text-3xl font-serif leading-normal py-1 ${highlight ? 'text-[#B85B3F]' : 'text-[#1C1C1C]'}`}>
        {value}
      </div>
    </div>
  )
}

export function SavingsCalculator() {
  const [bill, setBill] = useState(2000)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  const result = calculateSolar({ monthlyBill: bill })

  const handleBillChange = useCallback((value: number) => {
    setBill(value)
  }, [])

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseInt(e.target.value, 10)
    if (!isNaN(v) && v >= 0 && v <= 50000) {
      setBill(v)
    }
  }, [])

  return (
    <section id="calculator" className="section bg-[var(--color-secondary)] border-y border-[#E5E5E5]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="mb-12">
              <span className="text-[#1C1C1C] text-[10px] font-medium tracking-[0.3em] uppercase block mb-6">
                Energy Analysis
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1C1C1C] leading-tight mb-4">
                Calculate Your <span className="italic font-light text-[#737373]">ROI</span>
              </h2>
              <p className="text-[#737373] font-light">
                Discover your potential savings based on Vizianagaram's solar irradiance.
              </p>
            </div>

            <div className="bg-white p-10 lg:p-16 border border-[#E5E5E5] shadow-sm">
              <label className="block mb-6 text-xs font-medium text-[#1C1C1C] uppercase tracking-widest">
                Average Monthly Bill
              </label>
              
              <div className="relative mb-10 flex items-center border-b border-[#E5E5E5] focus-within:border-[#1C1C1C] transition-colors">
                <span className="text-4xl font-light text-[#737373] pr-3 pb-1">₹</span>
                <input
                  type="number"
                  value={bill}
                  onChange={handleInput}
                  min={0}
                  max={50000}
                  step={100}
                  className="w-full h-20 text-5xl font-light text-[#1C1C1C] bg-transparent focus:outline-none rounded-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="2000"
                  aria-label="Monthly electricity bill in rupees"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {BILL_PRESETS.map(preset => (
                  <button
                    key={preset}
                    onClick={() => handleBillChange(preset)}
                    className={`px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] border transition-colors cursor-pointer ${
                      bill === preset
                        ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                        : 'bg-transparent text-[#737373] border-[#E5E5E5] hover:border-[#1C1C1C] hover:text-[#1C1C1C]'
                    }`}
                    aria-pressed={bill === preset}
                  >
                    ₹{preset.toLocaleString()}
                  </button>
                ))}
              </div>

              <input
                type="range"
                min={500}
                max={20000}
                step={100}
                value={bill}
                onChange={handleInput}
                className="w-full mt-12 mb-14 accent-[#1C1C1C]"
                aria-label="Adjust monthly bill with slider"
              />

              <div className="grid grid-cols-2 gap-x-10 gap-y-12 pt-12 border-t border-[#E5E5E5]">
                <ResultItem
                  label="System Size"
                  value={`${result.systemSize} kW`}
                  icon={<SunIcon size={18} strokeWidth={1} />}
                />
                <ResultItem
                  label="Govt Subsidy"
                  value={formatINR(result.subsidy)}
                  highlight
                  icon={<RupeeIcon size={18} strokeWidth={1} />}
                />
                <ResultItem
                  label="Payback Period"
                  value={`${result.paybackYears} yrs`}
                  icon={<CalendarIcon size={18} strokeWidth={1} />}
                />
                <ResultItem
                  label="25-Year Savings"
                  value={formatINR(result.lifetimeSavings)}
                  highlight
                  icon={<LeafIcon size={18} strokeWidth={1} />}
                />
              </div>
            </div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[600px] lg:h-[800px] w-full"
          >
            <div className="absolute inset-0 bg-[#E5E5E5] translate-x-4 -translate-y-4" />
            <div className="relative h-full w-full overflow-hidden">
              <img
                src="/images/calculator.png"
                alt="House with solar panels showing savings"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 via-transparent to-transparent" />
            </div>
            
            {}
            <div className="absolute bottom-6 right-4 lg:bottom-10 lg:right-8 bg-white p-4 lg:p-6 shadow-card min-w-[200px] lg:min-w-[240px]">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#737373] mb-4">Old Monthly Bill</div>
              <div className="text-2xl font-serif text-[#1C1C1C] line-through decoration-red-500/50 mb-6">
                {formatINR(bill)}
              </div>
              <div className="w-full h-px bg-[#E5E5E5] mb-6" />
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#16A34A] mb-4">New Monthly Bill</div>
              <div className="text-4xl font-serif text-[#1C1C1C]">
                ₹300<span className="text-lg text-[#737373] font-light">/mo</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
