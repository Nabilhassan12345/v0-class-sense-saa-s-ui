"use client"

import { useState, useEffect } from "react"
import { MessageCircle, SkipForward, Eye, MessageSquarePlus, Check, EyeOff, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const initialOptions = [
  { label: "A", answer: "Oxygen", votes: 3, isCorrect: false },
  { label: "B", answer: "Glucose", votes: 12, isCorrect: true },
  { label: "C", answer: "Carbon dioxide", votes: 2, isCorrect: false },
  { label: "D", answer: "Water", votes: 2, isCorrect: false },
]

export function CurrentQuestion() {
  const [showAnswer, setShowAnswer] = useState(false)
  const [options, setOptions] = useState(initialOptions)
  const [animatingOption, setAnimatingOption] = useState<string | null>(null)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)
  
  const totalVotes = options.reduce((sum, o) => sum + o.votes, 0)
  const totalStudents = 20

  // Simulate live vote updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (totalVotes < totalStudents) {
        setOptions(prev => {
          const newOptions = [...prev]
          // Randomly add a vote to one of the options (weighted towards correct answer)
          const weights = [0.15, 0.55, 0.15, 0.15]
          const random = Math.random()
          let cumulative = 0
          for (let i = 0; i < weights.length; i++) {
            cumulative += weights[i]
            if (random < cumulative) {
              newOptions[i] = { ...newOptions[i], votes: newOptions[i].votes + 1 }
              setAnimatingOption(newOptions[i].label)
              setTimeout(() => setAnimatingOption(null), 500)
              break
            }
          }
          return newOptions
        })
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [totalVotes])

  const getPercentage = (votes: number) => {
    if (totalVotes === 0) return 0
    return Math.round((votes / totalVotes) * 100)
  }

  return (
    <Card className="border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="border-b border-slate-100 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] shadow-lg">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-slate-900">
                Current Question
              </CardTitle>
              <p className="text-sm text-slate-500">Question 3 of 5</p>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100 gap-1.5 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Live Voting
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6">
        {/* Question */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-sm">
          <p className="text-lg font-semibold text-slate-900 text-balance leading-relaxed">
            What is the main product of photosynthesis?
          </p>
        </div>

        {/* Answer Options */}
        <div className="space-y-3">
          {options.map((option) => {
            const percentage = getPercentage(option.votes)
            const isAnimating = animatingOption === option.label
            const isHovered = hoveredOption === option.label
            
            return (
              <div
                key={option.label}
                onMouseEnter={() => setHoveredOption(option.label)}
                onMouseLeave={() => setHoveredOption(null)}
                className={cn(
                  "group relative overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer",
                  showAnswer && option.isCorrect
                    ? "border-green-400 bg-green-50 shadow-lg shadow-green-100"
                    : showAnswer && !option.isCorrect
                    ? "border-slate-200 bg-slate-50/50 opacity-50"
                    : isAnimating
                    ? "border-blue-400 bg-blue-50 shadow-md"
                    : isHovered
                    ? "border-slate-300 bg-slate-50/50 shadow-sm"
                    : "border-slate-200 bg-white"
                )}
              >
                {/* Animated Vote Progress Bar */}
                <div
                  className={cn(
                    "absolute inset-y-0 left-0 transition-all duration-700 ease-out",
                    showAnswer && option.isCorrect 
                      ? "bg-gradient-to-r from-green-200/80 to-green-100/40" 
                      : isAnimating
                      ? "bg-gradient-to-r from-blue-200/80 to-blue-100/40"
                      : "bg-gradient-to-r from-slate-100 to-slate-50/40"
                  )}
                  style={{ width: `${percentage}%` }}
                />
                
                {/* Content */}
                <div className="relative flex items-center gap-4 p-4">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300",
                      showAnswer && option.isCorrect
                        ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg scale-110"
                        : isAnimating
                        ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md scale-105"
                        : "bg-slate-100 text-slate-600 group-hover:bg-slate-200 group-hover:scale-105"
                    )}
                  >
                    {showAnswer && option.isCorrect ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      option.label
                    )}
                  </div>
                  
                  <span className={cn(
                    "flex-1 font-medium transition-colors duration-300",
                    showAnswer && option.isCorrect ? "text-green-800" : "text-slate-700"
                  )}>
                    {option.answer}
                  </span>
                  
                  <div className="text-right min-w-[60px]">
                    <div className={cn(
                      "text-2xl font-bold transition-all duration-300 tabular-nums",
                      showAnswer && option.isCorrect 
                        ? "text-green-700" 
                        : isAnimating
                        ? "text-blue-600 scale-110"
                        : "text-slate-900"
                    )}>
                      {option.votes}
                    </div>
                    <div className={cn(
                      "text-xs font-medium transition-colors duration-300",
                      showAnswer && option.isCorrect ? "text-green-600" : "text-slate-500"
                    )}>
                      {percentage}%
                    </div>
                  </div>
                </div>
                
                {/* Vote animation indicator */}
                {isAnimating && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Sparkles className="h-5 w-5 text-blue-500 animate-pulse" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Response Progress */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-green-600 tabular-nums">{totalVotes}</span>
            <span className="text-slate-400 font-medium">/</span>
            <span className="text-lg font-semibold text-slate-700">{totalStudents}</span>
            <span className="text-sm text-slate-500 ml-1">students answered</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-3 w-36 overflow-hidden rounded-full bg-slate-100 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(totalVotes / totalStudents) * 100}%` }}
              />
            </div>
            <span className="text-sm font-bold text-slate-700 tabular-nums">
              {Math.round((totalVotes / totalStudents) * 100)}%
            </span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="mt-5 flex flex-wrap gap-3">
          <Button 
            className="flex-1 gap-2 bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] hover:from-[#16324d] hover:to-[#1e3a5f] shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
          >
            <SkipForward className="h-4 w-4" />
            Next Question
          </Button>
          <Button 
            variant="outline" 
            className={cn(
              "flex-1 gap-2 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
              showAnswer 
                ? "border-green-300 bg-green-50 text-green-700 hover:bg-green-100 shadow-sm" 
                : "border-slate-200 hover:bg-slate-50 hover:border-slate-300"
            )}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showAnswer ? "Hide Answer" : "Reveal Answer"}
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 gap-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageSquarePlus className="h-4 w-4" />
            Follow-Up
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
