import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter as FontSans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import StoreProvider from './StoreProvider'
import { cn } from '@/lib/utils'
import { Footer } from '@/components/Footer'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EmoTrack - Your Mental Health Companion',
  description: 'Track and improve your mental well-being with EmoTrack',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased bg-white',
            fontSans.variable
          )}
        >
          <StoreProvider>
            <Navbar />
            <Toaster />
            {children}
            <Footer />
          </StoreProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
