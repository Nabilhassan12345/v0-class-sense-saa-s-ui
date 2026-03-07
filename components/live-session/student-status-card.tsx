"use client"

import { useState, useEffect } from "react"
import { Users, ChevronDown, AlertCircle, CheckCircle2, Loader2, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

function useAnimatedNumber(target: number, duration: number = 800) {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    const steps = 25
    const interval = duration / steps
    let step = 0
    
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * easeOut))
      
      if (step >= steps) {
        clearInterval(timer)
        setValue(target)
      }
    }, interval)
    
    return () => clearInterval(timer)
  }, [target, duration])
  
  return value
}

const statusData = {
  answered: {
    count: 15,
    students: [
      { name: "Emma S.", initials: "ES" },
      { name: "Liam J.", initials: "LJ" },
      { name: "Olivia M.", initials: "OM" },
      { name: "Noah K.", initials: "NK" },
      { name: "Lucas W.", initials: "LW" },
    ]
  },
  typing: {
    count: 3,
    students: [
      { name: "Sophia L.", initials: "SL" },
      { name: "Mason B.", initials: "MB" },
      { name: "Isabella T.", initials: "IT" },
    ]
  },
  inactive: {
    count: 2,
    students: [
      { name: "Ahmet Y.", initials: "AY" },
      { name: "James W.", initials: "JW" },
    ]
  },
}

export function StudentStatusCard() {
  const [expandedStatus, setExpandedStatus] = useState<string | null>(null)
  const [hoveredStatus, setHoveredStatus] = useState<string | null>(null)

  const total = statusData.answered.count + statusData.typing.count + statusData.inactive.count
  
  const answeredCount = useAnimatedNumber(statusData.answered.count)
  const typingCount = useAnimatedNumber(statusData.typing.count)
  const inactiveCount = useAnimatedNumber(statusData.inactive.count)

  const statuses = [
    {
      id: "answered",
      label: "Answered",
      count: answeredCount,
      actualCount: statusData.answered.count,
      students: statusData.answered.students,
      icon: CheckCircle2,
      colors: {
        gradient: "from-emerald-100 to-emerald-200",
        border: "border-emerald-300",
        text: "text-emerald-700",
        bar: "bg-gradient-to-r from-emerald-400 to-emerald-500",
        badge: "bg-emerald-500",
        glow: "shadow-emerald-200",
        iconBg: "from-emerald-500 to-teal-500",
      }
    },
    {
      id: "typing",
      label: "Typing...",
      count: typingCount,
      actualCount: statusData.typing.count,
      students: statusData.typing.students,
      icon: Loader2,
      colors: {
        gradient: "from-sky-100 to-sky-200",
        border: "border-sky-300",
        text: "text-sky-700",
        bar: "bg-gradient-to-r from-sky-400 to-sky-500",
        badge: "bg-sky-500",
        glow: "shadow-sky-200",
        iconBg: "from-sky-500 to-blue-500",
      }
    },
    {
      id: "inactive",
      label: "No Response",
      count: inactiveCount,
      actualCount: statusData.inactive.count,
      students: statusData.inactive.students,
      icon: Clock,
      colors: {
        gradient: "from-slate-100 to-slate-200",
        border: "border-slate-300",
        text: "text-slate-600",
        bar: "bg-gradient-to-r from-slate-400 to-slate-500",
        badge: "bg-slate-500",
        glow: "shadow-slate-200",
        iconBg: "from-slate-500 to-slate-600",
      }
    },
  ]

  return (
    <div className="card-sky rounded-2xl shadow-lg shadow-sky-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-sky-200/50 bg-white/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 shadow-lg shadow-sky-200">
              <Users className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900">Student Activity</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-100 to-sky-200 border border-sky-300">
            <span className="text-base font-bold text-sky-700">{total}</span>
            <span className="text-sm text-sky-600">students</span>
          </div>
        </div>
      </div>

      {/* Segmented Progress Bar */}
      <div className="px-6 py-4 bg-white/30">
        <div className="h-4 w-full flex rounded-full overflow-hidden bg-slate-100 shadow-inner">
          {statuses.map((status) => (
            <div
              key={status.id}
              className={cn(
                "transition-all duration-700 ease-out cursor-pointer relative",
                status.colors.bar,
                hoveredStatus && hoveredStatus !== status.id && "opacity-40",
                hoveredStatus === status.id && "brightness-110"
              )}
              style={{ width: `${(status.actualCount / total) * 100}%` }}
              onMouseEnter={() => setHoveredStatus(status.id)}
              onMouseLeave={() => setHoveredStatus(null)}
              onClick={() => setExpandedStatus(expandedStatus === status.id ? null : status.id)}
            >
              {hoveredStatus === status.id && (
                <div className="absolute inset-0 shimmer" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Status Rows */}
      <div className="px-6 pb-5 pt-2 space-y-3">
        {statuses.map((status) => {
          const isExpanded = expandedStatus === status.id
          const isHovered = hoveredStatus === status.id
          const Icon = status.icon
          
          return (
            <div key={status.id}>
              <button
                onClick={() => setExpandedStatus(isExpanded ? null : status.id)}
                onMouseEnter={() => setHoveredStatus(status.id)}
                onMouseLeave={() => setHoveredStatus(null)}
                className={cn(
                  "w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 transition-all duration-300",
                  isExpanded || isHovered
                    ? `bg-gradient-to-r ${status.colors.gradient} ${status.colors.border} shadow-lg ${status.colors.glow}`
                    : "border-white/50 bg-white/60 hover:bg-white/80"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br shadow-md transition-all duration-300",
                    status.colors.iconBg,
                    isHovered && "scale-110"
                  )}>
                    <Icon className={cn(
                      "h-4 w-4 text-white",
                      status.id === "typing" && "animate-spin"
                    )} />
                  </div>
                  <span className="text-lg font-semibold text-slate-800">{status.label}</span>
                  {status.id === "inactive" && status.count > 0 && (
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-amber-100 border border-amber-200">
                      <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                      <span className="text-xs font-semibold text-amber-700">Needs attention</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className={cn("text-2xl font-bold tabular-nums", status.colors.text)}>
                    {status.count}
                  </span>
                  <ChevronDown className={cn(
                    "h-5 w-5 text-slate-400 transition-transform duration-300",
                    isExpanded && "rotate-180"
                  )} />
                </div>
              </button>

              {/* Expanded List */}
              <div className={cn(
                "grid transition-all duration-400 ease-out",
                isExpanded ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className={cn(
                    "p-4 rounded-xl bg-gradient-to-r border-2",
                    status.colors.gradient,
                    status.colors.border
                  )}>
                    <div className="flex flex-wrap gap-2">
                      {status.students.map((student, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 border border-white shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105"
                        >
                          <div className={cn(
                            "h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm",
                            status.colors.badge
                          )}>
                            {student.initials}
                          </div>
                          <span className="text-sm font-medium text-slate-700">{student.name}</span>
                        </div>
                      ))}
                      {status.actualCount > status.students.length && (
                        <div className="flex items-center px-3 py-2 rounded-lg bg-white/60 border border-white/50">
                          <span className={cn("text-sm font-semibold", status.colors.text)}>
                            +{status.actualCount - status.students.length} more
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
