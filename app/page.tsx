"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { TypingText, Color, Shake, Blink, Bold } from '@/components/text'

export default function Home() {
  const router = useRouter()
return(
  
  <div className="absolute left-[50%]">
      <TypingText duration={100}>
            <button onClick={() => router.push("/Darf")}>Дарф</button>
            <button onClick={() => router.push("/Darf")}>Дарф</button>
            <h1>добро пожаловать</h1>
            </TypingText>
          </div>
          
  )
}