import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface BlinkProps {
  children: ReactNode
  isComplete?: boolean
  visibleCharCount?: number
}

export const Blink: React.FC<BlinkProps> = ({ children, isComplete = false, visibleCharCount = 0 }) => {
  return (
    <motion.span
      animate={isComplete ? { opacity: [1, 0, 1] } : { opacity: 1 }}
      transition={isComplete ? { repeat: Infinity, duration: 1 } : {}}
    >
      {typeof children === 'string' ? children.slice(0, visibleCharCount) : children}
    </motion.span>
  )
}