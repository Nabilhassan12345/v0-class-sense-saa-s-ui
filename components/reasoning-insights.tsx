"use client"

import { useState } from "react"
import { Brain, AlertTriangle, ChevronRight, Users, X, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ReasoningPattern = {
  id: string
  pattern: string
  count: number
  type: "correct" | "partial" | "misconception"
  examples: string[]
}

const reasoningPatterns: ReasoningPattern[] = [
  {
    id: "1",
    pattern: "Plants produce glucose through photosynthesis using sunlight",
    count: 7,
    type: "correct",
    examples: [
      "Plants use sunlight to convert CO2 and water into glucose for energy.",
      "Photosynthesis creates glucose which plants use as food.",
      "The chloroplasts in leaves make glucose when there's sunlight."
    ]
  },
  {
    id: "2",
    pattern: "Plants absorb food from the soil through roots",
    count: 8,
    type: "misconception",
    examples: [
      "Roots absorb nutrients which I thought was food.",
      "Plants get food from soil through their roots.",
      "The soil has nutrients that plants eat to grow."
    ]
  },
  {
    id: "3",
    pattern: "Plants absorb minerals and nutrients for growth",
    count: 4,
    type: "partial",
    examples: [
      "Plants need minerals from soil but I'm not sure if that's food.",
      "Nutrients help plants grow but glucose is the main product.",
      "Soil gives plants what they need to survive."
    ]
  },
]

export function ReasoningInsights() {
  const [selectedPattern, setSelectedPattern] = useState<ReasoningPattern | null>(null)

  const getTypeStyles = (type: ReasoningPattern["type"]) => {
    switch (type) {
      case "correct":
        return {
          bg: "bg-green-50",
          border: "border-green-200",
          text: "text-green-700",
          badge: "bg-green-100 text-green-700",
          indicator: "bg-green-500"
        }
      case "partial":
        return {
          bg: "bg-amber-50",
          border: "border-amber-200",
          text: "text-amber-700",
          badge: "bg-amber-100 text-amber-700",
          indicator: "bg-amber-500"
        }
      case "misconception":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          text: "text-red-700",
          badge: "bg-red-100 text-red-700",
          indicator: "bg-red-500"
        }
    }
  }

  const getTypeLabel = (type: ReasoningPattern["type"]) => {
    switch (type) {
      case "correct":
        return "Correct"
      case "partial":
        return "Partial"
      case "misconception":
        return "Misconception"
    }
  }

  return (
    <>
      <Card className="border-slate-200 bg-white shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <Brain className="h-5 w-5 text-[#1e3a5f]" />
              Student Reasoning Insights
            </CardTitle>
            <span className="text-xs text-slate-500">
              {reasoningPatterns.reduce((sum, p) => sum + p.count, 0)} responses analyzed
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {reasoningPatterns.map((pattern) => {
            const styles = getTypeStyles(pattern.type)
            return (
              <button
                key={pattern.id}
                onClick={() => setSelectedPattern(pattern)}
                className={cn(
                  "w-full rounded-xl border-2 p-4 text-left transition-all hover:shadow-md",
                  styles.bg,
                  styles.border
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn("h-2 w-2 rounded-full", styles.indicator)} />
                      <span className={cn("text-xs font-semibold uppercase tracking-wide", styles.text)}>
                        {getTypeLabel(pattern.type)}
                      </span>
                      <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium", styles.badge)}>
                        <Users className="mr-1 inline h-3 w-3" />
                        {pattern.count} students
                      </span>
                    </div>
                    <p className={cn("font-medium", styles.text)}>
                      "{pattern.pattern}"
                    </p>
                  </div>
                  <ChevronRight className={cn("h-5 w-5 mt-1", styles.text)} />
                </div>
              </button>
            )
          })}

          {/* Misconception Summary Alert */}
          <div className="mt-4 rounded-xl border-2 border-red-200 bg-red-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-red-800">Misconception Detected</h4>
                <p className="mt-1 text-sm text-red-700">
                  <strong>8 students</strong> believe plants get food from soil.
                </p>
                <p className="mt-2 text-xs text-red-600">
                  Plants produce glucose through photosynthesis using sunlight, carbon dioxide, and water. Soil provides minerals but not food.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detail Modal */}
      {selectedPattern && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold",
                  getTypeStyles(selectedPattern.type).badge
                )}>
                  <span className={cn("h-2 w-2 rounded-full", getTypeStyles(selectedPattern.type).indicator)} />
                  {getTypeLabel(selectedPattern.type)} Reasoning
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  "{selectedPattern.pattern}"
                </h3>
                <p className="text-sm text-slate-500">{selectedPattern.count} students</p>
              </div>
              <button
                onClick={() => setSelectedPattern(null)}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Lightbulb className="h-4 w-4" />
                Example Student Responses
              </h4>
              {selectedPattern.examples.map((example, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-slate-50 p-3 text-sm text-slate-700"
                >
                  "{example}"
                </div>
              ))}
            </div>

            {selectedPattern.type === "misconception" && (
              <div className="mt-4 rounded-xl bg-blue-50 border border-blue-200 p-4">
                <h4 className="font-semibold text-blue-800 text-sm">Suggested Teacher Action</h4>
                <p className="mt-1 text-sm text-blue-700">
                  Consider demonstrating an experiment where plants grow in nutrient-free water with light vs. soil without light to clarify the role of photosynthesis.
                </p>
              </div>
            )}

            <button
              onClick={() => setSelectedPattern(null)}
              className="mt-4 w-full rounded-xl bg-[#1e3a5f] py-3 font-semibold text-white hover:bg-[#16324d]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
