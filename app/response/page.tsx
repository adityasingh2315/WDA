'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'
import { useEffect, useState } from 'react'
import sendGemini from '@/lib/sendGemini'
import Markdown from 'react-markdown'
import Link from 'next/link'
import toast from 'react-hot-toast'

const Response = () => {
  const score = useSelector((state: RootState) => state.score.value)
  const [response, setResponse] = useState<string>('')

  const prompt = `I got a score of ${score}/27 on the PHQ-9. Can you explain what this means regarding the severity of my depression? Additionally, could you provide me with some health tips and resources to help manage my mental health?`

  const tokens = 1000

  useEffect(() => {
    const fetchData = async () => {
      toast.dismiss()
      toast.loading('Loading response...')
      const response = await sendGemini(prompt, tokens)
      if (response === 'error') {
        toast.dismiss()
        toast.error('An error occurred while fetching the response.')
        return
      } else {
        toast.dismiss()
        toast.success('Response loaded successfully!')
      }
      setResponse(response) // Clear response when component mounts
    }
    fetchData()
  }, []) // Empty dependency array ensures this runs only once

  return (
    <main>
      <div className="mt-20 flex flex-col gap-5">
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="bg-blue-500 p-4 font-bold rounded-md text-white hover:bg-white hover:text-blue-500 transition-all ease-in-out duration-300 border-2 border-blue-500"
          >
            Dashboard
          </Link>
          <Link
            href="/chat"
            className="bg-blue-500 p-4 font-bold rounded-md text-white hover:bg-white hover:text-blue-500 transition-all ease-in-out duration-300 border-2 border-blue-500"
          >
            Go To Chat
          </Link>
        </div>
        {response ? (
          <Markdown>{response}</Markdown>
        ) : (
          <div className="flex items-center justify-center mt-20">
            <div className="w-32 h-32 border-8 border-white rounded-full border-t-8 border-t-blue-500 border-b-blue-500 animate-rotate"></div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Response
