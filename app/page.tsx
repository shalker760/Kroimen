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
        }, 120)
        return () => clearTimeout(timer)
      }
    }
  }, [currentIndex, text])

  return (
    <span className="text-white text-3xl font-bold relative">
      {displayedText}
      <span className="absolute right-0 -bottom-1 w-1 h-6 bg-white/50 animate-pulse"></span>
    </span>
  )
}

export default function Home() {
  const router = useRouter()
  
  return (
    <div className="absolute left-1/2 top-0 -translate-x-1/2 mt-24 flex gap-32">
      <button 
        onClick={() => router.push("/Darf")}
        className="relative group px-16 py-12 rounded-3xl overflow-hidden 
                  bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl 
                  border border-white/10 shadow-[0_0_20px_rgba(128,90,255,0.3)]
                  transition-all duration-500 hover:shadow-[0_0_40px_rgba(128,90,255,0.5)]
                  transform hover:-rotate-1 hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <TypingText text="Дарф" />
      </button>
      
      <button 
        onClick={() => router.push("/Darf")}
        className="relative group px-16 py-12 rounded-3xl overflow-hidden 
                  bg-gradient-to-br from-pink-900/20 to-red-900/20 backdrop-blur-xl 
                  border border-white/10 shadow-[0_0_20px_rgba(255,70,130,0.3)]
                  transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,70,130,0.5)]
                  transform hover:rotate-1 hover:scale-105"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-red-500/30 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <TypingText text="Дарф" />
      </button>
    </div>
  )
}
