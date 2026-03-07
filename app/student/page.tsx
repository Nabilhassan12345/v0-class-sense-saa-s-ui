"use client"

import { useState } from "react"
import { Radio, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function StudentSessionPage() {
  const [answer, setAnswer] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (answer.trim()) {
      setSubmitted(true)
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

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <div className="w-full max-w-md">
          {!submitted ? (
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              {/* Question */}
              <div className="mb-6">
                <p className="text-center text-lg font-semibold text-slate-900">
                  Why do heavier and lighter objects fall at the same speed?
                </p>
              </div>

              {/* Answer Input */}
              <div className="space-y-4">
                <Textarea
                  placeholder="Write a short explanation..."
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="min-h-[120px] resize-none rounded-xl border-slate-200 text-base focus:border-[#1e3a5f] focus:ring-[#1e3a5f]"
                />

                <Button
                  onClick={handleSubmit}
                  disabled={!answer.trim()}
                  className="w-full gap-2 rounded-xl bg-[#1e3a5f] py-6 text-base font-semibold hover:bg-[#16324d] disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  Submit
                </Button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-900">Answer Submitted!</h2>
              <p className="mt-2 text-slate-600">
                Waiting for the next question...
              </p>
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
