"use client"

import { useState, useEffect } from "react"
import { Radio, Check, Clock, Zap, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type Step = "waiting" | "answer" | "reasoning" | "submitted"

const answerOptions = [
  { id: "A", text: "Oxygen" },
  { id: "B", text: "Glucose" },
  { id: "C", text: "Carbon dioxide" },
  { id: "D", text: "Water" },
]

export default function StudentSessionPage() {
  const [step, setStep] = useState<Step>("answer")
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [reasoning, setReasoning] = useState("")
  const [timeLeft, setTimeLeft] = useState(45)

  useEffect(() => {
    if (step === "answer" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [step, timeLeft])

  const handleAnswerSubmit = () => {
    if (selectedAnswer) {
      setStep("reasoning")
    }
  }

  const handleReasoningSubmit = () => {
    if (reasoning.trim()) {
      setStep("submitted")
    }
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-[#1e3a5f] px-4 py-3 text-white shadow-lg sm:py-4">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm sm:h-9 sm:w-9">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <span className="text-base font-bold tracking-tight sm:text-lg">ClassSense</span>
          </div>
          {step === "answer" && (
            <div className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium",
              timeLeft <= 10 ? "bg-red-500/20 text-red-200" : "bg-white/10"
            )}>
              <Clock className="h-4 w-4" />
              <span>{timeLeft}s</span>
            </div>
          )}
        </div>
      </header>

      {/* Progress Steps */}
      <div className="border-b border-slate-200 bg-white px-4 py-3 shadow-sm">
        <div className="mx-auto flex max-w-lg items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <div className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300",
              step === "answer" ? "bg-[#1e3a5f] text-white ring-4 ring-blue-100" : "bg-emerald-500 text-white"
            )}>
              {step === "answer" ? "1" : <Check className="h-3.5 w-3.5" />}
            </div>
            <span className="hidden text-sm font-medium text-slate-700 sm:block">Answer</span>
          </div>
          <div className={cn(
            "h-0.5 w-8 rounded-full transition-all duration-300 sm:w-12",
            step !== "answer" ? "bg-emerald-500" : "bg-slate-200"
          )} />
          <div className="flex items-center gap-2">
            <div className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-300",
              step === "reasoning" ? "bg-[#1e3a5f] text-white ring-4 ring-blue-100" : 
              step === "submitted" ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-500"
            )}>
              {step === "submitted" ? <Check className="h-3.5 w-3.5" /> : "2"}
            </div>
            <span className="hidden text-sm font-medium text-slate-700 sm:block">Explain</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-md">
          {/* STEP 1: Answer Selection */}
          {step === "answer" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-200/50 sm:p-6">
              <div className="mb-5 text-center sm:mb-6">
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#1e3a5f]">
                  <Zap className="h-3 w-3" />
                  Question 5 of 12
                </div>
                <p className="text-balance text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                  What is the main product of photosynthesis?
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {answerOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedAnswer(option.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl border-2 p-3.5 text-left transition-all duration-200 sm:gap-4 sm:p-4",
                      selectedAnswer === option.id
                        ? "border-[#1e3a5f] bg-blue-50 shadow-md"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
                    )}
                  >
                    <span className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-all duration-200 sm:h-10 sm:w-10",
                      selectedAnswer === option.id
                        ? "bg-[#1e3a5f] text-white shadow-md"
                        : "bg-slate-100 text-slate-600"
                    )}>
                      {option.id}
                    </span>
                    <span className={cn(
                      "flex-1 font-medium transition-colors",
                      selectedAnswer === option.id ? "text-[#1e3a5f]" : "text-slate-700"
                    )}>
                      {option.text}
                    </span>
                    {selectedAnswer === option.id && (
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1e3a5f]">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleAnswerSubmit}
                disabled={!selectedAnswer}
                className="mt-5 w-full rounded-xl bg-[#1e3a5f] py-5 text-base font-semibold shadow-lg transition-all hover:bg-[#16324d] hover:shadow-xl disabled:opacity-50 sm:mt-6 sm:py-6"
              >
                Submit Answer
              </Button>
            </div>
          )}

          {/* STEP 2: Explain Reasoning */}
          {step === "reasoning" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-slate-200/50 sm:p-6">
              <div className="mb-2 flex justify-center">
                <span className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium",
                  selectedAnswer === "B" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"
                )}>
                  <Check className="h-3.5 w-3.5" />
                  {answerOptions.find(o => o.id === selectedAnswer)?.text}
                </span>
              </div>
              
              <div className="mb-5 mt-4 text-center sm:mb-6">
                <p className="text-balance text-lg font-semibold text-slate-900 sm:text-xl">
                  Why did you choose this answer?
                </p>
                <p className="mt-1.5 text-sm text-slate-500">
                  Explain your reasoning in a few sentences
                </p>
              </div>

              <Textarea
                placeholder="Write a short explanation of your thinking..."
                value={reasoning}
                onChange={(e) => setReasoning(e.target.value)}
                className="min-h-[120px] resize-none rounded-xl border-slate-200 text-base transition-all focus:border-[#1e3a5f] focus:ring-2 focus:ring-blue-100 sm:min-h-[140px]"
              />

              <Button
                onClick={handleReasoningSubmit}
                disabled={!reasoning.trim()}
                className="mt-4 w-full rounded-xl bg-[#1e3a5f] py-5 text-base font-semibold shadow-lg transition-all hover:bg-[#16324d] hover:shadow-xl disabled:opacity-50 sm:py-6"
              >
                Submit Explanation
              </Button>
            </div>
          )}

          {/* SUBMITTED STATE */}
          {step === "submitted" && (
            <div className="animate-in fade-in zoom-in-95 duration-500 rounded-2xl bg-white p-6 text-center shadow-xl ring-1 ring-slate-200/50 sm:p-8">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 ring-8 ring-emerald-50 sm:h-20 sm:w-20">
                  <Check className="h-8 w-8 text-emerald-600 sm:h-10 sm:w-10" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Response Submitted!</h2>
              <p className="mt-2 text-slate-500">
                Waiting for next question...
              </p>
              <div className="mt-6 rounded-xl bg-slate-50 p-4 text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Your answer</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {answerOptions.find(o => o.id === selectedAnswer)?.text}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-slate-400">Your reasoning</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">{reasoning}</p>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Connected to session
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white p-3 text-center text-sm text-slate-500 sm:p-4">
        <span className="font-medium text-slate-700">Biology</span> — Photosynthesis
      </footer>
    </div>
  )
}
