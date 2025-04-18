"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, TooltipProps } from 'recharts'
import { Calendar, LineChart as ChartIcon, Plus, Heart, Activity, TrendingDown, ArrowUpDown, Download } from "lucide-react"
import { useRef, useEffect, useState } from 'react'
import html2canvas from 'html2canvas'
import { useUser } from "@clerk/nextjs"
import { useRouter } from 'next/navigation'

interface MoodData {
  id: string
  value: number
  date: string
  userId: string
}

interface ChartData {
  date: string
  score: number
  emotion: string
}

const Dashboard = () => {
  const [moodData, setMoodData] = useState<ChartData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const chartRef = useRef<HTMLDivElement>(null)
  const { user } = useUser()
  const userId = user?.id

  const getEmotionLabel = (score: number) => {
    if (score <= 4) return 'Minimal'
    if (score <= 9) return 'Mild'
    if (score <= 14) return 'Moderate'
    if (score <= 19) return 'Moderately Severe'
    return 'Severe'
  }

  useEffect(() => {
    const fetchMoodData = async () => {
      if (!userId) {
        console.log('No userId available, skipping fetch')
        setIsLoading(false)
        return
      }

      try {
        console.log('Starting to fetch data for userId:', userId)
        const response = await fetch('/api/graph', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId }),
        })

        console.log('API Response status:', response.status)

        if (!response.ok) {
          const errorText = await response.text()
          console.error('Failed to fetch mood data. Server response:', errorText)
          throw new Error('Failed to fetch mood data')
        }

        const data: MoodData[] = await response.json()
        console.log('Raw data from API:', data)

        if (!Array.isArray(data)) {
          console.error('Invalid data format received:', data)
          return
        }

        if (data.length === 0) {
          console.log('No mood data found for user')
          setMoodData([])
          return
        }

        // Sort data by date and format it for the chart
        const formattedData = data
          .filter(item => {
            if (!item.date || !item.value) {
              console.log('Invalid item:', item)
              return false
            }
            return true
          })
          .map(item => {
            try {
              const date = new Date(item.date)
              
              // Check if date is valid
              if (isNaN(date.getTime())) {
                console.error('Invalid date found:', item.date)
                return null
              }

              // Format the date
              const formattedDate = date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })

              const formattedItem = {
                date: formattedDate,
                score: item.value,
                emotion: getEmotionLabel(item.value)
              }
              console.log('Formatted item:', formattedItem)
              return formattedItem
            } catch (error) {
              console.error('Error processing item:', item, error)
              return null
            }
          })
          .filter(item => item !== null)
          .sort((a, b) => {
            const dateA = new Date(a.date)
            const dateB = new Date(b.date)
            return dateA.getTime() - dateB.getTime()
          })

        console.log('Final formatted data for chart:', formattedData)
        setMoodData(formattedData)
      } catch (error) {
        console.error('Error fetching mood data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMoodData()
  }, [userId])

  // Add logging for chart rendering
  useEffect(() => {
    if (moodData.length > 0) {
      console.log('Current moodData state:', moodData)
      console.log('Chart container dimensions:', chartRef.current?.getBoundingClientRect())
    }
  }, [moodData])

  const averageMood = moodData.length 
    ? (moodData.reduce((acc, curr) => acc + curr.score, 0) / moodData.length).toFixed(1)
    : 'N/A'

  const dayAverages = moodData.reduce((acc, curr) => {
    const day = new Date(curr.date).toLocaleDateString('en-US', { weekday: 'long' })
    if (!acc[day]) {
      acc[day] = { total: curr.score, count: 1 }
    } else {
      acc[day].total += curr.score
      acc[day].count += 1
    }
    return acc
  }, {} as Record<string, { total: number; count: number }>)

  const worstDay = Object.entries(dayAverages)
    .map(([day, data]) => ({ day, average: data.total / data.count }))
    .reduce((min, curr) => curr.average < min.average ? curr : min, { day: 'N/A', average: Infinity })

  const downloadChart = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then((canvas) => {
        const link = document.createElement('a')
        link.href = canvas.toDataURL('image/png')
        link.download = 'mood-chart.png'
        link.click()
      })
    }
  }

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length && payload[0].value !== undefined) {
      return (
        <div className="bg-white p-4 border rounded-lg shadow-lg">
          <p className="font-semibold">{label}</p>
          <p className="text-blue-600">Score: {payload[0].value}</p>
          <p className="text-gray-600">Level: {getEmotionLabel(payload[0].value)}</p>
        </div>
      )
    }
    return null
  }

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto p-6 space-y-8 mt-20">
      <div className="flex justify-between items-center bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl shadow-sm">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Welcome back, {user?.firstName || 'User'}</h1>
          <p className="text-muted-foreground">Here's your mental health overview</p>
        </div>
        <Button 
          className="gap-2 shadow-md hover:shadow-lg transition-all" 
          onClick={() => router.push('/home')}
        >
          <Plus size={20} />
          New Check-in
        </Button>
      </div>

      {moodData.length === 0 ? (
        <Card className="col-span-1 md:col-span-2 lg:col-span-3 shadow-md hover:shadow-lg transition-all p-8 text-center">
          <CardContent>
            <p className="text-lg text-gray-600">No mood data available yet. Complete your first check-in to see your progress!</p>
            <Button 
              className="mt-4 gap-2" 
              onClick={() => router.push('/home')}
            >
              <Plus size={20} />
              Start Check-in
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="col-span-1 md:col-span-2 lg:col-span-3 shadow-md hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-3 text-xl">
                <ChartIcon className="h-6 w-6 text-purple-500" />
                Your Mood Timeline
                <span className="ml-auto text-sm text-muted-foreground">PHQ-9 Scores</span>
              </CardTitle>
              <Button
                variant="outline"
                size="icon"
                onClick={downloadChart}
                className="ml-2"
                title="Download chart as PNG"
              >
                <Download className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="h-[350px]" ref={chartRef}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis 
                    dataKey="date"
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => value}
                    interval="preserveStartEnd"
                  />
                  <YAxis 
                    domain={[0, 27]} 
                    ticks={[0, 5, 10, 15, 20, 25]}
                    tickFormatter={(value) => Math.round(value).toString()}
                  />
                  <Tooltip content={CustomTooltip} />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#9b87f5" 
                    strokeWidth={2}
                    dot={{ fill: "#9b87f5", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "#9b87f5", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all bg-gradient-to-br from-purple-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowUpDown className="h-5 w-5 text-purple-500" />
                Average Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{averageMood}</div>
              <p className="text-muted-foreground">PHQ-9 Score</p>
              <div className="mt-2 text-sm text-purple-600">
                {typeof averageMood === 'string' ? 'No data' : getEmotionLabel(Number(averageMood))} Depression Level
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all bg-gradient-to-br from-red-50 to-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5 text-red-400" />
                Most Challenging
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{worstDay.day}</div>
              <p className="text-muted-foreground">Score: {worstDay.average.toFixed(1)}</p>
              <div className="mt-2 text-sm text-red-600">Consider extra self-care</div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-400" />
                Latest Check-in
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {moodData[moodData.length - 1]?.date || 'N/A'}
              </div>
              <p className="text-muted-foreground">
                Score: {moodData[moodData.length - 1]?.score || 'N/A'}
              </p>
              <div className="mt-2 text-sm text-green-600">
                {moodData[moodData.length - 1]
                  ? getEmotionLabel(moodData[moodData.length - 1].score)
                  : 'No data'
                }
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-400" />
                Next Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">Tomorrow</div>
              <p className="text-muted-foreground">Daily PHQ-9 Assessment</p>
              <div className="mt-2 flex items-center gap-2">
                <Activity className="h-4 w-4 text-purple-500" />
                <span className="text-sm text-muted-foreground">Stay Consistent</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Dashboard