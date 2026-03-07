"use client"

import { useState } from "react"
import { MessageCircle, SkipForward, Eye, MessageSquarePlus, Check, EyeOff } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const options = [
  { label: "A", answer: "Oxygen", votes: 3, percentage: 16 },
  { label: "B", answer: "Glucose", votes: 12, percentage: 63, isCorrect: true },
  { label: "C", answer: "Carbon dioxide", votes: 2, percentage: 11 },
  { label: "D", answer: "Water", votes: 2, percentage: 10 },
]

export function CurrentQuestion() {
  const [showAnswer, setShowAnswer] = useState(false)
  const totalVotes = options.reduce((sum, o) => sum + o.votes, 0)

  return (
    <Card className="border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      <CardHeader className="border-b border-slate-100 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1e3a5f] shadow-sm">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-slate-900">
                Current Question
              </CardTitle>
              <p className="text-sm text-slate-500">Question 3 of 5</p>
            </div>
          </div>
          <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-100 gap-1.5">
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
        <div className="mb-6 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100/50 p-5">
          <p className="text-lg font-medium text-slate-900 text-balance">
            What is the main product of photosynthesis?
          </p>
        </div>

        {/* Answer Options with Live Voting */}
        <div className="space-y-3">
          {options.map((option) => (
            <div
              key={option.label}
              className={cn(
                "group relative overflow-hidden rounded-xl border-2 transition-all duration-200 cursor-pointer",
                showAnswer && option.isCorrect
                  ? "border-green-400 bg-green-50 shadow-sm"
                  : showAnswer && !option.isCorrect
                  ? "border-slate-200 bg-slate-50 opacity-60"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
              )}
            >
              {/* Vote bar background */}
              <div
                className={cn(
                  "absolute inset-y-0 left-0 transition-all duration-700 ease-out",
                  showAnswer && option.isCorrect ? "bg-green-200/60" : "bg-slate-100"
                )}
                style={{ width: `${option.percentage}%` }}
              />
              
              {/* Content */}
              <div className="relative flex items-center gap-4 p-4">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold transition-all duration-200",
                    showAnswer && option.isCorrect
                      ? "bg-green-500 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                  )}
                >
                  {showAnswer && option.isCorrect ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    option.label
                  )}
                </div>
                <span className={cn(
                  "flex-1 font-medium transition-colors",
                  showAnswer && option.isCorrect ? "text-green-800" : "text-slate-700"
                )}>
                  {option.answer}
                </span>
                <div className="text-right">
                  <div className={cn(
                    "text-xl font-bold transition-colors",
                    showAnswer && option.isCorrect ? "text-green-700" : "text-slate-900"
                  )}>
                    {option.votes}
                  </div>
                  <div className="text-xs text-slate-500">{option.percentage}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Response Status */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
          <div className="text-sm text-slate-600">
            <span className="text-2xl font-bold text-green-600">{totalVotes}</span>
            <span className="text-slate-400"> / </span>
            <span className="font-semibold text-slate-700">20</span>
            <span className="ml-1.5 text-slate-500">students answered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-100">
              <div 
                className="h-full bg-green-500 rounded-full transition-all duration-500"
                style={{ width: `${(totalVotes / 20) * 100}%` }}
              />
            </div>
            <span className="text-xs font-medium text-slate-500">{Math.round((totalVotes / 20) * 100)}%</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="mt-5 flex flex-wrap gap-3">
          <Button className="flex-1 gap-2 bg-[#1e3a5f] hover:bg-[#16324d] shadow-sm transition-all hover:shadow-md active:scale-[0.98]">
            <SkipForward className="h-4 w-4" />
            Next Question
          </Button>
          <Button 
            variant="outline" 
            className={cn(
              "flex-1 gap-2 transition-all active:scale-[0.98]",
              showAnswer 
                ? "border-green-200 bg-green-50 text-green-700 hover:bg-green-100" 
                : "hover:bg-slate-50"
            )}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {showAnswer ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showAnswer ? "Hide Answer" : "Reveal Answer"}
          </Button>
          <Button variant="outline" className="flex-1 gap-2 hover:bg-slate-50 transition-all active:scale-[0.98]">
            <MessageSquarePlus className="h-4 w-4" />
            Follow-Up
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
