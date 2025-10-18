"use client"

import React from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
return(
  
  <div className="absolute left-[50%]">
            <button onClick={() => router.push("/Darf")}>Дарф</button>
            <button onClick={() => router.push("/Darf")}>Дарф</button>
            <h1>добро пожаловать</h1>
          </div>
          
  )
}