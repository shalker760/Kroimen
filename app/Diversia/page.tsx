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
          <TypingText text="Диверсия" />
        </h1>
        
        <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text="клан существование основывается на непримиримом противостоянии любым формам экспериментов над живыми существами. Их деятельность носит характер тщательно спланированных рейдов на исследовательские комплексы и тайные лаборатории. Целью каждого налёта является не грабёж и не убийство, а полное уничтожение самой инфраструктуры, служащей орудием жестоких опытов. При этом участники клана стремятся избегать жертв среди персонала: ликвидация допускается лишь в случаях открытого вооружённого сопротивления или непосредственной угрозы жизни членов клана.

Во главе «Диверсии» стоит Детроид Вилд — существо, если это слово ещё применимо к нему, ставший одним из порождений тех самых лабораторий, с которыми он ныне ведёт беспощадную войну. Созданный в результате чудовищных экспериментов, он вынес из них не только искажённое тело, но и безграничную жажду возмездия. Его миссия — стереть с лица земли всё, что напоминает о тех, кто посмел поставить науку выше страдания живого существа" />
        </p>
          <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text="Враги: Вивер" />
        </p>
        
         <p className="text-xl text-white/80 leading-relaxed">
          <TypingText text="Союзники: Крулакс" />
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