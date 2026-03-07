"use client"

import { useState } from "react"
import { Radio, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type Step = "answer" | "reasoning" | "submitted"

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
    <div className="flex min-h-screen flex-col bg-slate-100">
      {/* Header - Deep Blue matching teacher dashboard */}
      <header className="bg-[#1e3a5f] px-4 py-4 text-white">
        <div className="flex items-center justify-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
            <Radio className="h-4 w-4" />
          </div>
          <h1 className="text-lg font-bold">ClassSense</h1>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="bg-white px-4 py-3 shadow-sm">
        <div className="mx-auto flex max-w-md items-center justify-center gap-2">
          <div className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
            step === "answer" ? "bg-[#1e3a5f] text-white" : "bg-green-500 text-white"
          )}>
            {step === "answer" ? "1" : <Check className="h-3 w-3" />}
          </div>
          <div className={cn(
            "h-1 w-12 rounded",
            step !== "answer" ? "bg-green-500" : "bg-slate-200"
          )} />
          <div className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
            step === "reasoning" ? "bg-[#1e3a5f] text-white" : 
            step === "submitted" ? "bg-green-500 text-white" : "bg-slate-200 text-slate-500"
          )}>
            {step === "submitted" ? <Check className="h-3 w-3" /> : "2"}
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-slate-500">
          {step === "answer" && "Step 1: Select your answer"}
          {step === "reasoning" && "Step 2: Explain your reasoning"}
          {step === "submitted" && "Complete!"}
        </p>
      </div>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* STEP 1: Answer Selection */}
          {step === "answer" && (
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="mb-6">
                <p className="text-center text-lg font-semibold text-slate-900">
                  What is the main product of photosynthesis?
                </p>
              </div>

              <div className="space-y-3">
                {answerOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedAnswer(option.id)}
                    className={cn(
                      "flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-all",
                      selectedAnswer === option.id
                        ? "border-[#1e3a5f] bg-blue-50"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    <span className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold",
                      selectedAnswer === option.id
                        ? "bg-[#1e3a5f] text-white"
                        : "bg-slate-100 text-slate-600"
                    )}>
                      {option.id}
                    </span>
                    <span className={cn(
                      "font-medium",
                      selectedAnswer === option.id ? "text-[#1e3a5f]" : "text-slate-700"
                    )}>
                      {option.text}
                    </span>
                    {selectedAnswer === option.id && (
                      <Check className="ml-auto h-5 w-5 text-[#1e3a5f]" />
                    )}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleAnswerSubmit}
                disabled={!selectedAnswer}
                className="mt-6 w-full rounded-xl bg-[#1e3a5f] py-6 text-base font-semibold hover:bg-[#16324d] disabled:opacity-50"
              >
                Submit Answer
              </Button>
            </div>
          )}

          {/* STEP 2: Explain Reasoning */}
          {step === "reasoning" && (
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <div className="mb-2 flex justify-center">
                <span className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium",
                  selectedAnswer === "B" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"
                )}>
                  You selected: {answerOptions.find(o => o.id === selectedAnswer)?.text}
                </span>
              </div>
              
              <div className="mb-6 mt-4">
                <p className="text-center text-lg font-semibold text-slate-900">
                  Why did you choose this answer?
                </p>
                <p className="mt-1 text-center text-sm text-slate-500">
                  Explain your reasoning in a few sentences
                </p>
              </div>

              <Textarea
                placeholder="Write a short explanation of your thinking..."
                value={reasoning}
                onChange={(e) => setReasoning(e.target.value)}
                className="min-h-[140px] resize-none rounded-xl border-slate-200 text-base focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
              />

              <Button
                onClick={handleReasoningSubmit}
                disabled={!reasoning.trim()}
                className="mt-4 w-full rounded-xl bg-[#1e3a5f] py-6 text-base font-semibold hover:bg-[#16324d] disabled:opacity-50"
              >
                Submit Explanation
              </Button>
            </div>
          )}

          {/* SUBMITTED STATE */}
          {step === "submitted" && (
            <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-900">Answer and reasoning submitted!</h2>
              <p className="mt-2 text-slate-600">
                Waiting for teacher...
              </p>
              <div className="mt-6 rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wide">Your answer</p>
                <p className="mt-1 font-semibold text-slate-900">
                  {answerOptions.find(o => o.id === selectedAnswer)?.text}
                </p>
                <p className="mt-3 text-xs text-slate-500 uppercase tracking-wide">Your reasoning</p>
                <p className="mt-1 text-sm text-slate-700">{reasoning}</p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-slate-500">
        Connected to Biology — Photosynthesis
      </footer>
    </div>
  )
}
