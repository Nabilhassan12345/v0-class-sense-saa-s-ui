"use client"

import { useState, useEffect } from "react"
import { TrendingUp, ChevronDown, Users } from "lucide-react"
import { cn } from "@/lib/utils"

// Custom hook for animated counting
function useAnimatedNumber(target: number, duration: number = 800) {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    const steps = 30
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

interface Student {
  name: string
  initials: string
}

const studentData = {
  correct: [
    { name: "Emma S.", initials: "ES" },
    { name: "Liam J.", initials: "LJ" },
    { name: "Olivia M.", initials: "OM" },
    { name: "Noah K.", initials: "NK" },
    { name: "Lucas W.", initials: "LW" },
    { name: "Ava R.", initials: "AR" },
  ],
  partial: [
    { name: "Sophia L.", initials: "SL" },
    { name: "Mason B.", initials: "MB" },
    { name: "Isabella T.", initials: "IT" },
  ],
  misconception: [
    { name: "Ahmet Y.", initials: "AY" },
    { name: "Mehmet K.", initials: "MK" },
  ],
}

export function ClassUnderstandingCard() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  // Target percentages
  const correctPercent = useAnimatedNumber(63)
  const partialPercent = useAnimatedNumber(26)
  const misconceptionPercent = useAnimatedNumber(11)

  const sections = [
    {
      id: "correct",
      label: "Understood",
      percent: correctPercent,
      count: studentData.correct.length,
      students: studentData.correct,
      colors: {
        text: "text-[#166534]",
        bg: "bg-[#DCFCE7]",
        border: "border-[#bbf7d0]",
        bar: "bg-[#22c55e]",
        dot: "bg-[#22c55e]",
      }
    },
    {
      id: "partial",
      label: "Uncertain",
      percent: partialPercent,
      count: studentData.partial.length,
      students: studentData.partial,
      colors: {
        text: "text-[#92400E]",
        bg: "bg-[#FEF3C7]",
        border: "border-[#fde68a]",
        bar: "bg-[#f59e0b]",
        dot: "bg-[#f59e0b]",
      }
    },
    {
      id: "misconception",
      label: "Misconception",
      percent: misconceptionPercent,
      count: studentData.misconception.length,
      students: studentData.misconception,
      colors: {
        text: "text-[#991B1B]",
        bg: "bg-[#FEE2E2]",
        border: "border-[#fecaca]",
        bar: "bg-[#ef4444]",
        dot: "bg-[#ef4444]",
      }
    },
  ]

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#E5E7EB]">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#111827]">Class Understanding</h2>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#DCFCE7]">
            <TrendingUp className="h-3.5 w-3.5 text-[#166534]" />
            <span className="text-xs font-semibold text-[#166534]">+12%</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-5 py-4">
        <div className="h-3 w-full flex rounded-full overflow-hidden bg-[#F8FAFC]">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={cn(
                "transition-all duration-700 ease-out cursor-pointer",
                section.colors.bar,
                hoveredSection && hoveredSection !== section.id && "opacity-40",
                hoveredSection === section.id && "brightness-110"
              )}
              style={{ width: `${section.percent}%` }}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
            />
          ))}
        </div>
      </div>

      {/* Section Buttons */}
      <div className="px-5 pb-4 space-y-2">
        {sections.map((section) => {
          const isExpanded = expandedSection === section.id
          const isHovered = hoveredSection === section.id
          
          return (
            <div key={section.id}>
              <button
                onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200",
                  isExpanded || isHovered
                    ? `${section.colors.bg} ${section.colors.border}`
                    : "border-[#E5E7EB] bg-white hover:bg-[#F8FAFC]"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn("h-3 w-3 rounded-full", section.colors.dot)} />
                  <span className="text-sm font-medium text-[#111827]">{section.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className={cn("text-lg font-semibold tabular-nums", section.colors.text)}>
                      {section.percent}%
                    </span>
                    <span className="text-xs text-[#6B7280]">
                      ({section.count})
                    </span>
                  </div>
                  <ChevronDown className={cn(
                    "h-4 w-4 text-[#6B7280] transition-transform duration-200",
                    isExpanded && "rotate-180"
                  )} />
                </div>
              </button>

              {/* Expanded Student List */}
              <div className={cn(
                "grid transition-all duration-300 ease-out",
                isExpanded ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className={cn(
                    "p-3 rounded-lg",
                    section.colors.bg,
                    section.colors.border,
                    "border"
                  )}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Users className="h-3.5 w-3.5 text-[#6B7280]" />
                      <span className="text-xs font-medium text-[#6B7280]">Students</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {section.students.map((student, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white border border-[#E5E7EB] transition-all duration-150 hover:shadow-sm"
                        >
                          <div className={cn(
                            "h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-semibold text-white",
                            section.colors.bar
                          )}>
                            {student.initials}
                          </div>
                          <span className="text-xs font-medium text-[#111827]">{student.name}</span>
                        </div>
                      ))}
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
