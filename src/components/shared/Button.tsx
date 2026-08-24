import React from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isLoading?: boolean
  as?: 'button' | 'a'
  href?: string
  target?: string
  rel?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-[#14261C] text-white',
    'hover:bg-[#1B4332]',
    'border border-transparent',
  ].join(' '),
  accent: [
    'bg-[#2D6A4F] text-white',
    'hover:bg-[#1B4332]',
    'border border-transparent',
  ].join(' '),
  secondary: [
    'bg-transparent text-[#14261C]',
    'hover:bg-black/5',
    'border border-[#D8E0DA]',
  ].join(' '),
  ghost: [
    'bg-transparent text-[#14261C]',
    'hover:bg-black/5',
    'border border-transparent',
  ].join(' '),
  outline: [
    'bg-transparent text-[#14261C]',
    'hover:bg-[#14261C] hover:text-white',
    'border border-[#14261C]',
  ].join(' '),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-10 px-6 text-[10px] uppercase tracking-[0.16em] gap-2',
  md: 'h-11 px-8 text-[11px] uppercase tracking-[0.18em] gap-2',
  lg: 'h-12 px-10 text-[11px] uppercase tracking-[0.2em] gap-2.5',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      leftIcon,
      rightIcon,
      isLoading,
      className,
      as: Tag = 'button',
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center font-medium rounded-none leading-none',
      'transition-colors duration-500 cursor-pointer',
      'select-none whitespace-nowrap shrink-0',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2D6A4F] focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    const content = isLoading ? (
      <span className="inline-flex items-center gap-2 leading-none">
        <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        Loading...
      </span>
    ) : (
      children
    )

    if (Tag === 'a' && href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={baseStyles}
        >
          {leftIcon && <span className="inline-flex items-center justify-center shrink-0">{leftIcon}</span>}
          {content}
          {rightIcon && <span className="inline-flex items-center justify-center shrink-0">{rightIcon}</span>}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        {...props}
      >
        {leftIcon && <span className="inline-flex items-center justify-center shrink-0">{leftIcon}</span>}
        {content}
        {rightIcon && <span className="inline-flex items-center justify-center shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
