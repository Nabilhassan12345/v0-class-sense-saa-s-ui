"use client"

import { MessageCircle, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function LiveQuestion() {
  return (
    <Card className="border-indigo-200 bg-indigo-50/30 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100">
              <MessageCircle className="h-4 w-4 text-indigo-600" />
            </div>
            <CardTitle className="text-base font-semibold text-slate-900">
              Current Question
            </CardTitle>
          </div>
          <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
            Question 3 of 5
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border border-indigo-200 bg-white p-4">
          <p className="text-lg font-medium text-slate-900">
            What is the main product of photosynthesis?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "A", answer: "Oxygen", votes: 3 },
            { label: "B", answer: "Glucose", votes: 12, isCorrect: true },
            { label: "C", answer: "Carbon dioxide", votes: 2 },
            { label: "D", answer: "Water", votes: 2 },
          ].map((option) => (
            <button
              key={option.label}
              className={`relative flex items-center gap-3 rounded-lg border p-3 text-left transition-colors ${
                option.isCorrect
                  ? "border-green-300 bg-green-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold ${
                  option.isCorrect
                    ? "bg-green-100 text-green-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {option.label}
              </div>
              <span className="flex-1 text-sm font-medium text-slate-700">
                {option.answer}
              </span>
              <span className="text-xs text-slate-500">{option.votes} votes</span>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-indigo-100 pt-4">
          <div className="text-sm text-slate-600">
            <span className="font-semibold text-indigo-600">19</span> of{" "}
            <span className="font-semibold">20</span> students answered
          </div>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Send className="mr-2 h-4 w-4" />
            Next Question
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
