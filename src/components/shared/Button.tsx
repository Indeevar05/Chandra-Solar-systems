import React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
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
    'bg-[#1C1C1C] text-white',
    'hover:bg-[#333333]',
    'border border-transparent',
  ].join(' '),
  accent: [
    'bg-[#B85B3F] text-white',
    'hover:bg-[#9E4D35]',
    'border border-transparent',
  ].join(' '),
  secondary: [
    'bg-transparent text-[#1C1C1C]',
    'hover:bg-black/5',
    'border border-[#E5E5E5]',
  ].join(' '),
  ghost: [
    'bg-transparent text-[#1C1C1C]',
    'hover:bg-black/5',
    'border border-transparent',
  ].join(' '),
  outline: [
    'bg-transparent text-[#1C1C1C]',
    'hover:bg-[#1C1C1C] hover:text-white',
    'border border-[#1C1C1C]',
  ].join(' '),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-11 px-8 text-xs gap-2 uppercase tracking-[0.2em]',
  md: 'h-[52px] px-10 text-xs uppercase tracking-[0.2em] gap-2',
  lg: 'h-[64px] px-14 text-xs uppercase tracking-[0.25em] gap-3',
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
      'inline-flex items-center justify-center font-medium rounded-none',
      'transition-colors duration-500 cursor-pointer',
      'select-none whitespace-nowrap shrink-0',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1C1C1C] focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    if (Tag === 'a' && href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={baseStyles}
        >
          {leftIcon && <span>{leftIcon}</span>}
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Loading...
            </span>
          ) : (
            children
          )}
          {rightIcon && <span>{rightIcon}</span>}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        {...props}
      >
        {leftIcon && <span>{leftIcon}</span>}
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
        {rightIcon && <span>{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
