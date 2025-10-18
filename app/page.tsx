"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex <= text.length) {
      setDisplayedText(text.slice(0, currentIndex))
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setCurrentIndex(prev => prev + 1)
        }, 120) // Скорость печати
        return () => clearTimeout(timer)
      }
    }
  }, [currentIndex, text])

  return <span className="text-white">{displayedText}</span>
}

export default function Home() {
  const router = useRouter()
  
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-6">
      <button 
        onClick={() => router.push("/Darf")}
        className="relative group px-8 py-4 rounded-xl overflow-hidden border border-white/20 
                  bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 
                  transition-all duration-300 transform hover:scale-[1.05]"
      >
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 
                       transition-opacity duration-300"></span>
        <TypingText text="Дарф" />
      </button>
      
      <button 
        onClick={() => router.push("/Darf")}
        className="relative group px-8 py-4 rounded-xl overflow-hidden border border-white/20 
                  bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 
                  transition-all duration-300 transform hover:scale-[1.05]"
      >
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 
                       transition-opacity duration-300"></span>
        <TypingText text="Дарф" />
      </button>
    </div>
  )
}