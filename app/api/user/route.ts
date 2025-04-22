import { NextRequest, NextResponse } from 'next/server'
import { encryptPassword, decryptPassword } from '@/utils/hash'
import prisma from '@/lib/prisma'
import { User } from '@prisma/client'

export async function POST(request: NextRequest) {
  try {
    const { userId, name, email, imageUrl } = await request.json()

    // find user by userId
    const user = await prisma.user.findUnique({
      where: {
        userId: userId,
      },
    })

    if (user) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 200 }
      )
    }

    //   creating the user
    const result = await prisma.user.create({
      data: {
        userId: userId,
        name: encryptPassword(name),
        email: encryptPassword(email),
        imageUrl: encryptPassword(imageUrl),
      },
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}

export async function GET() {
  console.log('Database URL:', process.env.DATABASE_URL)
  try {
    const users = await prisma.user.findMany()
    const decryptedUsers = users.map((user: User) => {
      return {
        userId: user.userId,
        name: decryptPassword(user.name as string),
        email: decryptPassword(user.email as string),
        imageUrl: decryptPassword(user.imageUrl as string),
      }
    })
    return NextResponse.json(decryptedUsers)
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}
