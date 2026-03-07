"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const concepts = [
  { name: "Source of plant food", confusion: 42 },
  { name: "Role of chlorophyll", confusion: 28 },
  { name: "Gas exchange process", confusion: 18 },
  { name: "Light vs dark reactions", confusion: 12 },
]

export function ConfusedConcepts() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-slate-900">
          Top Confused Concepts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {concepts.map((concept, index) => (
          <div key={index} className="space-y-1.5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">{concept.name}</span>
              <span className="font-medium text-slate-900">{concept.confusion}%</span>
            </div>
            <Progress
              value={concept.confusion}
              className="h-2"
              style={{
                // @ts-expect-error CSS custom property
                "--progress-background":
                  concept.confusion > 30
                    ? "#ef4444"
                    : concept.confusion > 20
                      ? "#eab308"
                      : "#22c55e",
              }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
