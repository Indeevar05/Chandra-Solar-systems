import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatIndianNumber(num: number): string {
  return num.toLocaleString('en-IN')
}

export function formatINR(amount: number): string {
  const n = Math.round(Math.abs(amount))
  const sign = amount < 0 ? '-' : ''
  if (n >= 10000000) {
    return `${sign}₹${(n / 10000000).toFixed(n % 10000000 === 0 ? 0 : 1)}Cr`
  }
  if (n >= 100000) {
    return `${sign}₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L`
  }
  if (n >= 1000) {
    return `${sign}₹${n.toLocaleString('en-IN')}`
  }
  return `${sign}₹${n}`
}

export function formatINRCompact(amount: number): string {
  const n = Math.round(Math.abs(amount))
  const sign = amount < 0 ? '-' : ''
  if (n >= 10000000) return `${sign}₹${(n / 10000000).toFixed(1)}Cr`
  if (n >= 100000) return `${sign}₹${(n / 100000).toFixed(1)}L`
  if (n >= 1000) return `${sign}₹${(n / 1000).toFixed(0)}K`
  return `${sign}₹${n}`
}

export function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function getWhatsAppUrl(message?: string, number = '919603565222'): string {
  const digits = number.replace(/\D/g, '')
  const withCountry = digits.length === 10 ? `91${digits}` : digits
  const text = message?.trim()
  return `https://wa.me/${withCountry}${text ? `?text=${encodeURIComponent(text)}` : ''}`
}

export function openWhatsApp(number: string, message?: string): void {
  window.open(getWhatsAppUrl(message, number), '_blank', 'noopener,noreferrer')
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}

export function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin
}

export function debounce<T extends (...args: unknown[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return (...args: Parameters<T>) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export interface SolarCalcInput {
  monthlyBill: number
  propertyType?: 'residential' | 'commercial'
}

export interface SolarCalcResult {
  systemSize: number
  systemCost: number
  subsidy: number
  netCost: number
  monthlyUnits: number
  monthlyGeneration: number
  monthlySavings: number
  annualSavings: number
  newMonthlyBill: number
  billReductionPercent: number
  paybackYears: number
  roiPercent: number
  lifetimeSavings: number
  co2Tons: number
  treesEquivalent: number
}

/** PM Surya Ghar Muft Bijli Yojana — residential rooftop subsidy */
function pmSuryaGharSubsidy(systemSizeKw: number): number {
  if (systemSizeKw <= 0) return 0
  if (systemSizeKw <= 2) return systemSizeKw * 30000
  if (systemSizeKw <= 3) return 2 * 30000 + (systemSizeKw - 2) * 18000
  return 78000
}

/**
 * Vizianagaram / coastal Andhra Pradesh rooftop solar estimate.
 * Local irradiance, AP tariff, and PM Surya Ghar subsidy.
 */
export function calculateSolar(input: SolarCalcInput): SolarCalcResult {
  const monthlyBill = clamp(input.monthlyBill || 0, 0, 50000)
  const isCommercial = input.propertyType === 'commercial'

  const tariff = isCommercial ? 10.5 : 8.5
  const unitsPerKwMonth = isCommercial ? 125 : 130
  const costPerKw = isCommercial ? 48000 : 52000
  const years = 25
  const degradation = 0.005
  const residualCharges = isCommercial ? 200 : 80
  const targetOffset = 0.92

  const monthlyUnits = monthlyBill / tariff
  const rawKw = (monthlyUnits * targetOffset) / unitsPerKwMonth
  const systemSize = clamp(Math.round(rawKw * 2) / 2, 1, 10)

  const systemCost = systemSize * costPerKw
  const subsidy = isCommercial ? 0 : pmSuryaGharSubsidy(systemSize)
  const netCost = Math.max(0, systemCost - subsidy)

  const monthlyGeneration = systemSize * unitsPerKwMonth
  const maxMonthlySavings = Math.max(0, monthlyBill - residualCharges)
  const monthlySavings = Math.min(maxMonthlySavings, monthlyGeneration * tariff)
  const newMonthlyBill = Math.max(residualCharges, monthlyBill - monthlySavings)
  const billReductionPercent = monthlyBill > 0
    ? Math.round((monthlySavings / monthlyBill) * 100)
    : 0

  const annualSavingsY1 = monthlySavings * 12

  let lifetimeGross = 0
  for (let y = 0; y < years; y++) {
    lifetimeGross += annualSavingsY1 * Math.pow(1 - degradation, y)
  }
  const lifetimeSavings = lifetimeGross - netCost

  const paybackYears = annualSavingsY1 > 0 ? netCost / annualSavingsY1 : 0
  const roiPercent = netCost > 0 ? (lifetimeSavings / netCost) * 100 : 0

  const lifetimeKwh = monthlyGeneration * 12 * ((1 - Math.pow(1 - degradation, years)) / degradation)
  const co2Tons = (lifetimeKwh * 0.82) / 1000
  const treesEquivalent = Math.round(co2Tons * 16)

  return {
    systemSize: Math.round(systemSize * 10) / 10,
    systemCost: Math.round(systemCost),
    subsidy: Math.round(subsidy),
    netCost: Math.round(netCost),
    monthlyUnits: Math.round(monthlyUnits),
    monthlyGeneration: Math.round(monthlyGeneration),
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavingsY1),
    newMonthlyBill: Math.round(newMonthlyBill),
    billReductionPercent,
    paybackYears: Math.round(paybackYears * 10) / 10,
    roiPercent: Math.round(roiPercent),
    lifetimeSavings: Math.round(lifetimeSavings),
    co2Tons: Math.round(co2Tons * 10) / 10,
    treesEquivalent,
  }
}
