"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  // Обеспечиваем запуск анимации при монтировании
  useEffect(() => {
    if (currentIndex === 0 && text.length > 0) {
      const timer = setTimeout(() => {
        setCurrentIndex(1)
      }, 10) // Минимальная задержка для запуска
      return () => clearTimeout(timer)
    }
  }, [text]) // Запускается только при изменении текста или монтировании

  // Основная логика анимации
  useEffect(() => {
    if (currentIndex <= text.length) {
      setDisplayedText(text.slice(0, currentIndex))
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setCurrentIndex(prev => prev + 1)
        }, 100) // Задержка между символами
        return () => clearTimeout(timer)
      }
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
