"use client"

import { useState } from "react"
import { Brain, AlertTriangle, ChevronRight, Users, X, Lightbulb, Sparkles, MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ReasoningPattern = {
  id: string
  pattern: string
  count: number
  type: "correct" | "partial" | "misconception"
  students: { name: string; avatar: string; response: string }[]
}

const reasoningPatterns: ReasoningPattern[] = [
  {
    id: "1",
    pattern: "Plants produce glucose through photosynthesis using sunlight",
    count: 7,
    type: "correct",
    students: [
      { name: "Emma S.", avatar: "ES", response: "Plants use sunlight to convert CO2 and water into glucose for energy." },
      { name: "Liam J.", avatar: "LJ", response: "Photosynthesis creates glucose which plants use as food." },
      { name: "Lucas W.", avatar: "LW", response: "The chloroplasts in leaves make glucose when there's sunlight." },
    ]
  },
  {
    id: "2",
    pattern: "Plants absorb food from the soil through roots",
    count: 8,
    type: "misconception",
    students: [
      { name: "Ahmet Y.", avatar: "AY", response: "Roots absorb nutrients which I thought was food." },
      { name: "Mehmet K.", avatar: "MK", response: "Plants get food from soil through their roots." },
      { name: "James W.", avatar: "JW", response: "The soil has nutrients that plants eat to grow." },
    ]
  },
  {
    id: "3",
    pattern: "Plants absorb minerals and nutrients for growth",
    count: 4,
    type: "partial",
    students: [
      { name: "Sophia L.", avatar: "SL", response: "Plants need minerals from soil but I'm not sure if that's food." },
      { name: "Ava R.", avatar: "AR", response: "Nutrients help plants grow but glucose is the main product." },
    ]
  },
]

export function ReasoningInsights() {
  const [selectedPattern, setSelectedPattern] = useState<ReasoningPattern | null>(null)
  const [hoveredPattern, setHoveredPattern] = useState<string | null>(null)

  const getTypeStyles = (type: ReasoningPattern["type"]) => {
    switch (type) {
      case "correct":
        return {
          bg: "bg-emerald-50",
          bgHover: "hover:bg-emerald-100/70",
          border: "border-emerald-200",
          borderHover: "hover:border-emerald-300",
          text: "text-emerald-700",
          badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
          indicator: "bg-emerald-500",
          gradient: "from-emerald-500 to-emerald-600"
        }
      case "partial":
        return {
          bg: "bg-amber-50",
          bgHover: "hover:bg-amber-100/70",
          border: "border-amber-200",
          borderHover: "hover:border-amber-300",
          text: "text-amber-700",
          badge: "bg-amber-100 text-amber-700 border-amber-200",
          indicator: "bg-amber-500",
          gradient: "from-amber-500 to-amber-600"
        }
      case "misconception":
        return {
          bg: "bg-red-50",
          bgHover: "hover:bg-red-100/70",
          border: "border-red-200",
          borderHover: "hover:border-red-300",
          text: "text-red-700",
          badge: "bg-red-100 text-red-700 border-red-200",
          indicator: "bg-red-500",
          gradient: "from-red-500 to-red-600"
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

  const totalResponses = reasoningPatterns.reduce((sum, p) => sum + p.count, 0)

  return (
    <>
      <Card className="border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="pb-3 border-b border-slate-100">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-3 text-base font-semibold text-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] shadow-md">
                <Brain className="h-5 w-5 text-white" />
              </div>
              Student Reasoning
            </CardTitle>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
              <MessageSquare className="h-3 w-3" />
              {totalResponses} responses
            </span>
          </div>
        </CardHeader>
        
        <CardContent className="pt-5 space-y-3">
          {reasoningPatterns.map((pattern, index) => {
            const styles = getTypeStyles(pattern.type)
            const isHovered = hoveredPattern === pattern.id
            const percentage = Math.round((pattern.count / totalResponses) * 100)
            
            return (
              <button
                key={pattern.id}
                onClick={() => setSelectedPattern(pattern)}
                onMouseEnter={() => setHoveredPattern(pattern.id)}
                onMouseLeave={() => setHoveredPattern(null)}
                className={cn(
                  "relative w-full overflow-hidden rounded-xl border-2 p-4 text-left transition-all duration-300",
                  "hover:shadow-lg active:scale-[0.99]",
                  styles.bg,
                  styles.border,
                  styles.borderHover,
                  isHovered && "shadow-md -translate-y-0.5"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Progress bar background */}
                <div 
                  className={cn(
                    "absolute inset-y-0 left-0 transition-all duration-700 ease-out opacity-30",
                    styles.indicator
                  )}
                  style={{ width: `${percentage}%` }}
                />
                
                <div className="relative flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn(
                        "h-3 w-3 rounded-full shadow-sm transition-transform duration-300",
                        styles.indicator,
                        isHovered && "scale-125"
                      )} />
                      <span className={cn(
                        "text-xs font-bold uppercase tracking-wider",
                        styles.text
                      )}>
                        {getTypeLabel(pattern.type)}
                      </span>
                      <span className={cn(
                        "flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold border",
                        styles.badge
                      )}>
                        <Users className="h-3 w-3" />
                        {pattern.count}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        ({percentage}%)
                      </span>
                    </div>
                    <p className={cn(
                      "font-medium leading-relaxed transition-colors duration-300",
                      styles.text
                    )}>
                      "{pattern.pattern}"
                    </p>
                  </div>
                  <ChevronRight className={cn(
                    "h-5 w-5 mt-1 transition-all duration-300",
                    styles.text,
                    isHovered && "translate-x-1"
                  )} />
                </div>
              </button>
            )
          })}

          {/* Misconception Summary Alert */}
          <div className="mt-5 rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 via-red-50/80 to-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-red-800">Misconception Detected</h4>
                  <Sparkles className="h-4 w-4 text-red-500 animate-pulse" />
                </div>
                <p className="mt-1.5 text-sm text-red-700">
                  <span className="font-bold text-red-800">8 students</span> believe plants get food from soil.
                </p>
                <p className="mt-2.5 text-xs text-red-600 leading-relaxed bg-red-100/50 rounded-lg p-3 border border-red-200">
                  <span className="font-semibold">Correction:</span> Plants produce glucose through photosynthesis using sunlight, carbon dioxide, and water. Soil provides minerals but not food.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detail Modal */}
      {selectedPattern && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedPattern(null)}
        >
          <div 
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <span className={cn(
                  "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold border",
                  getTypeStyles(selectedPattern.type).badge
                )}>
                  <span className={cn(
                    "h-2 w-2 rounded-full",
                    getTypeStyles(selectedPattern.type).indicator
                  )} />
                  {getTypeLabel(selectedPattern.type)} Reasoning
                </span>
                <h3 className="mt-3 text-xl font-bold text-slate-900 leading-snug">
                  "{selectedPattern.pattern}"
                </h3>
                <p className="text-sm text-slate-500 mt-1.5">
                  <span className="font-semibold text-slate-700">{selectedPattern.count}</span> students with this reasoning
                </p>
              </div>
              <button
                onClick={() => setSelectedPattern(null)}
                className="rounded-xl p-2 hover:bg-slate-100 transition-all duration-200 hover:rotate-90"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                Student Responses
              </h4>
              {selectedPattern.students.map((student, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex items-start gap-3 rounded-xl border p-4 transition-all duration-300 hover:shadow-md",
                    getTypeStyles(selectedPattern.type).bg,
                    getTypeStyles(selectedPattern.type).border
                  )}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className={cn(
                    "h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md bg-gradient-to-br",
                    getTypeStyles(selectedPattern.type).gradient
                  )}>
                    {student.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 text-sm">{student.name}</p>
                    <p className={cn(
                      "text-sm mt-1 leading-relaxed",
                      getTypeStyles(selectedPattern.type).text
                    )}>
                      "{student.response}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {selectedPattern.type === "misconception" && (
              <div className="mt-5 rounded-xl bg-gradient-to-br from-[#1e3a5f]/10 to-[#1e3a5f]/5 border border-[#1e3a5f]/20 p-4">
                <h4 className="flex items-center gap-2 font-semibold text-[#1e3a5f] text-sm">
                  <Sparkles className="h-4 w-4" />
                  Suggested Teacher Action
                </h4>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  Consider demonstrating an experiment where plants grow in nutrient-free water with light vs. soil without light to clarify the role of photosynthesis.
                </p>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => setSelectedPattern(null)}
                className="flex-1 rounded-xl border-slate-200 hover:bg-slate-50 transition-all active:scale-[0.98]"
              >
                Close
              </Button>
              <Button
                className="flex-1 rounded-xl bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] hover:from-[#16324d] hover:to-[#1e3a5f] shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
              >
                Address This Pattern
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
