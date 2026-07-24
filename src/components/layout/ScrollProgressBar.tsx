import React from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress * 100}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  )
}
