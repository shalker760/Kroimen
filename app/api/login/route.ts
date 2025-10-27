import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

interface User {
  username: string
  email: string
  password: string
}

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  const filePath = path.join(process.cwd(), 'users.json')

  try {
    // Чтение пользователей из файла
    const data = await fs.readFile(filePath, 'utf8')
    const { users }: { users: User[] } = JSON.parse(data)

    // Поиск пользователя по email
    const user = users.find((u: User) => u.email === email)

    // Проверка существования и совпадения пароля
    if (!user || user.password !== password) {
      return NextResponse.json({ error: 'Неверные учетные данные' }, { status: 400 })
    }

    // Успешная авторизация
    return NextResponse.json({ success: true, message: 'Вход выполнен' })
  } catch (error) {
    console.error('Ошибка авторизации:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
