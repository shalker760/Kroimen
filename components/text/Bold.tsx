import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface BoldProps {
  children: ReactNode
  isComplete?: boolean
  visibleCharCount?: number
}

export const Bold: React.FC<BoldProps> = ({ children, isComplete = false, visibleCharCount = 0 }) => {
  return (
    <motion.span
      animate={isComplete ? { fontWeight: [400, 700] } : { fontWeight: 400 }}
      transition={isComplete ? { duration: 0.5 } : {}}
    >
      {typeof children === 'string' ? children.slice(0, visibleCharCount) : children}
    </motion.span>
  )
}