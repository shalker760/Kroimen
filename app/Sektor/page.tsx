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
          <TypingText text="Сектор" />
        </h1>
        
        <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text="когда-то это был отряд военных, верных народу и присягнувших защищать его от любого зла. Их имя внушало уважение и страх, а поступки — веру в справедливость. Однако в ходе масштабной и беспощадной операции клан был почти полностью уничтожен. Лишь немногие сумели выжить.

Со временем они вновь собрались — тени прошлого, ветераны, чьи лица скрыты под масками. Никто не знает, что движет ими теперь: жажда возмездия, долг, или лишь холодный расчёт. Ясно одно — прежняя честь сменилась суровой необходимостью. Теперь они работают на заказ, выполняя миссии за скромное вознаграждение, но с прежней точностью и хладнокровием.

Их форма — остатки военного обмундирования, перекрашенного в глубокий синий с серыми вставками — будто отражение между светом и тьмой, между верностью и предательством. Каждый из них хранит тайну, и маска на лице — не просто защита, а символ того, что прошлое больше не принадлежит им.

В свой круг они принимают лишь проверенных — тех, кому можно доверить жизнь. Остальные для них — всего лишь прохожие в мире, где верность стоит дороже золота." />
        </p>
          <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text="Враги:нет"/>
        </p>
        
         <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text="Союзники:нет"/>
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