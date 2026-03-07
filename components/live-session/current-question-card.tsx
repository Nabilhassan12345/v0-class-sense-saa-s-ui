"use client"

import { useState, useEffect } from "react"
import { SkipForward, Eye, EyeOff, MessageSquarePlus, Check, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const initialOptions = [
  { label: "A", answer: "Oxygen", votes: 3, isCorrect: false, color: "sky" },
  { label: "B", answer: "Glucose", votes: 12, isCorrect: true, color: "emerald" },
  { label: "C", answer: "Carbon dioxide", votes: 2, isCorrect: false, color: "amber" },
  { label: "D", answer: "Water", votes: 2, isCorrect: false, color: "violet" },
]

const colorStyles = {
  sky: {
    bg: "bg-gradient-to-r from-sky-50 to-sky-100",
    border: "border-sky-200",
    badge: "bg-sky-500",
    text: "text-sky-700",
    bar: "bg-sky-400",
  },
  emerald: {
    bg: "bg-gradient-to-r from-emerald-50 to-emerald-100",
    border: "border-emerald-200",
    badge: "bg-emerald-500",
    text: "text-emerald-700",
    bar: "bg-emerald-400",
  },
  amber: {
    bg: "bg-gradient-to-r from-amber-50 to-amber-100",
    border: "border-amber-200",
    badge: "bg-amber-500",
    text: "text-amber-700",
    bar: "bg-amber-400",
  },
  violet: {
    bg: "bg-gradient-to-r from-violet-50 to-violet-100",
    border: "border-violet-200",
    badge: "bg-violet-500",
    text: "text-violet-700",
    bar: "bg-violet-400",
  },
}

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
              setTimeout(() => setAnimatingOption(null), 800)
              break
            }
          }
          return newOptions
        })
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [totalVotes])

  const getPercentage = (votes: number) => {
    if (totalVotes === 0) return 0
    return Math.round((votes / totalVotes) * 100)
  }

  return (
    <div className="card-indigo rounded-2xl shadow-lg shadow-indigo-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 lg:px-8 py-5 border-b border-indigo-200/50 bg-white/50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900">Current Question</h2>
            <p className="text-base text-indigo-600 font-medium mt-0.5">Question 3 of 5</p>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-100 to-emerald-200 border border-emerald-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">Live Voting</span>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="px-6 lg:px-8 py-6 bg-white/30">
        <p className="text-xl lg:text-2xl font-semibold text-slate-900 leading-relaxed">
          What is the main product of photosynthesis?
        </p>
      </div>

      {/* Answer Options */}
      <div className="px-6 lg:px-8 pb-6 space-y-4">
        {options.map((option) => {
          const percentage = getPercentage(option.votes)
          const isAnimating = animatingOption === option.label
          const isCorrect = showAnswer && option.isCorrect
          const isWrong = showAnswer && !option.isCorrect
          const colors = colorStyles[option.color as keyof typeof colorStyles]
          
          return (
            <div
              key={option.label}
              className={cn(
                "relative overflow-hidden rounded-2xl border-2 transition-all duration-500",
                isCorrect
                  ? "border-emerald-400 bg-gradient-to-r from-emerald-100 to-emerald-200 shadow-lg shadow-emerald-100 scale-[1.02]"
                  : isWrong
                  ? "border-slate-200 bg-slate-50 opacity-50"
                  : isAnimating
                  ? `${colors.border} ${colors.bg} shadow-lg scale-[1.01]`
                  : "border-white/50 bg-white/60 hover:bg-white/80 hover:border-indigo-200 hover:shadow-md"
              )}
            >
              {/* Progress Bar Background */}
              <div
                className={cn(
                  "absolute inset-y-0 left-0 transition-all duration-700 ease-out opacity-30",
                  isCorrect ? "bg-emerald-400" : colors.bar
                )}
                style={{ width: `${percentage}%` }}
              />
              
              {/* Content */}
              <div className="relative flex items-center gap-4 lg:gap-5 p-4 lg:p-5">
                <div
                  className={cn(
                    "flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl text-lg font-bold transition-all duration-300",
                    isCorrect
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-200"
                      : isAnimating
                      ? `${colors.badge} text-white scale-110 shadow-lg`
                      : "bg-white text-slate-600 border-2 border-slate-200"
                  )}
                >
                  {isCorrect ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    option.label
                  )}
                </div>
                
                <span className={cn(
                  "flex-1 text-lg lg:text-xl font-semibold transition-colors duration-300",
                  isCorrect ? "text-emerald-800" : "text-slate-800"
                )}>
                  {option.answer}
                </span>
                
                <div className="flex items-center gap-3">
                  {isAnimating && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-indigo-200">
                      <Zap className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-bold text-indigo-600">+1</span>
                    </div>
                  )}
                  <div className="text-right min-w-[60px]">
                    <div className={cn(
                      "text-2xl lg:text-3xl font-bold tabular-nums transition-all duration-300",
                      isCorrect 
                        ? "text-emerald-600" 
                        : isAnimating
                        ? colors.text
                        : "text-slate-800"
                    )}>
                      {option.votes}
                    </div>
                    <div className={cn(
                      "text-sm font-semibold transition-colors duration-300",
                      isCorrect ? "text-emerald-600" : "text-slate-500"
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
      <div className="px-6 lg:px-8 py-5 border-t border-indigo-200/50 bg-white/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-metric text-indigo-600 tabular-nums">{totalVotes}</span>
            <span className="text-lg text-slate-500">/ {totalStudents} responses</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-100 border border-indigo-200">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span className="text-base font-bold text-indigo-700 tabular-nums">
              {Math.round((totalVotes / totalStudents) * 100)}%
            </span>
          </div>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-indigo-100">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(totalVotes / totalStudents) * 100}%` }}
          />
        </div>
      </div>

      {/* Control Buttons */}
      <div className="px-6 lg:px-8 py-5 border-t border-indigo-200/50 bg-white/30 flex flex-wrap gap-3">
        <Button 
          size="lg"
          className="flex-1 gap-2.5 btn-premium text-white text-base font-semibold rounded-xl h-12"
        >
          <SkipForward className="h-5 w-5" />
          Next Question
        </Button>
        <Button 
          size="lg"
          variant="outline" 
          className={cn(
            "flex-1 gap-2.5 text-base font-semibold rounded-xl h-12 transition-all duration-300",
            showAnswer 
              ? "border-2 border-emerald-400 bg-emerald-100 text-emerald-700 hover:bg-emerald-200" 
              : "border-2 border-indigo-200 bg-white text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300"
          )}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          {showAnswer ? "Hide Answer" : "Reveal Answer"}
        </Button>
        <Button 
          size="lg"
          variant="outline" 
          className="flex-1 gap-2.5 border-2 border-indigo-200 bg-white text-slate-600 hover:text-indigo-700 hover:bg-indigo-50 hover:border-indigo-300 text-base font-semibold rounded-xl h-12 transition-all duration-300"
        >
          <MessageSquarePlus className="h-5 w-5" />
          Ask Follow-Up
        </Button>
      </div>
    </div>
  )
}
