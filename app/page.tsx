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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
            
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
      
      {/* Основной контент */}
      <div className="max-w-4xl text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text 
                      bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-8">
          <TypingText text="Добро пожаловать жители Кроймена" />
        </h1>
        
        <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text="Это информационный сайт, где вы найдете последние новости, прогноз погоды, информацию о слоях и регионах, кланах и сможете отправлять свои запросы жителям." />
        </p>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
    </div>
  )
}
