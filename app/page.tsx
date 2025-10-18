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

  return <span className="text-white text-2xl font-bold">{displayedText}</span>
}

export default function Home() {
  const router = useRouter()
  
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-12">
      <button 
        onClick={() => router.push("/Darf")}
        className="relative group px-12 py-8 rounded-2xl overflow-hidden border border-white/10 
                  bg-gradient-to-r from-purple-700 to-blue-600 hover:from-purple-800 hover:to-blue-700 
                  transition-all duration-500 transform hover:scale-[1.08] shadow-xl"
      >
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 
                       transition-opacity duration-300"></span>
        <TypingText text="Дарф" />
      </button>
      
      <button 
        onClick={() => router.push("/Darf")}
        className="relative group px-30 py-8 rounded-2xl overflow-hidden border border-white/10 
                  bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 
                  transition-all duration-500 transform hover:scale-[1.08] shadow-xl"
      >
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 
                       transition-opacity duration-300"></span>
        <TypingText text="Дарф" />
      </button>
    </div>
  )
}