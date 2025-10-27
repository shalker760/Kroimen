import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

interface User {
  username: string
  email: string
  password: string
}

export async function POST(request: NextRequest) {
  const { username, email, password } = await request.json()
  const filePath = path.join(process.cwd(), 'users.json')

  try {
    // Чтение существующих данных
    const data = await fs.readFile(filePath, 'utf8')
    const { users }: { users: User[] } = JSON.parse(data)

    // Проверка уникальности email
    if (users.some((user: User) => user.email === email)) {
      return NextResponse.json({ error: 'Этот адрес электронной почты уже существует' }, { status: 400 })
    }

    // Добавление нового пользователя
    users.push({ username, email, password })

    // Сохранение обновлённых данных
    await fs.writeFile(filePath, JSON.stringify({ users }, null, 2))

    return NextResponse.json({ success: true, message: 'Регистрация успешна' })
  } catch (error) {
    console.error('Ошибка регистрации:', error)
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 })
  }
}
