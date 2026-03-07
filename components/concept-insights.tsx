"use client"

import { useState, useEffect } from "react"
import { BarChart3, TrendingUp, TrendingDown, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const conceptsData = [
  { name: "Photosynthesis Process", understanding: 78, trend: 5, students: 15 },
  { name: "Glucose Production", understanding: 44, trend: -3, students: 9 },
  { name: "Light Absorption", understanding: 39, trend: 2, students: 8 },
]

export function ConceptInsights() {
  const [hoveredConcept, setHoveredConcept] = useState<string | null>(null)
  const [animatedValues, setAnimatedValues] = useState(conceptsData.map(() => 0))

  // Animate bars on mount
  useEffect(() => {
    const duration = 1200
    const steps = 60
    const interval = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      setAnimatedValues(conceptsData.map(c => Math.round(c.understanding * easeOut)))

      if (step >= steps) {
        clearInterval(timer)
        setAnimatedValues(conceptsData.map(c => c.understanding))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const getColorClasses = (value: number) => {
    if (value >= 70) return { 
      bar: "bg-gradient-to-r from-emerald-400 to-emerald-500", 
      text: "text-emerald-600", 
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      hoverBorder: "hover:border-emerald-300"
    }
    if (value >= 50) return { 
      bar: "bg-gradient-to-r from-amber-400 to-amber-500", 
      text: "text-amber-600", 
      bg: "bg-amber-50",
      border: "border-amber-200",
      hoverBorder: "hover:border-amber-300"
    }
    return { 
      bar: "bg-gradient-to-r from-red-400 to-red-500", 
      text: "text-red-600", 
      bg: "bg-red-50",
      border: "border-red-200",
      hoverBorder: "hover:border-red-300"
    }
  }

  return (
    <Card className="border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3 border-b border-slate-100">
        <CardTitle className="text-base font-semibold text-slate-900 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-slate-500" />
          Concept Insights
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pt-5 space-y-3">
        {conceptsData.map((concept, index) => {
          const colors = getColorClasses(concept.understanding)
          const isHovered = hoveredConcept === concept.name
          const animatedValue = animatedValues[index]
          
          return (
            <button
              key={concept.name}
              onMouseEnter={() => setHoveredConcept(concept.name)}
              onMouseLeave={() => setHoveredConcept(null)}
              className={cn(
                "w-full text-left rounded-xl border-2 p-4 transition-all duration-300",
                colors.bg,
                colors.border,
                colors.hoverBorder,
                "hover:shadow-md active:scale-[0.99]",
                isHovered && "-translate-y-0.5 shadow-md"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">{concept.name}</span>
                  <span className="ml-2 text-xs text-slate-500">({concept.students} students)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full",
                    concept.trend >= 0 ? "text-emerald-600 bg-emerald-100" : "text-red-600 bg-red-100"
                  )}>
                    {concept.trend >= 0 ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    {concept.trend >= 0 ? "+" : ""}{concept.trend}%
                  </div>
                  <span className={cn(
                    "text-xl font-bold tabular-nums transition-transform duration-300",
                    colors.text,
                    isHovered && "scale-110"
                  )}>
                    {animatedValue}%
                  </span>
                  <ChevronRight className={cn(
                    "h-4 w-4 text-slate-400 transition-transform duration-300",
                    isHovered && "translate-x-1"
                  )} />
                </div>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 shadow-inner">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-700 ease-out",
                    colors.bar,
                    isHovered && "brightness-110"
                  )}
                  style={{ width: `${animatedValue}%` }}
                />
              </div>
            </button>
          )
        })}
      </CardContent>
    </Card>
  )
}
