"use client"

import { useState, useEffect } from "react"
import { TrendingUp, ChevronDown, Users, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

// Custom hook for animated counting
function useAnimatedNumber(target: number, duration: number = 1000) {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    const steps = 40
    const interval = duration / steps
    let step = 0
    
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 4)
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
  understood: [
    { name: "Emma S.", initials: "ES" },
    { name: "Liam J.", initials: "LJ" },
    { name: "Olivia M.", initials: "OM" },
    { name: "Noah K.", initials: "NK" },
    { name: "Lucas W.", initials: "LW" },
    { name: "Ava R.", initials: "AR" },
    { name: "Sophia L.", initials: "SL" },
    { name: "Mason B.", initials: "MB" },
    { name: "Isabella T.", initials: "IT" },
    { name: "Ethan C.", initials: "EC" },
    { name: "Charlotte D.", initials: "CD" },
    { name: "Aiden F.", initials: "AF" },
  ],
  uncertain: [
    { name: "Mia H.", initials: "MH" },
    { name: "James P.", initials: "JP" },
    { name: "Harper G.", initials: "HG" },
    { name: "Benjamin V.", initials: "BV" },
    { name: "Amelia N.", initials: "AN" },
  ],
  confused: [
    { name: "Ahmet Y.", initials: "AY" },
    { name: "Mehmet K.", initials: "MK" },
    { name: "Zeynep A.", initials: "ZA" },
  ],
}

export function ClassUnderstandingCard() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  // Animated percentages
  const understoodPercent = useAnimatedNumber(63)
  const uncertainPercent = useAnimatedNumber(26)
  const confusedPercent = useAnimatedNumber(11)

  const sections = [
    {
      id: "understood",
      label: "Understood",
      percent: understoodPercent,
      count: studentData.understood.length,
      students: studentData.understood,
      icon: "check",
      colors: {
        gradient: "from-emerald-100 to-emerald-200",
        border: "border-emerald-300",
        text: "text-emerald-700",
        bar: "bg-gradient-to-r from-emerald-400 to-emerald-500",
        badge: "bg-emerald-500",
        glow: "shadow-emerald-200",
      }
    },
    {
      id: "uncertain",
      label: "Uncertain",
      percent: uncertainPercent,
      count: studentData.uncertain.length,
      students: studentData.uncertain,
      icon: "question",
      colors: {
        gradient: "from-amber-100 to-amber-200",
        border: "border-amber-300",
        text: "text-amber-700",
        bar: "bg-gradient-to-r from-amber-400 to-amber-500",
        badge: "bg-amber-500",
        glow: "shadow-amber-200",
      }
    },
    {
      id: "confused",
      label: "Confused",
      percent: confusedPercent,
      count: studentData.confused.length,
      students: studentData.confused,
      icon: "alert",
      colors: {
        gradient: "from-rose-100 to-rose-200",
        border: "border-rose-300",
        text: "text-rose-700",
        bar: "bg-gradient-to-r from-rose-400 to-rose-500",
        badge: "bg-rose-500",
        glow: "shadow-rose-200",
      }
    },
  ]

  return (
    <div className="card-emerald rounded-2xl shadow-lg shadow-emerald-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-emerald-200/50 bg-white/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-200">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900">Class Understanding</h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-100 to-emerald-200 border border-emerald-300">
            <TrendingUp className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700">+12%</span>
          </div>
        </div>
      </div>

      {/* Big Percentage Display */}
      <div className="px-6 py-6 bg-white/30 text-center">
        <div className="text-6xl lg:text-7xl font-black text-emerald-600 tabular-nums">
          {understoodPercent}%
        </div>
        <p className="text-lg text-slate-600 font-medium mt-1">of class understands</p>
      </div>

      {/* Segmented Progress Bar */}
      <div className="px-6 py-4 bg-white/20">
        <div className="h-5 w-full flex rounded-full overflow-hidden bg-slate-100 shadow-inner">
          {sections.map((section) => (
            <div
              key={section.id}
              className={cn(
                "transition-all duration-700 ease-out cursor-pointer relative",
                section.colors.bar,
                hoveredSection && hoveredSection !== section.id && "opacity-40",
                hoveredSection === section.id && "brightness-110"
              )}
              style={{ width: `${section.percent}%` }}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
            >
              {hoveredSection === section.id && (
                <div className="absolute inset-0 shimmer" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section Buttons */}
      <div className="px-6 pb-5 pt-3 space-y-3">
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
                  "w-full flex items-center justify-between px-5 py-4 rounded-xl border-2 transition-all duration-300",
                  isExpanded || isHovered
                    ? `bg-gradient-to-r ${section.colors.gradient} ${section.colors.border} shadow-lg ${section.colors.glow}`
                    : "border-white/50 bg-white/60 hover:bg-white/80"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "h-4 w-4 rounded-full transition-all duration-300",
                    section.colors.badge,
                    isHovered && "scale-125"
                  )} />
                  <span className="text-lg font-semibold text-slate-800">{section.label}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className={cn("text-2xl lg:text-3xl font-bold tabular-nums", section.colors.text)}>
                      {section.percent}%
                    </span>
                    <span className="text-base text-slate-500 font-medium">
                      ({section.count})
                    </span>
                  </div>
                  <ChevronDown className={cn(
                    "h-5 w-5 text-slate-400 transition-transform duration-300",
                    isExpanded && "rotate-180"
                  )} />
                </div>
              </button>

              {/* Expanded Student List */}
              <div className={cn(
                "grid transition-all duration-400 ease-out",
                isExpanded ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <div className={cn(
                    "p-4 rounded-xl bg-gradient-to-r",
                    section.colors.gradient,
                    section.colors.border,
                    "border-2"
                  )}>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-4 w-4 text-slate-600" />
                      <span className="text-sm font-semibold text-slate-600">Students</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {section.students.slice(0, 8).map((student, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/80 border border-white shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105"
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          <div className={cn(
                            "h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm",
                            section.colors.badge
                          )}>
                            {student.initials}
                          </div>
                          <span className="text-sm font-medium text-slate-700">{student.name}</span>
                        </div>
                      ))}
                      {section.students.length > 8 && (
                        <div className="flex items-center px-3 py-2 rounded-lg bg-white/60 border border-white/50">
                          <span className={cn("text-sm font-semibold", section.colors.text)}>
                            +{section.students.length - 8} more
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
