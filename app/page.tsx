"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

// Component for typing animation
const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100) // 100ms delay between characters
      return () => clearTimeout(timer)
    }
  }, [currentIndex, text])

  return <span>{displayedText}</span>
}

export default function Home() {
  const router = useRouter()
  
  return (
    <div className="absolute left-[50%]">
      <button onClick={() => router.push("/Darf")}>
        <TypingText text="Дарф" />
      </button>
      <button onClick={() => router.push("/Darf")}>
        <TypingText text="Дарф" />
      </button>
    </div>
  )
}
