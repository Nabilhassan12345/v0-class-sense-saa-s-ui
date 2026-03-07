"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const students = [
  { name: "Alice", status: "active", progress: 100 },
  { name: "Bob", status: "active", progress: 85 },
  { name: "Cara", status: "thinking", progress: 60 },
  { name: "Dev", status: "inactive", progress: 20 },
  { name: "Eva", status: "active", progress: 95 },
  { name: "Frank", status: "thinking", progress: 45 },
]

const statusColors = {
  active: "bg-green-500",
  thinking: "bg-yellow-500",
  inactive: "bg-slate-300",
}

export function ParticipationOverview() {
  const activeCount = students.filter((s) => s.status === "active").length
  const thinkingCount = students.filter((s) => s.status === "thinking").length
  const inactiveCount = students.filter((s) => s.status === "inactive").length

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-slate-900">
          Participation Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm text-slate-600">
              Active <span className="font-semibold text-slate-900">{activeCount}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <span className="text-sm text-slate-600">
              Thinking <span className="font-semibold text-slate-900">{thinkingCount}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="text-sm text-slate-600">
              Inactive <span className="font-semibold text-slate-900">{inactiveCount}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-2">
          {students.map((student) => (
            <div
              key={student.name}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-slate-100 bg-slate-50/50 p-2"
            >
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-700">
                  {student.name[0]}
                </div>
                <div
                  className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${statusColors[student.status as keyof typeof statusColors]}`}
                />
              </div>
              <span className="text-xs text-slate-600">{student.name}</span>
              <Progress
                value={student.progress}
                className="h-1 w-full"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
