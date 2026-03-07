"use client"

import { Users, Clock, Pause, Play, Sparkles, GraduationCap } from "lucide-react"
import { useState, useEffect } from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import { CurrentQuestionCard } from "@/components/live-session/current-question-card"
import { ClassUnderstandingCard } from "@/components/live-session/class-understanding-card"
import { MisconceptionCard } from "@/components/live-session/misconception-card"
import { StudentStatusCard } from "@/components/live-session/student-status-card"
import { cn } from "@/lib/utils"

export default function LiveSessionPage() {
  const [isPaused, setIsPaused] = useState(false)
  const [sessionTime, setSessionTime] = useState(1472) // 24:32 in seconds

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setSessionTime(prev => prev + 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isPaused])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-edtech-gradient min-h-screen">
        {/* Premium Header with Gradient */}
        <header className="sticky top-0 z-20 backdrop-blur-xl bg-white/80 border-b border-indigo-100">
          <div className="flex h-20 items-center justify-between px-6 lg:px-8">
            {/* Left: Branding + Title */}
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors rounded-lg" />
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-200">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight">
                    Live Session
                  </h1>
                  <p className="text-base text-indigo-600 font-medium">
                    Biology: Photosynthesis
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Status Indicators */}
            <div className="flex items-center gap-3">
              {/* Connected Students */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-50 to-sky-100 border border-sky-200">
                <Users className="h-5 w-5 text-sky-600" />
                <span className="text-base font-semibold text-slate-900">
                  <span className="text-sky-600">19</span>
                  <span className="text-slate-400">/</span>
                  <span>20</span>
                </span>
              </div>

              {/* Session Timer */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-50 to-violet-100 border border-violet-200">
                <Clock className="h-5 w-5 text-violet-600" />
                <span className="text-base font-mono font-bold text-violet-700">{formatTime(sessionTime)}</span>
              </div>

              {/* Live Indicator */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 pulse-glow">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <span className="text-base font-bold text-emerald-700">LIVE</span>
              </div>

              {/* Pause/Resume Button */}
              <Button
                size="lg"
                onClick={() => setIsPaused(!isPaused)}
                className={cn(
                  "gap-2.5 text-base font-semibold rounded-xl transition-all duration-300",
                  isPaused 
                    ? "btn-premium text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                )}
              >
                {isPaused ? (
                  <>
                    <Play className="h-5 w-5" />
                    Resume
                  </>
                ) : (
                  <>
                    <Pause className="h-5 w-5" />
                    Pause
                  </>
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content - Focus + Context Layout */}
        <main className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-12">
              {/* LEFT COLUMN - Teacher Focus (wider) */}
              <div className="lg:col-span-7 space-y-6 lg:space-y-8">
                <CurrentQuestionCard />
              </div>

              {/* RIGHT COLUMN - Classroom Intelligence */}
              <div className="lg:col-span-5 space-y-6 lg:space-y-8">
                <ClassUnderstandingCard />
                <MisconceptionCard />
                <StudentStatusCard />
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
