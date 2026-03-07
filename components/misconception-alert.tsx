"use client"

import { AlertTriangle, Lightbulb, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MisconceptionAlert() {
  return (
    <Card className="border-red-200 bg-gradient-to-br from-red-50 to-white shadow-sm transition-all duration-200 hover:shadow-md hover:border-red-300">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 transition-transform hover:scale-105">
            <AlertTriangle className="h-5 w-5 text-red-600" />
          </div>
          <CardTitle className="text-base font-semibold text-red-900">
            Misconception Alert
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-red-600">42%</span>
            <span className="text-sm text-red-700">of students think:</span>
          </div>
          <p className="mt-2 text-lg font-medium text-red-900 text-balance">
            "Plants get their food from the soil."
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 transition-all hover:border-amber-300 hover:bg-amber-100/50 cursor-pointer">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-amber-800">Suggested Follow-up</p>
              <p className="mt-1 text-sm text-amber-700">
                "If plants get food from soil, why can plants grow in water alone with sunlight?"
              </p>
            </div>
          </div>
        </div>

        <Button 
          variant="outline" 
          className="w-full justify-between border-red-200 text-red-700 hover:bg-red-100 hover:border-red-300 transition-all group active:scale-[0.98]"
        >
          <span>Address This Misconception</span>
          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  )
}
