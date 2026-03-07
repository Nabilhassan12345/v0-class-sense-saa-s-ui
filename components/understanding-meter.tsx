"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, Eye, ChevronDown, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface Student {
  name: string
  avatar: string
  reasoning?: string
}

interface StudentGroup {
  status: "understanding" | "uncertain" | "confused"
  students: Student[]
}

// Custom hook for animated counting
function useAnimatedNumber(target: number, duration: number = 1200) {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    const steps = 60
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

export function UnderstandingMeter() {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null)
  const [isHovering, setIsHovering] = useState<string | null>(null)
  const [pulseActive, setPulseActive] = useState(true)

  // Target values
  const targetUnderstanding = 64
  const targetUncertain = 25
  const targetConfused = 11
  const trend = 12

  // Animated values
  const understanding = useAnimatedNumber(targetUnderstanding)
  const uncertain = useAnimatedNumber(targetUncertain)
  const confused = useAnimatedNumber(targetConfused)

  // Calculate the angle for the gauge needle (0-180 degrees)
  const needleAngle = 180 - (understanding / 100) * 180

  // Simulate live updates
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseActive(prev => !prev)
    }, 2000)
    return () => clearInterval(pulseInterval)
  }, [])

  // Mock student data for each segment
  const studentGroups: StudentGroup[] = [
    {
      status: "understanding",
      students: [
        { name: "Emma S.", avatar: "ES", reasoning: "Photosynthesis creates glucose" },
        { name: "Liam J.", avatar: "LJ", reasoning: "Plants produce food from sunlight" },
        { name: "Olivia M.", avatar: "OM", reasoning: "Glucose is made in leaves" },
        { name: "Noah K.", avatar: "NK", reasoning: "CO2 + water + light = glucose" },
        { name: "Lucas W.", avatar: "LW", reasoning: "Chlorophyll captures light energy" },
        { name: "Ava R.", avatar: "AR", reasoning: "Plants are producers, make own food" },
      ],
    },
    {
      status: "uncertain",
      students: [
        { name: "Sophia L.", avatar: "SL", reasoning: "Plants need minerals from soil" },
        { name: "Mason B.", avatar: "MB", reasoning: "Not sure about the process" },
        { name: "Isabella T.", avatar: "IT", reasoning: "Light helps but how exactly?" },
      ],
    },
    {
      status: "confused",
      students: [
        { name: "Ahmet Y.", avatar: "AY", reasoning: "Plants get food from soil" },
        { name: "Mehmet K.", avatar: "MK", reasoning: "Roots absorb plant food" },
      ],
    },
  ]

  const segments = [
    { 
      id: "understanding", 
      label: "Understanding", 
      value: understanding, 
      count: studentGroups.find(g => g.status === "understanding")?.students.length || 0,
      color: {
        bg: "bg-emerald-500",
        light: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-700",
        ring: "ring-emerald-200",
        gradient: "from-emerald-400 to-emerald-500"
      }
    },
    { 
      id: "uncertain", 
      label: "Uncertain", 
      value: uncertain, 
      count: studentGroups.find(g => g.status === "uncertain")?.students.length || 0,
      color: {
        bg: "bg-amber-500",
        light: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-700",
        ring: "ring-amber-200",
        gradient: "from-amber-400 to-amber-500"
      }
    },
    { 
      id: "confused", 
      label: "Confused", 
      value: confused, 
      count: studentGroups.find(g => g.status === "confused")?.students.length || 0,
      color: {
        bg: "bg-red-500",
        light: "bg-red-50",
        border: "border-red-200",
        text: "text-red-700",
        ring: "ring-red-200",
        gradient: "from-red-400 to-red-500"
      }
    },
  ]

  const handleSegmentClick = useCallback((segmentId: string) => {
    setSelectedSegment(prev => prev === segmentId ? null : segmentId)
  }, [])

  return (
    <Card className="border-slate-200 bg-white shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CardTitle className="text-base font-semibold text-slate-900">
              Understanding Meter
            </CardTitle>
            <div className={cn(
              "flex items-center gap-1.5 text-xs text-slate-500 px-2 py-1 rounded-full bg-slate-50 transition-all duration-300",
              pulseActive && "bg-green-50 text-green-600"
            )}>
              <span className={cn(
                "h-1.5 w-1.5 rounded-full transition-all duration-300",
                pulseActive ? "bg-green-500 animate-pulse" : "bg-slate-400"
              )} />
              <Users className="h-3 w-3" />
              <span className="font-medium">20 students</span>
            </div>
          </div>
          <div className={cn(
            "flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-500",
            trend >= 0 
              ? "text-emerald-700 bg-emerald-50 border border-emerald-200" 
              : "text-red-700 bg-red-50 border border-red-200"
          )}>
            {trend >= 0 ? (
              <TrendingUp className="h-3.5 w-3.5 animate-bounce" style={{ animationDuration: '2s' }} />
            ) : (
              <TrendingDown className="h-3.5 w-3.5" />
            )}
            <span>{trend >= 0 ? "+" : ""}{trend}%</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-5">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Gauge Chart */}
          <div className="relative h-44 w-56 flex-shrink-0">
            <svg viewBox="0 0 120 80" className="h-full w-full">
              <defs>
                {/* Gradients */}
                <linearGradient id="confusedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fca5a5" />
                  <stop offset="100%" stopColor="#f87171" />
                </linearGradient>
                <linearGradient id="uncertainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fcd34d" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
                <linearGradient id="understandingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6ee7b7" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
                {/* Shadow filter */}
                <filter id="needleShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3"/>
                </filter>
                {/* Glow filter */}
                <filter id="segmentGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background arc */}
              <path
                d="M 10 70 A 50 50 0 0 1 110 70"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="14"
                strokeLinecap="round"
              />

              {/* Confused segment (0-33%) - Red */}
              <path
                d="M 10 70 A 50 50 0 0 1 43.4 26.34"
                fill="none"
                stroke="url(#confusedGradient)"
                strokeWidth="14"
                strokeLinecap="round"
                className="cursor-pointer transition-all duration-300"
                style={{ 
                  opacity: (selectedSegment && selectedSegment !== "confused") || (isHovering && isHovering !== "confused") ? 0.3 : 1,
                  filter: selectedSegment === "confused" || isHovering === "confused" ? "url(#segmentGlow)" : "none"
                }}
                onMouseEnter={() => setIsHovering("confused")}
                onMouseLeave={() => setIsHovering(null)}
                onClick={() => handleSegmentClick("confused")}
              />
              
              {/* Uncertain segment (33-66%) - Yellow */}
              <path
                d="M 43.4 26.34 A 50 50 0 0 1 76.6 26.34"
                fill="none"
                stroke="url(#uncertainGradient)"
                strokeWidth="14"
                className="cursor-pointer transition-all duration-300"
                style={{ 
                  opacity: (selectedSegment && selectedSegment !== "uncertain") || (isHovering && isHovering !== "uncertain") ? 0.3 : 1,
                  filter: selectedSegment === "uncertain" || isHovering === "uncertain" ? "url(#segmentGlow)" : "none"
                }}
                onMouseEnter={() => setIsHovering("uncertain")}
                onMouseLeave={() => setIsHovering(null)}
                onClick={() => handleSegmentClick("uncertain")}
              />
              
              {/* Understanding segment (66-100%) - Green */}
              <path
                d="M 76.6 26.34 A 50 50 0 0 1 110 70"
                fill="none"
                stroke="url(#understandingGradient)"
                strokeWidth="14"
                strokeLinecap="round"
                className="cursor-pointer transition-all duration-300"
                style={{ 
                  opacity: (selectedSegment && selectedSegment !== "understanding") || (isHovering && isHovering !== "understanding") ? 0.3 : 1,
                  filter: selectedSegment === "understanding" || isHovering === "understanding" ? "url(#segmentGlow)" : "none"
                }}
                onMouseEnter={() => setIsHovering("understanding")}
                onMouseLeave={() => setIsHovering(null)}
                onClick={() => handleSegmentClick("understanding")}
              />
              
              {/* Tick marks */}
              {[0, 25, 50, 75, 100].map((tick) => {
                const angle = (180 - (tick / 100) * 180) * (Math.PI / 180)
                const innerR = 30
                const outerR = 34
                return (
                  <line
                    key={tick}
                    x1={60 + innerR * Math.cos(angle)}
                    y1={70 - innerR * Math.sin(angle)}
                    x2={60 + outerR * Math.cos(angle)}
                    y2={70 - outerR * Math.sin(angle)}
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )
              })}

              {/* Animated Needle */}
              <g 
                filter="url(#needleShadow)"
                style={{ 
                  transform: `rotate(${needleAngle}deg)`,
                  transformOrigin: '60px 70px',
                  transition: 'transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <polygon
                  points="57,70 60,22 63,70"
                  fill="#1e3a5f"
                />
                <circle cx="60" cy="70" r="7" fill="#1e3a5f" />
                <circle cx="60" cy="70" r="4" fill="white" />
                <circle cx="60" cy="70" r="2" fill="#1e3a5f" />
              </g>
            </svg>
            
            {/* Percentage Display */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
              <div className={cn(
                "flex items-center gap-1 transition-all duration-500",
                understanding >= 66 ? "text-emerald-600" : understanding >= 33 ? "text-amber-600" : "text-red-600"
              )}>
                <span className="text-4xl font-bold tabular-nums tracking-tight">
                  {understanding}
                </span>
                <span className="text-2xl font-bold">%</span>
              </div>
            </div>
          </div>

          {/* Interactive Legend */}
          <div className="flex flex-col gap-2 flex-1 w-full">
            {segments.map((segment) => {
              const isSelected = selectedSegment === segment.id
              const isHovered = isHovering === segment.id
              
              return (
                <button
                  key={segment.id}
                  onClick={() => handleSegmentClick(segment.id)}
                  onMouseEnter={() => setIsHovering(segment.id)}
                  onMouseLeave={() => setIsHovering(null)}
                  className={cn(
                    "relative flex items-center justify-between gap-3 rounded-xl p-3.5 transition-all duration-300 border-2 overflow-hidden",
                    isSelected
                      ? `${segment.color.light} ${segment.color.border} shadow-md`
                      : isHovered
                      ? `bg-slate-50 border-slate-200 shadow-sm`
                      : "border-transparent hover:bg-slate-50/50"
                  )}
                >
                  {/* Animated background bar */}
                  <div 
                    className={cn(
                      "absolute inset-y-0 left-0 transition-all duration-700 ease-out opacity-20",
                      segment.color.bg
                    )}
                    style={{ width: `${segment.value}%` }}
                  />
                  
                  <div className="relative flex items-center gap-3">
                    <div className={cn(
                      "h-4 w-4 rounded-full transition-all duration-300 shadow-sm",
                      segment.color.bg,
                      (isSelected || isHovered) && "scale-125 ring-4 ring-offset-1",
                      segment.color.ring
                    )} />
                    <div className="text-left">
                      <div className="flex items-baseline gap-2">
                        <span className={cn(
                          "text-2xl font-bold tabular-nums transition-colors duration-300",
                          segment.color.text
                        )}>
                          {segment.value}%
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          ({segment.count} students)
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium">{segment.label}</p>
                    </div>
                  </div>
                  
                  <ChevronDown className={cn(
                    "relative h-4 w-4 text-slate-400 transition-all duration-300",
                    isSelected && "rotate-180",
                    segment.color.text
                  )} />
                </button>
              )
            })}
          </div>
        </div>

        {/* Expanded Student List */}
        <div className={cn(
          "grid transition-all duration-500 ease-out",
          selectedSegment ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
        )}>
          <div className="overflow-hidden">
            {selectedSegment && (
              <div className={cn(
                "p-4 rounded-xl border-2 animate-in slide-in-from-top-2 duration-300",
                selectedSegment === "understanding" && "bg-emerald-50/50 border-emerald-200",
                selectedSegment === "uncertain" && "bg-amber-50/50 border-amber-200",
                selectedSegment === "confused" && "bg-red-50/50 border-red-200"
              )}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      {selectedSegment === "understanding" ? "Students Who Understand" : 
                       selectedSegment === "uncertain" ? "Students Needing Support" : 
                       "Students With Misconceptions"}
                    </span>
                  </div>
                  {selectedSegment === "confused" && (
                    <span className="flex items-center gap-1 text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-full">
                      <Sparkles className="h-3 w-3" />
                      Needs attention
                    </span>
                  )}
                </div>
                
                <div className="space-y-2">
                  {studentGroups
                    .find((g) => g.status === selectedSegment)
                    ?.students.map((student, i) => (
                      <div
                        key={i}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer",
                          "hover:scale-[1.02] active:scale-[0.98]",
                          selectedSegment === "understanding" && "bg-white hover:bg-emerald-100/50 border border-emerald-100",
                          selectedSegment === "uncertain" && "bg-white hover:bg-amber-100/50 border border-amber-100",
                          selectedSegment === "confused" && "bg-white hover:bg-red-100/50 border border-red-100"
                        )}
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        <div className={cn(
                          "h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm",
                          selectedSegment === "understanding" && "bg-gradient-to-br from-emerald-400 to-emerald-600",
                          selectedSegment === "uncertain" && "bg-gradient-to-br from-amber-400 to-amber-600",
                          selectedSegment === "confused" && "bg-gradient-to-br from-red-400 to-red-600"
                        )}>
                          {student.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-900 text-sm">{student.name}</p>
                          {student.reasoning && (
                            <p className={cn(
                              "text-xs truncate",
                              selectedSegment === "understanding" && "text-emerald-600",
                              selectedSegment === "uncertain" && "text-amber-600",
                              selectedSegment === "confused" && "text-red-600"
                            )}>
                              "{student.reasoning}"
                            </p>
                          )}
                        </div>
                        <div className={cn(
                          "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                          selectedSegment === "understanding" && "bg-emerald-100 text-emerald-700",
                          selectedSegment === "uncertain" && "bg-amber-100 text-amber-700",
                          selectedSegment === "confused" && "bg-red-100 text-red-700"
                        )}>
                          {selectedSegment === "understanding" ? "Correct" : 
                           selectedSegment === "uncertain" ? "Partial" : 
                           "Misconception"}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
