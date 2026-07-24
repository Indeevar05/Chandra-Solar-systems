import React from 'react'
import { useCursorGlow } from '@/hooks/useCursorGlow'

export function CursorGlow() {
  const glowRef = useCursorGlow({ enabled: true })

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      aria-hidden="true"
    />
  )
}
