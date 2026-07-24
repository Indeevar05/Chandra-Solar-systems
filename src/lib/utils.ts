import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatIndianNumber(num: number): string {
  return num.toLocaleString('en-IN')
}


export function formatINR(amount: number): string {
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`
  }
  if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(0)}K`
  }
  return `₹${amount}`
}


export function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}


export function openWhatsApp(number: string, message?: string): void {
  const url = `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`
  window.open(url, '_blank', 'noopener,noreferrer')
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
}

export interface SolarCalcResult {
  systemSize: number 
  systemCost: number 
  subsidy: number 
  netCost: number 
  monthlySavings: number 
  annualSavings: number 
  paybackYears: number
  roiPercent: number
  lifetimeSavings: number
}

export function calculateSolar(input: SolarCalcInput): SolarCalcResult {
  const { monthlyBill } = input
  
  const savingsPerUnit = 8
  const unitsPerKw = 120
  const costPerKw = 55000 

  
  const unitsNeeded = monthlyBill / savingsPerUnit
  const systemSize = Math.max(1, Math.min(Math.ceil(unitsPerKw > 0 ? unitsNeeded / unitsPerKw : 1), 10))

  
  const systemCost = systemSize * costPerKw

  
  let subsidy = 0
  if (systemSize <= 2) {
    subsidy = systemSize * 30000
  } else if (systemSize <= 3) {
    subsidy = 2 * 30000 + (systemSize - 2) * 18000
  } else {
    subsidy = 78000 
  }

  const netCost = systemCost - subsidy
  const monthlySavings = Math.min(monthlyBill * 0.85, systemSize * unitsPerKw * savingsPerUnit)
  const annualSavings = monthlySavings * 12
  const paybackYears = netCost / annualSavings
  const lifetimeSavings = annualSavings * 25 - netCost
  const roiPercent = (lifetimeSavings / netCost) * 100

  return {
    systemSize: Math.round(systemSize * 10) / 10,
    systemCost: Math.round(systemCost),
    subsidy: Math.round(subsidy),
    netCost: Math.round(netCost),
    monthlySavings: Math.round(monthlySavings),
    annualSavings: Math.round(annualSavings),
    paybackYears: Math.round(paybackYears * 10) / 10,
    roiPercent: Math.round(roiPercent),
    lifetimeSavings: Math.round(lifetimeSavings),
  }
}
