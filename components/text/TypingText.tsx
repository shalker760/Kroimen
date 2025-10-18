import React, { useState, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimateTextProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export const TypingText: React.FC<AnimateTextProps> = ({ children, delay = 0, duration = 50 }) => {
  const [displayedTextLength, setDisplayedTextLength] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const flattenChildren = (children: ReactNode): string => {
    return React.Children.toArray(children).reduce((acc: string, child) => {
      if (typeof child === 'string') {
        return acc + child
      } else if (React.isValidElement(child)) {
        if (child.type === 'br') {
          return acc + '\n'
        }
        return acc + flattenChildren(child.props.children)
      }
      return acc
    }, '')
  }

  const fullText = flattenChildren(children)

  useEffect(() => {
    if (displayedTextLength < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedTextLength(prev => prev + 1)
      }, duration / 10)
      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [fullText, displayedTextLength, duration])

  const renderChildren = (children: ReactNode, textIndex: number): [ReactNode[], number] => {
    return React.Children.toArray(children).reduce<[ReactNode[], number]>(([renderedChildren, currentIndex], child) => {
      if (typeof child === 'string') {
        const visibleText = child.slice(0, Math.max(0, displayedTextLength - currentIndex))
        return [
          [...renderedChildren, visibleText],
          currentIndex + child.length
        ]
      } else if (React.isValidElement(child)) {
        if (child.type === 'br') {
          return [
            [...renderedChildren, <br key={currentIndex} />],
            currentIndex + 1
          ]
        }
        const [childContent, nextIndex] = renderChildren(child.props.children, currentIndex)
        const visibleCharCount = nextIndex - currentIndex

        const clonedChild = React.cloneElement(child, {
          ...child.props,
          children: childContent,
          isComplete: isComplete,
          visibleCharCount: visibleCharCount,
        })

        return [[...renderedChildren, clonedChild, ' '], nextIndex]
      }
      return [renderedChildren, currentIndex]
    }, [[], textIndex])
  }

  const [renderedContent] = renderChildren(children, 0)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay }}
        className="py-2 px-4 whitespace-pre-wrap"
      >
        {renderedContent}
      </motion.div>
    </AnimatePresence>
  )
}