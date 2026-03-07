"use client"

import { useState, useEffect } from "react"
import { SkipForward, Eye, EyeOff, MessageSquarePlus, Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const initialOptions = [
  { label: "A", answer: "Oxygen", votes: 3, isCorrect: false },
  { label: "B", answer: "Glucose", votes: 12, isCorrect: true },
  { label: "C", answer: "Carbon dioxide", votes: 2, isCorrect: false },
  { label: "D", answer: "Water", votes: 2, isCorrect: false },
]

export function CurrentQuestionCard() {
  const [showAnswer, setShowAnswer] = useState(false)
  const [options, setOptions] = useState(initialOptions)
  const [animatingOption, setAnimatingOption] = useState<string | null>(null)
  
  const totalVotes = options.reduce((sum, o) => sum + o.votes, 0)
  const totalStudents = 20

  // Simulate live vote updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (totalVotes < totalStudents) {
        setOptions(prev => {
          const newOptions = [...prev]
          const weights = [0.15, 0.55, 0.15, 0.15]
          const random = Math.random()
          let cumulative = 0
          for (let i = 0; i < weights.length; i++) {
            cumulative += weights[i]
            if (random < cumulative) {
              newOptions[i] = { ...newOptions[i], votes: newOptions[i].votes + 1 }
              setAnimatingOption(newOptions[i].label)
              setTimeout(() => setAnimatingOption(null), 600)
              break
            }
          }
          return newOptions
        })
      }
    }, 2500)

    return () => clearInterval(interval)
  }, [totalVotes])

  const getPercentage = (votes: number) => {
    if (totalVotes === 0) return 0
    return Math.round((votes / totalVotes) * 100)
  }

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-[#E5E7EB]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-[#111827]">Current Question</h2>
            <p className="text-sm text-[#6B7280]">Question 3 of 5</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#DCFCE7] border border-[#bbf7d0]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
            </span>
            <span className="text-sm font-medium text-[#166534]">Live Voting</span>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="px-6 py-5">
        <p className="text-lg font-medium text-[#111827] leading-relaxed">
          What is the main product of photosynthesis?
        </p>
      </div>

      {/* Answer Options */}
      <div className="px-6 pb-4 space-y-3">
        {options.map((option) => {
          const percentage = getPercentage(option.votes)
          const isAnimating = animatingOption === option.label
          const isCorrect = showAnswer && option.isCorrect
          const isWrong = showAnswer && !option.isCorrect
          
          return (
            <div
              key={option.label}
              className={cn(
                "relative overflow-hidden rounded-xl border transition-all duration-300",
                isCorrect
                  ? "border-[#22c55e] bg-[#DCFCE7]"
                  : isWrong
                  ? "border-[#E5E7EB] bg-[#F8FAFC] opacity-60"
                  : isAnimating
                  ? "border-[#2563EB] bg-[#dbeafe]"
                  : "border-[#E5E7EB] bg-white hover:border-[#d1d5db] hover:bg-[#F8FAFC]"
              )}
            >
              {/* Progress Bar Background */}
              <div
                className={cn(
                  "absolute inset-y-0 left-0 transition-all duration-700 ease-out",
                  isCorrect 
                    ? "bg-[#bbf7d0]/50" 
                    : isAnimating
                    ? "bg-[#93c5fd]/30"
                    : "bg-[#F8FAFC]"
                )}
                style={{ width: `${percentage}%` }}
              />
              
              {/* Content */}
              <div className="relative flex items-center gap-4 p-4">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-all duration-300",
                    isCorrect
                      ? "bg-[#22c55e] text-white"
                      : isAnimating
                      ? "bg-[#2563EB] text-white scale-105"
                      : "bg-[#F8FAFC] text-[#6B7280] border border-[#E5E7EB]"
                  )}
                >
                  {isCorrect ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    option.label
                  )}
                </div>
                
                <span className={cn(
                  "flex-1 text-sm font-medium transition-colors duration-300",
                  isCorrect ? "text-[#166534]" : "text-[#111827]"
                )}>
                  {option.answer}
                </span>
                
                <div className="flex items-center gap-3">
                  {isAnimating && (
                    <Sparkles className="h-4 w-4 text-[#2563EB] animate-pulse" />
                  )}
                  <div className="text-right min-w-[48px]">
                    <div className={cn(
                      "text-lg font-semibold tabular-nums transition-all duration-300",
                      isCorrect 
                        ? "text-[#166534]" 
                        : isAnimating
                        ? "text-[#2563EB]"
                        : "text-[#111827]"
                    )}>
                      {option.votes}
                    </div>
                    <div className={cn(
                      "text-xs font-medium transition-colors duration-300",
                      isCorrect ? "text-[#166534]" : "text-[#6B7280]"
                    )}>
                      {percentage}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Response Progress */}
      <div className="px-6 py-4 border-t border-[#E5E7EB] bg-[#F8FAFC]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-semibold text-[#2563EB] tabular-nums">{totalVotes}</span>
            <span className="text-sm text-[#6B7280]">/ {totalStudents} responses</span>
          </div>
          <span className="text-sm font-medium text-[#6B7280] tabular-nums">
            {Math.round((totalVotes / totalStudents) * 100)}% complete
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
          <div 
            className="h-full bg-[#2563EB] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(totalVotes / totalStudents) * 100}%` }}
          />
        </div>
      </div>

      {/* Control Buttons */}
      <div className="px-6 py-4 border-t border-[#E5E7EB] flex flex-wrap gap-3">
        <Button 
          className="flex-1 gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white transition-all duration-200 hover:shadow-md active:scale-[0.98]"
        >
          <SkipForward className="h-4 w-4" />
          Next Question
        </Button>
        <Button 
          variant="outline" 
          className={cn(
            "flex-1 gap-2 transition-all duration-200 active:scale-[0.98]",
            showAnswer 
              ? "border-[#22c55e] bg-[#DCFCE7] text-[#166534] hover:bg-[#bbf7d0]" 
              : "border-[#E5E7EB] text-[#6B7280] hover:text-[#111827] hover:bg-[#F8FAFC]"
          )}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showAnswer ? "Hide Answer" : "Reveal Answer"}
        </Button>
        <Button 
          variant="outline" 
          className="flex-1 gap-2 border-[#E5E7EB] text-[#6B7280] hover:text-[#111827] hover:bg-[#F8FAFC] transition-all duration-200 active:scale-[0.98]"
        >
          <MessageSquarePlus className="h-4 w-4" />
          Ask Follow-Up
        </Button>
      </div>
    </div>
  )
}
