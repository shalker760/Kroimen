import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ColorProps {
  children: ReactNode
  color: string
  isComplete?: boolean
  visibleCharCount?: number
}

export const Color: React.FC<ColorProps> = ({ children, color, isComplete = false, visibleCharCount = 0 }) => {
  return (
    <motion.span
      className='transition-color duration-300'
      initial={{ color: 'inherit' }}
      animate={{ color: isComplete ? color : 'inherit' }}
      transition={{ duration: 0.5 }}
    >
      {typeof children === 'string' ? children.slice(0, visibleCharCount) : children}
    </motion.span>
  )
}