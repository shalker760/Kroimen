"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import router from "next/router"

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  // Перезапуск анимации при изменении текста
  useEffect(() => {
    setDisplayedText("")
    setCurrentIndex(0)
  }, [text])

  // Анимация печатания
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
    <span className="relative inline-block">
      {displayedText}
      <span className="absolute right-0 -bottom-1 w-1 h-6 bg-white/50 animate-pulse"></span>
    </span>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 
                   flex items-center justify-center p-8 relative overflow-hidden">
      {/* Фоновые частицы */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243, 235, 235, 0.05)_0%,transparent_70%)]"></div>
            
      {/* Основной контент */}
      <div className="max-w-4xl text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text 
                      bg-gradient-to-r mb-8">
          <TypingText text="Добро пожаловать жители Кроймена" />
        </h1>
        
        <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text="Это информационный сайт, где вы найдете последние новости, прогноз погоды, информацию о слоях и регионах, кланах и сможете отправлять свои запросы жителям." />
        </p>
      </div>

        <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%]">
          <div className="spcae-y-4">
            <button onClick={() => router.push("/Darf")}>встать</button>
          </div>
        </div>
    </div>
  )
}
