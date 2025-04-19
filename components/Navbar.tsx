"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'
import { useAuth } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'

export default function Navbar() {
  const [width, setWidth] = useState(1000)
  const pathname = usePathname()
  const { userId } = useAuth()

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold">
                <span className="text-blue-500">M</span>
                <span className="text-gray-900">oodmap</span>
              </span>
            </Link>
          </div>

          {width > 880 && (
            <div className="hidden sm:flex sm:space-x-12">
              <Link
                href="/home"
                className={`text-base font-medium relative ${
                  pathname === '/home'
                    ? 'text-blue-500'
                    : 'text-gray-900 hover:text-blue-500 transition-colors'
                }`}
              >
                Home
                {pathname === '/home' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform"></span>
                )}
              </Link>
              <Link
                href="/about"
                className={`text-base font-medium relative ${
                  pathname === '/about'
                    ? 'text-blue-500'
                    : 'text-gray-900 hover:text-blue-500 transition-colors'
                }`}
              >
                About
                {pathname === '/about' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform"></span>
                )}
              </Link>
              <Link
                href="/services"
                className={`text-base font-medium relative ${
                  pathname === '/services'
                    ? 'text-blue-500'
                    : 'text-gray-900 hover:text-blue-500 transition-colors'
                }`}
              >
                Services
                {pathname === '/services' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform"></span>
                )}
              </Link>
              <Link
                href="/doctor"
                className={`text-base font-medium relative ${
                  pathname === '/doctor'
                    ? 'text-blue-500'
                    : 'text-gray-900 hover:text-blue-500 transition-colors'
                }`}
              >
                Doctor
                {pathname === '/doctor' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform"></span>
                )}
              </Link>
              <Link
                href="/dashboard"
                className={`text-base font-medium relative ${
                  pathname === '/dashboard'
                    ? 'text-blue-500'
                    : 'text-gray-900 hover:text-blue-500 transition-colors'
                }`}
              >
                dashboard
                {pathname === '/dashboard' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform"></span>
                )}
              </Link>
            </div>
          )}

          <div className="flex items-center space-x-4">
            {userId ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <div className="flex space-x-4">
                <Link href="/sign-in">
                  <Button variant="ghost" className="text-gray-900 hover:text-blue-500 transition-colors">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
