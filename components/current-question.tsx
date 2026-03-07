"use client"

import { MessageCircle, SkipForward, Eye, MessageSquarePlus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const options = [
  { label: "A", answer: "Oxygen", votes: 3, percentage: 16 },
  { label: "B", answer: "Glucose", votes: 12, percentage: 63, isCorrect: true },
  { label: "C", answer: "Carbon dioxide", votes: 2, percentage: 11 },
  { label: "D", answer: "Water", votes: 2, percentage: 10 },
]

export function CurrentQuestion() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-100 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e3a5f]">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-slate-900">
                Current Question
              </CardTitle>
              <p className="text-sm text-slate-500">Question 3 of 5</p>
            </div>
          </div>
          <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700">
            Live Voting
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Question */}
        <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-lg font-medium text-slate-900">
            What is the main product of photosynthesis?
          </p>
        </div>

        {/* Answer Options with Live Voting */}
        <div className="space-y-3">
          {options.map((option) => (
            <div
              key={option.label}
              className={`relative overflow-hidden rounded-xl border-2 transition-all ${
                option.isCorrect
                  ? "border-green-400 bg-green-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              {/* Vote bar background */}
              <div
                className={`absolute inset-y-0 left-0 transition-all ${
                  option.isCorrect ? "bg-green-200/50" : "bg-slate-100"
                }`}
                style={{ width: `${option.percentage}%` }}
              />
              
              {/* Content */}
              <div className="relative flex items-center gap-4 p-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${
                    option.isCorrect
                      ? "bg-green-500 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {option.label}
                </div>
                <span className="flex-1 font-medium text-slate-800">
                  {option.answer}
                </span>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-900">
                    {option.votes}
                  </div>
                  <div className="text-xs text-slate-500">votes</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Response Status */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
          <div className="text-sm text-slate-600">
            <span className="text-xl font-bold text-green-600">19</span>
            <span className="text-slate-400"> / </span>
            <span className="font-semibold text-slate-700">20</span>
            <span className="ml-1 text-slate-500">students answered</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          <Button className="flex-1 gap-2 bg-[#1e3a5f] hover:bg-[#16324d]">
            <SkipForward className="h-4 w-4" />
            Next Question
          </Button>
          <Button variant="outline" className="flex-1 gap-2">
            <Eye className="h-4 w-4" />
            Reveal Answer
          </Button>
          <Button variant="outline" className="flex-1 gap-2">
            <MessageSquarePlus className="h-4 w-4" />
            Ask Follow-Up
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
