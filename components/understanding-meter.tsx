"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, Eye, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface StudentGroup {
  status: "understanding" | "uncertain" | "confused"
  students: { name: string; avatar: string }[]
}

export function UnderstandingMeter() {
  const [understanding, setUnderstanding] = useState(0)
  const [uncertain, setUncertain] = useState(0)
  const [confused, setConfused] = useState(0)
  const [trend, setTrend] = useState(12)
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null)
  const [isAnimated, setIsAnimated] = useState(false)

  // Target values
  const targetUnderstanding = 64
  const targetUncertain = 25
  const targetConfused = 11

  // Animate values on mount
  useEffect(() => {
    setIsAnimated(true)
    const duration = 1200
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      setUnderstanding(Math.round(targetUnderstanding * easeOut))
      setUncertain(Math.round(targetUncertain * easeOut))
      setConfused(Math.round(targetConfused * easeOut))

      if (step >= steps) {
        clearInterval(timer)
        setUnderstanding(targetUnderstanding)
        setUncertain(targetUncertain)
        setConfused(targetConfused)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  // Calculate the angle for the gauge needle (0-180 degrees)
  const needleAngle = 180 - (understanding / 100) * 180

  // Mock student data for each segment
  const studentGroups: StudentGroup[] = [
    {
      status: "understanding",
      students: [
        { name: "Emma S.", avatar: "ES" },
        { name: "Liam J.", avatar: "LJ" },
        { name: "Olivia M.", avatar: "OM" },
        { name: "Noah K.", avatar: "NK" },
      ],
    },
    {
      status: "uncertain",
      students: [
        { name: "Ava R.", avatar: "AR" },
        { name: "Mason B.", avatar: "MB" },
      ],
    },
    {
      status: "confused",
      students: [
        { name: "Sophia L.", avatar: "SL" },
        { name: "James W.", avatar: "JW" },
      ],
    },
  ]

  const getSegmentColor = (status: string) => {
    switch (status) {
      case "understanding":
        return { bg: "bg-emerald-500", ring: "ring-emerald-100", hover: "hover:bg-emerald-50", text: "text-emerald-700" }
      case "uncertain":
        return { bg: "bg-amber-500", ring: "ring-amber-100", hover: "hover:bg-amber-50", text: "text-amber-700" }
      case "confused":
        return { bg: "bg-red-500", ring: "ring-red-100", hover: "hover:bg-red-50", text: "text-red-700" }
      default:
        return { bg: "bg-slate-500", ring: "ring-slate-100", hover: "hover:bg-slate-50", text: "text-slate-700" }
    }
  }

  const segments = [
    { id: "understanding", label: "Understanding", value: understanding, color: getSegmentColor("understanding"), count: 13 },
    { id: "uncertain", label: "Uncertain", value: uncertain, color: getSegmentColor("uncertain"), count: 5 },
    { id: "confused", label: "Confused", value: confused, color: getSegmentColor("confused"), count: 2 },
  ]

  return (
    <Card className="border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg overflow-hidden">
      <CardHeader className="pb-3 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base font-semibold text-slate-900">
              Understanding Meter
            </CardTitle>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Users className="h-3 w-3" />
              <span>20 students</span>
            </div>
          </div>
          <div className={cn(
            "flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full transition-all duration-300",
            trend >= 0 
              ? "text-emerald-700 bg-emerald-50 border border-emerald-200" 
              : "text-red-700 bg-red-50 border border-red-200"
          )}>
            {trend >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            <span>{trend >= 0 ? "+" : ""}{trend}%</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Gauge Chart */}
          <div className="relative h-40 w-52 flex-shrink-0">
            <svg viewBox="0 0 120 75" className="h-full w-full">
              <defs>
                {/* Gradients for segments */}
                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fecaca" />
                  <stop offset="100%" stopColor="#fca5a5" />
                </linearGradient>
                <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="100%" stopColor="#fde047" />
                </linearGradient>
                <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a7f3d0" />
                  <stop offset="100%" stopColor="#6ee7b7" />
                </linearGradient>
                {/* Drop shadow */}
                <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15"/>
                </filter>
                {/* Glow effect */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Background track */}
              <path
                d="M 10 65 A 50 50 0 0 1 110 65"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="16"
                strokeLinecap="round"
              />

              {/* Red segment (0-33%) */}
              <path
                d="M 10 65 A 50 50 0 0 1 43.4 21.34"
                fill="none"
                stroke={selectedSegment === "confused" ? "#ef4444" : "url(#redGradient)"}
                strokeWidth="16"
                strokeLinecap="round"
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  selectedSegment === "confused" && "filter drop-shadow-lg"
                )}
                style={{ 
                  opacity: selectedSegment && selectedSegment !== "confused" ? 0.4 : 1,
                  transform: selectedSegment === "confused" ? "scale(1.02)" : "scale(1)",
                  transformOrigin: "60px 65px"
                }}
                onClick={() => setSelectedSegment(selectedSegment === "confused" ? null : "confused")}
              />
              
              {/* Yellow segment (33-66%) */}
              <path
                d="M 43.4 21.34 A 50 50 0 0 1 76.6 21.34"
                fill="none"
                stroke={selectedSegment === "uncertain" ? "#eab308" : "url(#yellowGradient)"}
                strokeWidth="16"
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  selectedSegment === "uncertain" && "filter drop-shadow-lg"
                )}
                style={{ 
                  opacity: selectedSegment && selectedSegment !== "uncertain" ? 0.4 : 1,
                  transform: selectedSegment === "uncertain" ? "scale(1.02)" : "scale(1)",
                  transformOrigin: "60px 65px"
                }}
                onClick={() => setSelectedSegment(selectedSegment === "uncertain" ? null : "uncertain")}
              />
              
              {/* Green segment (66-100%) */}
              <path
                d="M 76.6 21.34 A 50 50 0 0 1 110 65"
                fill="none"
                stroke={selectedSegment === "understanding" ? "#22c55e" : "url(#greenGradient)"}
                strokeWidth="16"
                strokeLinecap="round"
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  selectedSegment === "understanding" && "filter drop-shadow-lg"
                )}
                style={{ 
                  opacity: selectedSegment && selectedSegment !== "understanding" ? 0.4 : 1,
                  transform: selectedSegment === "understanding" ? "scale(1.02)" : "scale(1)",
                  transformOrigin: "60px 65px"
                }}
                onClick={() => setSelectedSegment(selectedSegment === "understanding" ? null : "understanding")}
              />
              
              {/* Tick marks */}
              {[0, 25, 50, 75, 100].map((tick, i) => {
                const angle = (180 - (tick / 100) * 180) * (Math.PI / 180)
                const innerRadius = 32
                const outerRadius = 36
                const x1 = 60 + innerRadius * Math.cos(angle)
                const y1 = 65 - innerRadius * Math.sin(angle)
                const x2 = 60 + outerRadius * Math.cos(angle)
                const y2 = 65 - outerRadius * Math.sin(angle)
                return (
                  <line
                    key={tick}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )
              })}

              {/* Needle with animation */}
              <g 
                style={{ 
                  transform: `rotate(${isAnimated ? needleAngle : 180}deg)`,
                  transformOrigin: '60px 65px',
                  transition: 'transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
                filter="url(#dropShadow)"
              >
                {/* Needle body */}
                <path
                  d="M 57 65 L 60 20 L 63 65 Z"
                  fill="#1e3a5f"
                />
                {/* Needle center circle */}
                <circle cx="60" cy="65" r="8" fill="#1e3a5f" />
                <circle cx="60" cy="65" r="5" fill="white" />
                <circle cx="60" cy="65" r="2" fill="#1e3a5f" />
              </g>
            </svg>
            
            {/* Center percentage display */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-0">
              <span className={cn(
                "text-4xl font-bold tabular-nums transition-colors duration-300",
                understanding >= 66 ? "text-emerald-600" : understanding >= 33 ? "text-amber-600" : "text-red-600"
              )}>
                {understanding}%
              </span>
            </div>
          </div>

          {/* Legend with interactive segments */}
          <div className="flex flex-col gap-2 flex-1 w-full lg:w-auto">
            {segments.map((segment) => (
              <button
                key={segment.id}
                onClick={() => setSelectedSegment(selectedSegment === segment.id ? null : segment.id)}
                className={cn(
                  "group flex items-center justify-between gap-3 rounded-xl p-3 transition-all duration-200 border",
                  selectedSegment === segment.id
                    ? `${segment.color.bg.replace("bg-", "bg-").replace("-500", "-50")} border-${segment.id === "understanding" ? "emerald" : segment.id === "uncertain" ? "amber" : "red"}-200 shadow-sm`
                    : "border-transparent hover:bg-slate-50"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-4 w-4 rounded-full transition-all duration-200",
                    segment.color.bg,
                    selectedSegment === segment.id ? "ring-4 ring-offset-1" : "ring-2",
                    segment.color.ring
                  )} />
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        "text-xl font-bold tabular-nums transition-colors",
                        segment.color.text
                      )}>
                        {segment.value}%
                      </span>
                      <span className="text-xs text-slate-400">({segment.count})</span>
                    </div>
                    <p className="text-xs text-slate-500">{segment.label}</p>
                  </div>
                </div>
                <ChevronRight className={cn(
                  "h-4 w-4 text-slate-400 transition-transform duration-200",
                  selectedSegment === segment.id && "rotate-90"
                )} />
              </button>
            ))}
          </div>
        </div>

        {/* Expanded student list when segment is selected */}
        {selectedSegment && (
          <div className={cn(
            "mt-4 p-4 rounded-xl border transition-all duration-300 animate-in slide-in-from-top-2",
            selectedSegment === "understanding" && "bg-emerald-50/50 border-emerald-200",
            selectedSegment === "uncertain" && "bg-amber-50/50 border-amber-200",
            selectedSegment === "confused" && "bg-red-50/50 border-red-200"
          )}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">
                  {selectedSegment === "understanding" ? "Students Understanding" : 
                   selectedSegment === "uncertain" ? "Students Needing Support" : 
                   "Students Struggling"}
                </span>
              </div>
              <button 
                onClick={() => setSelectedSegment(null)}
                className="text-xs text-slate-500 hover:text-slate-700 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {studentGroups
                .find((g) => g.status === selectedSegment)
                ?.students.map((student, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-pointer",
                      selectedSegment === "understanding" && "bg-emerald-100 text-emerald-800",
                      selectedSegment === "uncertain" && "bg-amber-100 text-amber-800",
                      selectedSegment === "confused" && "bg-red-100 text-red-800"
                    )}
                  >
                    <div className={cn(
                      "h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white",
                      selectedSegment === "understanding" && "bg-emerald-500",
                      selectedSegment === "uncertain" && "bg-amber-500",
                      selectedSegment === "confused" && "bg-red-500"
                    )}>
                      {student.avatar}
                    </div>
                    {student.name}
                  </div>
                ))}
              {selectedSegment === "understanding" && (
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm text-emerald-600 bg-emerald-100/50">
                  +9 more
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
