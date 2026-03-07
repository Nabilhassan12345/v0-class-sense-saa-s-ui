"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const concepts = [
  { name: "Photosynthesis Process", understanding: 78 },
  { name: "Glucose Production", understanding: 44 },
  { name: "Light Absorption", understanding: 39 },
]

export function ConceptInsights() {
  const getColorClasses = (value: number) => {
    if (value >= 70) return { bar: "bg-green-500", text: "text-green-600", bg: "hover:bg-green-50" }
    if (value >= 50) return { bar: "bg-amber-500", text: "text-amber-600", bg: "hover:bg-amber-50" }
    return { bar: "bg-red-500", text: "text-red-600", bg: "hover:bg-red-50" }
  }

  return (
    <Card className="border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-slate-900">
          Concept Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {concepts.map((concept) => {
          const colors = getColorClasses(concept.understanding)
          return (
            <button
              key={concept.name}
              className={cn(
                "w-full text-left rounded-xl border border-slate-200 p-3 transition-all",
                colors.bg,
                "hover:border-slate-300 hover:shadow-sm active:scale-[0.99]"
              )}
            >
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="font-medium text-slate-700">{concept.name}</span>
                <span className={cn("font-bold", colors.text)}>{concept.understanding}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={cn("h-full rounded-full transition-all duration-700 ease-out", colors.bar)}
                  style={{ width: `${concept.understanding}%` }}
                />
              </div>
            </button>
          )
        })}
      </CardContent>
    </Card>
  )
}
