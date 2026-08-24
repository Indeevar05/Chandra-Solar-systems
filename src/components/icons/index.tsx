import React from 'react'











export interface IconProps {
  size?: number
  className?: string
  strokeWidth?: number
  style?: React.CSSProperties
}


function SVGIcon({ size = 24, className = '', strokeWidth = 1.5, style, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function SolarPanelIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="2" y1="7" x2="22" y2="7" />
      <line x1="2" y1="11" x2="22" y2="11" />
      <line x1="8" y1="3" x2="8" y2="17" />
      <line x1="15" y1="3" x2="15" y2="17" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </SVGIcon>
  )
}

/** Premium Tier-1 panels — sun + panel mark */
export function PremiumPanelsIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <circle cx="12" cy="4.5" r="2.25" />
      <path d="M12 1.25v1M9.2 2.4l.7.7M14.8 2.4l-.7.7" />
      <rect x="3" y="9" width="18" height="11" rx="1.5" />
      <path d="M3 12.5h18M3 16h18M9 9v11M15 9v11" />
      <path d="M8 21.5h8" />
    </SVGIcon>
  )
}

export function SunIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </SVGIcon>
  )
}

export function BoltIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </SVGIcon>
  )
}

export function GovernmentIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <line x1="3" y1="22" x2="21" y2="22" />
      <rect x="5" y="10" width="14" height="12" />
      <polygon points="12 2 2 10 22 10" />
      <rect x="9" y="14" width="2" height="8" />
      <rect x="13" y="14" width="2" height="8" />
    </SVGIcon>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </SVGIcon>
  )
}

export function ToolIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </SVGIcon>
  )
}

export function ChartIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M3 20h18" />
      <path d="M6 16v-4" />
      <path d="M10 16V8" />
      <path d="M14 16v-6" />
      <path d="M18 16V5" />
      <path d="M4 11l5-4 4 2 6-5" />
      <circle cx="19" cy="4" r="1.2" fill="currentColor" stroke="none" />
    </SVGIcon>
  )
}

export function GridIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </SVGIcon>
  )
}

export function SupportIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </SVGIcon>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </SVGIcon>
  )
}

export function WhatsAppIcon({ size = 24, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </SVGIcon>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </SVGIcon>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </SVGIcon>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </SVGIcon>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <line x1="12" y1="19" x2="12" y2="5" />
      <polyline points="5 12 12 5 19 12" />
    </SVGIcon>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <polyline points="20 6 9 17 4 12" />
    </SVGIcon>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </SVGIcon>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </SVGIcon>
  )
}

export function StarIcon({ size = 20, filled = true, className = '' }: { size?: number; filled?: boolean; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? '#FDB813' : 'none'}
      stroke={filled ? '#FDB813' : 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function MoonIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </SVGIcon>
  )
}

export function LightSunIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </SVGIcon>
  )
}

export function FacebookIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export function InstagramIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function YouTubeIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.94A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  )
}

export function LinkedInIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function HomeIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </SVGIcon>
  )
}

export function BatteryIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
      <line x1="22" y1="11" x2="22" y2="13" />
      <line x1="6" y1="12" x2="10" y2="12" />
    </SVGIcon>
  )
}

export function VerifiedIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </SVGIcon>
  )
}

export function CalendarIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </SVGIcon>
  )
}

export function CalculatorIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="10" y2="10" />
      <line x1="12" y1="10" x2="14" y2="10" />
      <line x1="16" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="10" y2="14" />
      <line x1="12" y1="14" x2="14" y2="14" />
      <line x1="16" y1="14" x2="16" y2="18" />
      <line x1="8" y1="18" x2="10" y2="18" />
      <line x1="12" y1="18" x2="14" y2="18" />
    </SVGIcon>
  )
}

export function RupeeIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <line x1="6" y1="6" x2="18" y2="6" />
      <line x1="6" y1="10" x2="18" y2="10" />
      <path d="M6 10h6a4 4 0 0 0 0-8" />
      <path d="M6 20l12-10" />
    </SVGIcon>
  )
}

export function LeafIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <path d="M2 3.5s4.5-.5 9.5 4.5S17 18 17 18s-5-.5-9.5-5.5S2 3.5 2 3.5z" />
      <path d="M17 18s0-13-13-15" />
    </SVGIcon>
  )
}

export function PlusIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </SVGIcon>
  )
}

export function MinusIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
    </SVGIcon>
  )
}

export function SendIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </SVGIcon>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </SVGIcon>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <polyline points="6 9 12 15 18 9" />
    </SVGIcon>
  )
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <SVGIcon {...props}>
      <polyline points="9 18 15 12 9 6" />
    </SVGIcon>
  )
}
