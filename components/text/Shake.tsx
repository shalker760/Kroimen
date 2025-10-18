import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ShakeProps {
  children: ReactNode
  isComplete?: boolean
  visibleCharCount?: number
}

export const Shake: React.FC<ShakeProps> = ({ children, isComplete = false, visibleCharCount = 0 }) => {
  return (
    <motion.span
      className='inline-flex'
      animate={isComplete ? { x: [-2, 2, -1, 3, 1], y: [-1, 1, -1, -1, 0] } : { x: 0, y: 0 }}
      transition={isComplete ? { repeat: Infinity, duration: 0.1 } : {}}
    >
      {typeof children === 'string' ? children.slice(0, visibleCharCount) : children}
    </motion.span>
  )
}