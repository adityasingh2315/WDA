"use client"

import { CarouselComponent } from '@/components/Carousal'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { Brain, Activity, Users, ArrowRight, LineChart as ChartLineUp, Shield, HeartPulse, Sparkles, CheckCircle2, Star, Clock, UserCheck } from 'lucide-react'
import { BackgroundLines } from '@/components/ui/background-lines'
import { Footer } from '@/components/Footer'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"

export default function Home() {
  const { userId } = useAuth()
  const { user } = useUser()

  const testimonials = [
    {
      quote:
        "EmoTrack has been instrumental in my mental health journey. The daily mood tracking and insights have helped me understand my patterns better.",
      name: "Sarah Chen",
      designation: "Mental Health Advocate",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "As a therapist, MoodMap provides invaluable data about my clients' progress. The platform's user-friendly interface makes tracking and analysis seamless.",
      name: "Michael Rodriguez",
      designation: "Licensed Therapist",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The mindfulness features and community support have been game-changers in managing my anxiety. I feel more in control of my mental well-being.",
      name: "Emily Watson",
      designation: "Wellness Coach",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "MoodMap's professional support network and real-time monitoring have helped me provide better care to my patients. It's an essential tool in modern mental healthcare.",
      name: "James Kim",
      designation: "Psychiatrist",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The progress tracking and personalized insights have made a significant difference in my mental health journey. I highly recommend it to anyone seeking support.",
      name: "Lisa Thompson",
      designation: "Mental Health Researcher",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useEffect(() => {
    if (userId != null && user != null) {
      const sendRequest = async () => {
        const result = await fetch('/api/user', {
          method: 'POST',
          body: JSON.stringify({
            userId,
            name: user.fullName,
            email: user.primaryEmailAddress?.emailAddress,
            imageUrl: user.imageUrl
              ? user.imageUrl
              : 'https://picsum.photos/200',
          }),
        })
      }
      sendRequest()
    }
  }, [userId, user])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Lines */}
      <BackgroundLines className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium text-sm mb-4 md:mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Your Mental Health Companion
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4 md:mb-6">
            Track Your
            <br />
            Mental Health
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
            An innovative platform empowering psychiatrists to monitor your mental well-being while helping you understand and improve your mental health journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/home" className="w-full sm:w-auto group inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </BackgroundLines>

      {/* Carousel Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How MoodMap Works</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform offers a complete suite of tools to help you monitor and improve your mental well-being.
            </p>
          </div>
          <div className="relative mx-4 sm:mx-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-4 sm:p-6 rounded-3xl shadow-xl">
              <CarouselComponent />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose MoodMap</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of users who trust MoodMap for their mental well-being journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <UserCheck className="w-8 h-8" />,
                stat: "10,000+",
                label: "Active Users",
              },
              {
                icon: <Star className="w-8 h-8" />,
                stat: "4.8/5",
                label: "User Rating",
              },
              {
                icon: <Clock className="w-8 h-8" />,
                stat: "24/7",
                label: "Support Available",
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                stat: "98%",
                label: "Success Rate",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from mental health professionals and users who have transformed their well-being with MoodMap
            </p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      
    </div>
  )
}