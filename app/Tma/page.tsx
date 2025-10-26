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
          <TypingText text="" />
        </h1>
        
        <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text="Главная цель этой секты, возражения Бога Тёмного Лорда что принесет за собой смерть всех богов и колпсу всей жизни в мире, в долекие века Тёмный Лорд был создателем Темной магии, но все велики маги и боги презирали его за создание столь сильной и опасной магии, в отместку он объявил войну, и не смотря на невероятно силу, он потерпел поражение и его приговорили к наказанию Damnatio memoriae. Обсолютно каждое свидетельство о его существовании были уничтожены, его магия была утеряна а сам он был казнён, а его душу разделили на несколько частей и оставили на хронение 3 бессмертным Магам, чтобы он никогда не вернулся к жизни. Но даже несмотря на то, что прошло несколько сотен век после его смерти, его приспешники поклялись ценой своей жизни возрадить Тёмного Лорда и отомстить, они призирают любую магию кроме темной, приносят жертвы приношения и обряды по созданию новой оболочки для их божества, но больше всего из этого культа отличаются те, кто прошол обряд ангельское рождение, цель которого заключается в жертве приношению часть себя, те кто пережил этот обряд, Тёмный Лорд вознаграждает их артефактами, благодаря которым становится сильнейшим войскам культа , или путиводителям." />
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