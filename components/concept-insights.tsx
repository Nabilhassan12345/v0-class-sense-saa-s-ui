"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const concepts = [
  { name: "Photosynthesis Process", understanding: 78, color: "bg-green-500" },
  { name: "Glucose Production", understanding: 44, color: "bg-yellow-500" },
  { name: "Light Absorption", understanding: 39, color: "bg-red-500" },
]

export function ConceptInsights() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-slate-900">
          Concept Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {concepts.map((concept) => (
          <div key={concept.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-700">{concept.name}</span>
              <span className="font-semibold text-slate-900">{concept.understanding}%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${concept.color}`}
                style={{ width: `${concept.understanding}%` }}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
