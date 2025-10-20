"use client"

import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import router from "next/router"

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
          <TypingText text="Дарф" />
        </h1>
        
        <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text=" это слой, в который никогда не проникает солнце. Не потому, что он скрыт под землёй, а потому что само светило будто отвернулось от него, прокляв навеки. Здесь царит вязкий сумрак, не рассеиваемый ни огнём, ни временем. Воздух пропитан гарью и металлом, а земля стонет под тяжестью рудников и пещер, из которых жители Кроймена извлекают то, что питает верхние миры: руду, нефть, газ, золото и иные сокровища, за которые проливается не меньше крови, чем пота.

Дарфийцы — народ крепкий, молчаливый, выточенный самой тьмой. Их глаза с рождения видят в темноте так же ясно, как другие видят при свете дня, но солнечные лучи для них — смертельный яд. Когда кому-то из них приходится подниматься наверх, они надевают тёмные очки, не как украшение, а как оберег от слепящей ярости солнца.

Говорят, что в венах дарфийцев течёт не кровь, а угольная пыль, и что сердца их бьются в такт глухим ударам шахтных машин. Они не боятся глубин — ведь глубины боятся их." />
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