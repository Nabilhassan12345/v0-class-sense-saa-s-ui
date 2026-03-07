"use client"

import { AlertTriangle, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MisconceptionAlert() {
  return (
    <Card className="border-amber-300 bg-white shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
          </div>
          <CardTitle className="text-base font-semibold text-slate-900">
            Misconception Alert
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-2xl font-bold text-amber-600">
            42% <span className="text-base font-normal text-slate-600">of students think:</span>
          </p>
        </div>
        
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-lg font-medium text-slate-800">
            {'"Plants get their food from the soil."'}
          </p>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
          <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-100">
            <Lightbulb className="h-3.5 w-3.5 text-yellow-600" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Follow-up Question
            </p>
            <p className="mt-1 text-sm text-slate-700">
              What happens in a vacuum?
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
