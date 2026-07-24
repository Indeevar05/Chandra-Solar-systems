import { useEffect, useRef } from 'react'

interface UseCursorGlowOptions {
  enabled?: boolean
}

export function useCursorGlow({ enabled = true }: UseCursorGlowOptions = {}) {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled) return
    
    if (window.matchMedia('(pointer: coarse)').matches) return
    
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const glow = glowRef.current
    if (!glow) return

    let animFrame: number
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      
      currentX += (mouseX - currentX) * 0.1
      currentY += (mouseY - currentY) * 0.1
      if (glow) {
        glow.style.left = `${currentX}px`
        glow.style.top = `${currentY}px`
      }
      animFrame = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMouseMove, { passive: true })
    animFrame = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animFrame)
    }
  }, [enabled])

  return glowRef
}
