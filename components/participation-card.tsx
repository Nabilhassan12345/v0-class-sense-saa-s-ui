"use client"

import { Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ParticipationCard() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-slate-900">
          Participation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
              <Users className="h-4 w-4 text-green-600" />
            </div>
            <div>
              <span className="text-lg font-bold text-green-600">16</span>
              <span className="ml-1 text-sm text-slate-600">Active</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
              <Users className="h-4 w-4 text-slate-400" />
            </div>
            <div>
              <span className="text-lg font-bold text-slate-400">Quiet</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
              <Users className="h-4 w-4 text-red-600" />
            </div>
            <div>
              <span className="text-lg font-bold text-red-600">2</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
