"use client"

import { AlertTriangle, Lightbulb, BookOpen } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MisconceptionAlert() {
  return (
    <Card className="border-amber-200 bg-amber-50/30 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
            </div>
            <CardTitle className="text-base font-semibold text-slate-900">
              Misconception Detected
            </CardTitle>
          </div>
          <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-100">
            42% of students
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border border-amber-200 bg-white p-4">
          <p className="text-sm font-medium text-slate-700">
            {'"Plants get their food from the soil."'}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
              <BookOpen className="h-3.5 w-3.5 text-slate-600" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Detected Reasoning Pattern
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Students believe plants absorb food directly from the soil rather
                than producing their own food.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
              <Lightbulb className="h-3.5 w-3.5 text-indigo-600" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-indigo-600">
                Counterexample Explanation
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Plants create glucose through{" "}
                <span className="font-semibold text-indigo-600">photosynthesis</span>{" "}
                using sunlight, carbon dioxide, and water. The soil only provides
                minerals and nutrients, not food.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
