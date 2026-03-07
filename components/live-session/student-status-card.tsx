"use client"

import { useState } from "react"
import { Users, ChevronDown, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const statusData = {
  answered: {
    count: 15,
    students: [
      { name: "Emma S.", initials: "ES" },
      { name: "Liam J.", initials: "LJ" },
      { name: "Olivia M.", initials: "OM" },
    ]
  },
  typing: {
    count: 3,
    students: [
      { name: "Sophia L.", initials: "SL" },
      { name: "Mason B.", initials: "MB" },
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

  const statuses = [
    {
      id: "answered",
      label: "Answered",
      count: statusData.answered.count,
      students: statusData.answered.students,
      colors: {
        text: "text-[#166534]",
        bg: "bg-[#DCFCE7]",
        border: "border-[#bbf7d0]",
        bar: "bg-[#22c55e]",
        badge: "bg-[#22c55e]",
      }
    },
    {
      id: "typing",
      label: "Typing...",
      count: statusData.typing.count,
      students: statusData.typing.students,
      colors: {
        text: "text-[#1e40af]",
        bg: "bg-[#dbeafe]",
        border: "border-[#93c5fd]",
        bar: "bg-[#2563EB]",
        badge: "bg-[#2563EB]",
      }
    },
    {
      id: "inactive",
      label: "No Response",
      count: statusData.inactive.count,
      students: statusData.inactive.students,
      colors: {
        text: "text-[#6B7280]",
        bg: "bg-[#F8FAFC]",
        border: "border-[#E5E7EB]",
        bar: "bg-[#9ca3af]",
        badge: "bg-[#9ca3af]",
      }
    },
  ]

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#E5E7EB]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#6B7280]" />
            <h2 className="text-base font-semibold text-[#111827]">Student Activity</h2>
          </div>
          <span className="text-sm text-[#6B7280]">{total} students</span>
        </div>
      </div>

      {/* Segmented Progress Bar */}
      <div className="px-5 py-4">
        <div className="h-2 w-full flex rounded-full overflow-hidden bg-[#F8FAFC]">
          {statuses.map((status) => (
            <div
              key={status.id}
              className={cn(
                "transition-all duration-500 ease-out cursor-pointer",
                status.colors.bar,
                hoveredStatus && hoveredStatus !== status.id && "opacity-40"
              )}
              style={{ width: `${(status.count / total) * 100}%` }}
              onMouseEnter={() => setHoveredStatus(status.id)}
              onMouseLeave={() => setHoveredStatus(null)}
              onClick={() => setExpandedStatus(expandedStatus === status.id ? null : status.id)}
            />
          ))}
        </div>
      </div>

      {/* Status Rows */}
      <div className="px-5 pb-4 space-y-2">
        {statuses.map((status) => {
          const isExpanded = expandedStatus === status.id
          const isHovered = hoveredStatus === status.id
          
          return (
            <div key={status.id}>
              <button
                onClick={() => setExpandedStatus(isExpanded ? null : status.id)}
                onMouseEnter={() => setHoveredStatus(status.id)}
                onMouseLeave={() => setHoveredStatus(null)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2.5 rounded-lg border transition-all duration-150",
                  isExpanded || isHovered
                    ? `${status.colors.bg} ${status.colors.border}`
                    : "border-transparent hover:bg-[#F8FAFC]"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <div className={cn("h-2.5 w-2.5 rounded-full", status.colors.badge)} />
                  <span className="text-sm font-medium text-[#111827]">{status.label}</span>
                  {status.id === "inactive" && status.count > 0 && (
                    <AlertCircle className="h-3.5 w-3.5 text-[#f59e0b]" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className={cn("text-sm font-semibold tabular-nums", status.colors.text)}>
                    {status.count}
                  </span>
                  <ChevronDown className={cn(
                    "h-3.5 w-3.5 text-[#6B7280] transition-transform duration-150",
                    isExpanded && "rotate-180"
                  )} />
                </div>
              </button>

              {/* Expanded List */}
              <div className={cn(
                "grid transition-all duration-200 ease-out",
                isExpanded ? "grid-rows-[1fr] opacity-100 mt-1.5" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className={cn(
                    "px-3 py-2.5 rounded-lg",
                    status.colors.bg,
                    status.colors.border,
                    "border"
                  )}>
                    <div className="flex flex-wrap gap-1.5">
                      {status.students.map((student, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white border border-[#E5E7EB] text-xs"
                        >
                          <div className={cn(
                            "h-5 w-5 rounded-full flex items-center justify-center text-[9px] font-semibold text-white",
                            status.colors.badge
                          )}>
                            {student.initials}
                          </div>
                          <span className="font-medium text-[#111827]">{student.name}</span>
                        </div>
                      ))}
                      {status.count > status.students.length && (
                        <span className={cn("text-xs font-medium px-2 py-1", status.colors.text)}>
                          +{status.count - status.students.length} more
                        </span>
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
