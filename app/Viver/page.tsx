"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setDisplayedText("")
    setCurrentIndex(0)
  }, [text])

  useEffect(() => {
    if (currentIndex <= text.length) {
      setDisplayedText(text.slice(0, currentIndex))
      
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setCurrentIndex(prev => prev + 1)
        }, 5)
        
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
   const router = useRouter()
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 
                   flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243, 235, 235, 0.05)_0%,transparent_70%)]"></div>
      <div className="max-w-4xl text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text 
                      bg-gradient-to-r mb-8">
          <TypingText text="Алахам" />
        </h1>
        
        <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text="это слой, в котором жизнь бурлит и множится во всех своих проявлениях. Здесь произрастает всё, что только способно пустить корни, зацвести или дать плод, а животные всех мыслимых видов находят себе место и уход. В отличие от прочих слоёв, где пространство поделено на поселения и города, Алахам разделён на обширные фермы — живые территории, каждая из которых специализируется на определённых видах культур или разведении животных.

Фермеры Алахама не просто производят пищу: они снабжают мир ингредиентами для ремесел, лекарств, кулинарных изысков и даже магических эликсиров. Их труд пронизан гармонией с природой, а сами они нередко выступают как покровители жизни, помогая всем, кто нуждается в заботе о питомцах, уходе за растениями или восстановлении плодородия земель.

В Алахаме всё растёт — не только растения, но и сам дух созидания." />
        </p>
      </div>

        <div className="button-container">
          <div className="spcae-y-4">
            <button onClick={() => router.push("/")}>Главная</button>
            <button onClick={() => router.push("/News")}>Новости</button>
            <button onClick={() => router.push("/Clans")}>Кланы</button>
            <button onClick={() => router.push("/Alaham")}>Алахам</button>
            <button onClick={() => router.push("/Rayn")}>Райн</button>
            <button onClick={() => router.push("/Lorest")}>Лорест</button>
            <button onClick={() => router.push("/Larm")}>Ларм</button>
            <button onClick={() => router.push("/Darf")}>Дарф</button>
          </div>
        </div>
    </div>
  )
}