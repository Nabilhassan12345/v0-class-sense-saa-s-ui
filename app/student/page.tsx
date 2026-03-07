"use client"

import { useState, useEffect } from "react"
import { Check, Send, Sparkles, Clock, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Step = "answer" | "reasoning" | "submitted"

const answerOptions = [
  { id: "A", text: "Because gravity pulls them equally", color: "from-indigo-500 to-violet-500", bg: "bg-indigo-50", border: "border-indigo-200", activeBg: "bg-indigo-100" },
  { id: "B", text: "Because heavier objects have more force", color: "from-sky-500 to-cyan-500", bg: "bg-sky-50", border: "border-sky-200", activeBg: "bg-sky-100" },
  { id: "C", text: "Because air resistance balances the weight", color: "from-emerald-500 to-teal-500", bg: "bg-emerald-50", border: "border-emerald-200", activeBg: "bg-emerald-100" },
  { id: "D", text: "Because heavier objects fall faster", color: "from-amber-500 to-orange-500", bg: "bg-amber-50", border: "border-amber-200", activeBg: "bg-amber-100" },
]

export default function StudentLiveSessionPage() {
  const [step, setStep] = useState<Step>("answer")
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [reasoning, setReasoning] = useState("")
  const [timeLeft, setTimeLeft] = useState(60)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (step === "answer" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1))
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [step, timeLeft])

  const handleAnswerSelect = (id: string) => {
    setSelectedAnswer(id)
  }

  const handleAnswerSubmit = () => {
    if (selectedAnswer) {
      setStep("reasoning")
    }
  }

  const handleReasoningSubmit = async () => {
    if (reasoning.trim()) {
      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 800))
      setIsSubmitting(false)
      setStep("submitted")
    }
  }

  const selectedOption = answerOptions.find(o => o.id === selectedAnswer)

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-br from-indigo-50 via-white to-violet-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 text-white shadow-lg">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">ClassSense</h1>
              <p className="text-xs text-white/70">Live Session</p>
            </div>
          </div>
          
          {step === "answer" && (
            <div className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 font-mono text-lg font-bold transition-all",
              timeLeft <= 10 
                ? "animate-pulse bg-red-500/30 text-red-100" 
                : "bg-white/15 backdrop-blur-sm"
            )}>
              <Clock className="h-4 w-4" />
              <span>{timeLeft}s</span>
            </div>
          )}
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-indigo-100 px-4 py-3">
        <div className="mx-auto flex max-w-lg items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all duration-500",
              step === "answer" 
                ? "bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-200 scale-110" 
                : "bg-emerald-500 text-white"
            )}>
              {step === "answer" ? "1" : <Check className="h-4 w-4" />}
            </div>
            <span className="text-sm font-semibold text-slate-700">Answer</span>
          </div>
          
          <div className={cn(
            "h-1 w-16 rounded-full transition-all duration-500",
            step !== "answer" ? "bg-emerald-400" : "bg-slate-200"
          )} />
          
          <div className="flex items-center gap-2">
            <div className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all duration-500",
              step === "reasoning" 
                ? "bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-200 scale-110" 
                : step === "submitted" 
                  ? "bg-emerald-500 text-white" 
                  : "bg-slate-200 text-slate-400"
            )}>
              {step === "submitted" ? <Check className="h-4 w-4" /> : "2"}
            </div>
            <span className={cn(
              "text-sm font-semibold transition-colors",
              step !== "answer" ? "text-slate-700" : "text-slate-400"
            )}>Explain</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="mx-auto w-full max-w-lg flex-1 flex flex-col">
          
          {/* STEP 1: Answer Selection */}
          {step === "answer" && (
            <div className="flex flex-1 flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Question Card */}
              <div className="mb-6 rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/50 ring-1 ring-indigo-100">
                <div className="mb-4 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-violet-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
                    <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                    Question 5 of 12
                  </span>
                </div>
                <h2 className="text-center text-xl font-bold leading-relaxed text-slate-800 sm:text-2xl">
                  Why do heavier and lighter objects fall at the same speed?
                </h2>
              </div>

              {/* Answer Options */}
              <div className="flex-1 space-y-3">
                {answerOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(option.id)}
                    style={{ animationDelay: `${index * 100}ms` }}
                    className={cn(
                      "animate-in fade-in slide-in-from-bottom-2 w-full rounded-2xl border-2 p-4 text-left transition-all duration-300 active:scale-[0.98]",
                      selectedAnswer === option.id
                        ? `${option.activeBg} ${option.border} shadow-lg scale-[1.02]`
                        : `bg-white ${option.border} hover:shadow-md hover:scale-[1.01]`
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition-all duration-300",
                        selectedAnswer === option.id
                          ? `bg-gradient-to-br ${option.color} text-white shadow-lg`
                          : `${option.bg} text-slate-600`
                      )}>
                        {option.id}
                      </div>
                      <span className={cn(
                        "flex-1 text-base font-medium leading-snug transition-colors sm:text-lg",
                        selectedAnswer === option.id ? "text-slate-900" : "text-slate-700"
                      )}>
                        {option.text}
                      </span>
                      {selectedAnswer === option.id && (
                        <div className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br",
                          option.color
                        )}>
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleAnswerSubmit}
                disabled={!selectedAnswer}
                className={cn(
                  "mt-6 w-full rounded-2xl py-5 text-lg font-bold text-white shadow-xl transition-all duration-300",
                  selectedAnswer
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 hover:shadow-2xl hover:shadow-indigo-200 active:scale-[0.98]"
                    : "bg-slate-300 cursor-not-allowed"
                )}
              >
                Submit Answer
              </button>
            </div>
          )}

          {/* STEP 2: Explain Reasoning */}
          {step === "reasoning" && (
            <div className="flex flex-1 flex-col animate-in fade-in slide-in-from-right-4 duration-500">
              {/* Selected Answer Badge */}
              <div className="mb-4 flex justify-center">
                <div className={cn(
                  "inline-flex items-center gap-3 rounded-full px-5 py-2.5 shadow-lg",
                  selectedOption?.activeBg,
                  selectedOption?.border
                )}>
                  <div className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-bold text-white",
                    selectedOption?.color
                  )}>
                    {selectedAnswer}
                  </div>
                  <span className="font-semibold text-slate-700">{selectedOption?.text}</span>
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
              </div>

              {/* Reasoning Card */}
              <div className="flex-1 rounded-3xl bg-white p-6 shadow-xl shadow-violet-100/50 ring-1 ring-violet-100">
                <div className="mb-6 text-center">
                  <div className="mb-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-100 to-purple-100 p-3">
                    <Sparkles className="h-6 w-6 text-violet-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
                    Explain your reasoning
                  </h2>
                  <p className="mt-2 text-slate-500">
                    Why did you choose this answer?
                  </p>
                </div>

                <div className="relative">
                  <textarea
                    placeholder="Write your explanation..."
                    value={reasoning}
                    onChange={(e) => setReasoning(e.target.value)}
                    rows={5}
                    className="w-full resize-none rounded-2xl border-2 border-violet-200 bg-violet-50/50 p-4 text-base text-slate-800 placeholder-slate-400 transition-all focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-slate-400">
                    {reasoning.length} characters
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleReasoningSubmit}
                disabled={!reasoning.trim() || isSubmitting}
                className={cn(
                  "mt-6 flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-lg font-bold text-white shadow-xl transition-all duration-300",
                  reasoning.trim() && !isSubmitting
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 hover:shadow-2xl hover:shadow-violet-200 active:scale-[0.98]"
                    : "bg-slate-300 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Submit Reasoning
                  </>
                )}
              </button>
            </div>
          )}

          {/* SUBMITTED STATE */}
          {step === "submitted" && (
            <div className="flex flex-1 flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700">
              {/* Success Animation */}
              <div className="relative mb-8">
                <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400/30" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-2xl shadow-emerald-200">
                  <Check className="h-12 w-12 text-white" strokeWidth={3} />
                </div>
              </div>

              <h2 className="mb-2 text-2xl font-bold text-slate-800 sm:text-3xl">
                Answer Submitted!
              </h2>
              <p className="mb-8 text-lg text-slate-500">
                Waiting for teacher...
              </p>

              {/* Summary Card */}
              <div className="w-full rounded-3xl bg-white p-6 shadow-xl shadow-emerald-100/50 ring-1 ring-emerald-100">
                <div className="space-y-4">
                  <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-violet-50 p-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
                      Your Answer
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br text-sm font-bold text-white",
                        selectedOption?.color
                      )}>
                        {selectedAnswer}
                      </div>
                      <span className="font-semibold text-slate-800">{selectedOption?.text}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-violet-600">
                      Your Reasoning
                    </p>
                    <p className="leading-relaxed text-slate-700">{reasoning}</p>
                  </div>
                </div>
              </div>

              {/* Connection Status */}
              <div className="mt-8 flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                Connected to session
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-indigo-100 bg-white/80 backdrop-blur-sm px-4 py-3">
        <div className="mx-auto max-w-lg text-center">
          <span className="text-sm">
            <span className="font-semibold text-indigo-600">Physics</span>
            <span className="mx-2 text-slate-300">|</span>
            <span className="text-slate-500">Gravity & Motion</span>
          </span>
        </div>
      </footer>
    </div>
  )
}
