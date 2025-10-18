"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface CursorTooltipProps {
  children: React.ReactNode
  content: React.ReactNode
  className?: string
  width?: number | string
}

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}

export default function CursorTooltip({ children, content, className, width = 'auto' }: CursorTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { x, y } = useMousePosition()

  const tooltipRef = React.useRef<HTMLDivElement>(null)

  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 })

  useEffect(() => {
    if (tooltipRef.current) {
      const tooltipWidth = tooltipRef.current.offsetWidth
      const tooltipHeight = tooltipRef.current.offsetHeight
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      let newLeft = x + 10
      let newTop = y + 10

      if (newLeft + tooltipWidth > windowWidth) {
        newLeft = windowWidth - tooltipWidth - 10
      }

      if (newTop + tooltipHeight > windowHeight) {
        newTop = windowHeight - tooltipHeight - 10
      }

      setTooltipPosition({ left: newLeft, top: newTop })
    }
  }, [x, y, isVisible])

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'fixed',
              left: tooltipPosition.left,
              top: tooltipPosition.top,
              width: width,
              pointerEvents: 'none',
              zIndex: 9999,
            }}
            className={twMerge(
              "bg-card py-2 px-4 rounded shadow-lg text-sm border border-foreground/20",
              className
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}