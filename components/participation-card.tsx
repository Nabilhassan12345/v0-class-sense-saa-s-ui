"use client"

import { useState, useEffect } from "react"
import { Users, Eye, ChevronDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const participationData = {
  active: 16,
  thinking: 2,
  inactive: 2,
}

const students = {
  active: [
    { name: "Emma S.", avatar: "ES" },
    { name: "Liam J.", avatar: "LJ" },
    { name: "Olivia M.", avatar: "OM" },
    { name: "Noah K.", avatar: "NK" },
  ],
  thinking: [
    { name: "Sophia L.", avatar: "SL" },
    { name: "Mason B.", avatar: "MB" },
  ],
  inactive: [
    { name: "Ahmet Y.", avatar: "AY" },
    { name: "James W.", avatar: "JW" },
  ],
}

export function ParticipationCard() {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [hoveredStatus, setHoveredStatus] = useState<string | null>(null)
  const [animatedValues, setAnimatedValues] = useState({ active: 0, thinking: 0, inactive: 0 })

  const total = participationData.active + participationData.thinking + participationData.inactive

  // Animate values on mount
  useEffect(() => {
    const duration = 1000
    const steps = 40
    const interval = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      setAnimatedValues({
        active: Math.round(participationData.active * easeOut),
        thinking: Math.round(participationData.thinking * easeOut),
        inactive: Math.round(participationData.inactive * easeOut),
      })

      if (step >= steps) {
        clearInterval(timer)
        setAnimatedValues(participationData)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  const statusConfig = [
    { 
      key: "active", 
      label: "Active", 
      value: animatedValues.active,
      color: { 
        bg: "bg-emerald-50", 
        border: "border-emerald-200", 
        hoverBorder: "hover:border-emerald-300",
        text: "text-emerald-700",
        light: "text-emerald-600",
        bar: "bg-emerald-500",
        gradient: "from-emerald-400 to-emerald-600"
      }
    },
    { 
      key: "thinking", 
      label: "Thinking", 
      value: animatedValues.thinking,
      color: { 
        bg: "bg-amber-50", 
        border: "border-amber-200", 
        hoverBorder: "hover:border-amber-300",
        text: "text-amber-700",
        light: "text-amber-600",
        bar: "bg-amber-500",
        gradient: "from-amber-400 to-amber-600"
      }
    },
    { 
      key: "inactive", 
      label: "Inactive", 
      value: animatedValues.inactive,
      color: { 
        bg: "bg-red-50", 
        border: "border-red-200", 
        hoverBorder: "hover:border-red-300",
        text: "text-red-700",
        light: "text-red-600",
        bar: "bg-red-500",
        gradient: "from-red-400 to-red-600"
      }
    },
  ]

  return (
    <Card className="border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-slate-900 flex items-center gap-2">
            <Users className="h-4 w-4 text-slate-500" />
            Participation
          </CardTitle>
          <span className="text-sm font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            {total} students
          </span>
        </div>
      </CardHeader>
      
      <CardContent className="pt-5 space-y-4">
        {/* Status Indicators */}
        <div className="flex items-stretch gap-3">
          {statusConfig.map((status) => {
            const isSelected = selectedStatus === status.key
            const isHovered = hoveredStatus === status.key
            
            return (
              <button 
                key={status.key}
                onClick={() => setSelectedStatus(isSelected ? null : status.key)}
                onMouseEnter={() => setHoveredStatus(status.key)}
                onMouseLeave={() => setHoveredStatus(null)}
                className={cn(
                  "group flex-1 flex flex-col items-center justify-center gap-1.5 rounded-xl border-2 p-4 transition-all duration-300",
                  status.color.bg,
                  status.color.border,
                  status.color.hoverBorder,
                  "hover:shadow-md active:scale-[0.97]",
                  isSelected && "shadow-lg ring-2 ring-offset-1",
                  isSelected && status.key === "active" && "ring-emerald-300",
                  isSelected && status.key === "thinking" && "ring-amber-300",
                  isSelected && status.key === "inactive" && "ring-red-300",
                  (isSelected || isHovered) && "-translate-y-0.5"
                )}
              >
                <span className={cn(
                  "text-3xl font-bold tabular-nums transition-transform duration-300",
                  status.color.text,
                  (isSelected || isHovered) && "scale-110"
                )}>
                  {status.value}
                </span>
                <span className={cn("text-xs font-semibold", status.color.light)}>
                  {status.label}
                </span>
                <ChevronDown className={cn(
                  "h-3 w-3 transition-all duration-300",
                  status.color.light,
                  isSelected && "rotate-180"
                )} />
              </button>
            )
          })}
        </div>

        {/* Visual Bar */}
        <div className="space-y-2">
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-slate-100 shadow-inner">
            {statusConfig.map((status, index) => (
              <div 
                key={status.key}
                className={cn(
                  "transition-all duration-700 ease-out relative",
                  status.color.bar,
                  (selectedStatus === status.key || hoveredStatus === status.key) && "brightness-110",
                  index === 0 && "rounded-l-full",
                  index === statusConfig.length - 1 && "rounded-r-full"
                )}
                style={{ 
                  width: `${(status.value / total) * 100}%`,
                  opacity: selectedStatus && selectedStatus !== status.key ? 0.4 : 1
                }}
                onMouseEnter={() => setHoveredStatus(status.key)}
                onMouseLeave={() => setHoveredStatus(null)}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs font-medium">
            <span className="text-emerald-600">
              {Math.round((animatedValues.active / total) * 100)}% engaged
            </span>
            {animatedValues.inactive > 0 && (
              <span className="text-red-600 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                {animatedValues.inactive} need attention
              </span>
            )}
          </div>
        </div>

        {/* Expanded Student List */}
        <div className={cn(
          "grid transition-all duration-500 ease-out",
          selectedStatus ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}>
          <div className="overflow-hidden">
            {selectedStatus && (
              <div className={cn(
                "p-4 rounded-xl border-2 animate-in slide-in-from-top-2 duration-300",
                selectedStatus === "active" && "bg-emerald-50/50 border-emerald-200",
                selectedStatus === "thinking" && "bg-amber-50/50 border-amber-200",
                selectedStatus === "inactive" && "bg-red-50/50 border-red-200"
              )}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      {selectedStatus === "active" ? "Active Students" : 
                       selectedStatus === "thinking" ? "Students Thinking" : 
                       "Inactive Students"}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {students[selectedStatus as keyof typeof students].map((student, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200",
                        "hover:scale-105 cursor-pointer",
                        selectedStatus === "active" && "bg-emerald-100 text-emerald-800",
                        selectedStatus === "thinking" && "bg-amber-100 text-amber-800",
                        selectedStatus === "inactive" && "bg-red-100 text-red-800"
                      )}
                    >
                      <div className={cn(
                        "h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white bg-gradient-to-br",
                        selectedStatus === "active" && "from-emerald-400 to-emerald-600",
                        selectedStatus === "thinking" && "from-amber-400 to-amber-600",
                        selectedStatus === "inactive" && "from-red-400 to-red-600"
                      )}>
                        {student.avatar}
                      </div>
                      <span className="text-sm font-medium">{student.name}</span>
                    </div>
                  ))}
                  {selectedStatus === "active" && (
                    <div className="flex items-center gap-1 px-3 py-2 rounded-full text-sm text-emerald-600 bg-emerald-100/50">
                      +{participationData.active - students.active.length} more
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
