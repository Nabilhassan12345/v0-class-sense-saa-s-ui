"use client"

import { Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const participationData = {
  active: 16,
  thinking: 2,
  inactive: 2,
}

export function ParticipationCard() {
  const total = participationData.active + participationData.thinking + participationData.inactive

  return (
    <Card className="border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-slate-900">
            Participation
          </CardTitle>
          <span className="text-sm text-slate-500">{total} students</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status Indicators */}
        <div className="flex items-center justify-between gap-3">
          <button className="group flex-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-green-50 border-2 border-green-200 p-3 transition-all hover:bg-green-100 hover:border-green-300 hover:shadow-sm active:scale-[0.98]">
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-green-600" />
              <span className="text-xl font-bold text-green-700">{participationData.active}</span>
            </div>
            <span className="text-xs font-medium text-green-600">Active</span>
          </button>
          <button className="group flex-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-amber-50 border-2 border-amber-200 p-3 transition-all hover:bg-amber-100 hover:border-amber-300 hover:shadow-sm active:scale-[0.98]">
            <span className="text-xl font-bold text-amber-700">{participationData.thinking}</span>
            <span className="text-xs font-medium text-amber-600">Thinking</span>
          </button>
          <button className="group flex-1 flex flex-col items-center justify-center gap-1 rounded-xl bg-red-50 border-2 border-red-200 p-3 transition-all hover:bg-red-100 hover:border-red-300 hover:shadow-sm active:scale-[0.98]">
            <span className="text-xl font-bold text-red-700">{participationData.inactive}</span>
            <span className="text-xs font-medium text-red-600">Inactive</span>
          </button>
        </div>

        {/* Visual Bar */}
        <div className="space-y-2">
          <div className="flex h-3 w-full overflow-hidden rounded-full bg-slate-100">
            <div 
              className="bg-green-500 transition-all duration-700 ease-out"
              style={{ width: `${(participationData.active / total) * 100}%` }}
            />
            <div 
              className="bg-amber-500 transition-all duration-700 ease-out"
              style={{ width: `${(participationData.thinking / total) * 100}%` }}
            />
            <div 
              className="bg-red-500 transition-all duration-700 ease-out"
              style={{ width: `${(participationData.inactive / total) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-500">
            <span className="text-green-600 font-medium">{Math.round((participationData.active / total) * 100)}% engaged</span>
            <span className="text-red-600">{participationData.inactive} need attention</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
