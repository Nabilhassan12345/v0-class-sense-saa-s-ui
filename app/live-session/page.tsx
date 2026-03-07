"use client"

import { Users, Clock, Pause, Play, Radio } from "lucide-react"
import { useState } from "react"
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

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-[#F8FAFC]">
        {/* Page Header */}
        <header className="sticky top-0 z-20 bg-white border-b border-[#E5E7EB]">
          <div className="flex h-16 items-center justify-between px-6">
            {/* Left: Title */}
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1 text-[#6B7280] hover:text-[#111827] hover:bg-[#F8FAFC] transition-colors" />
              <div>
                <h1 className="text-2xl font-semibold text-[#111827] tracking-tight">
                  Live Session
                </h1>
                <p className="text-sm text-[#6B7280]">
                  Biology: Photosynthesis
                </p>
              </div>
            </div>

            {/* Right: Status Indicators */}
            <div className="flex items-center gap-4">
              {/* Connected Students */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E5E7EB]">
                <Users className="h-4 w-4 text-[#6B7280]" />
                <span className="text-sm font-medium text-[#111827]">
                  <span className="text-[#2563EB]">19</span> / 20
                </span>
              </div>

              {/* Session Timer */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E5E7EB]">
                <Clock className="h-4 w-4 text-[#6B7280]" />
                <span className="text-sm font-mono font-medium text-[#111827]">24:32</span>
              </div>

              {/* Live Indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#DCFCE7] border border-[#bbf7d0]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22c55e]" />
                </span>
                <span className="text-sm font-medium text-[#166534]">Live</span>
              </div>

              {/* Pause/Resume Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPaused(!isPaused)}
                className={cn(
                  "gap-2 transition-all",
                  isPaused 
                    ? "border-[#2563EB] text-[#2563EB] hover:bg-[#dbeafe]" 
                    : "border-[#E5E7EB] text-[#6B7280] hover:text-[#111827] hover:bg-[#F8FAFC]"
                )}
              >
                {isPaused ? (
                  <>
                    <Play className="h-4 w-4" />
                    Resume
                  </>
                ) : (
                  <>
                    <Pause className="h-4 w-4" />
                    Pause Session
                  </>
                )}
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content - Focus + Context Layout */}
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* LEFT COLUMN - Teacher Focus (wider) */}
              <div className="lg:col-span-7 space-y-6">
                <CurrentQuestionCard />
              </div>

              {/* RIGHT COLUMN - Classroom Intelligence */}
              <div className="lg:col-span-5 space-y-6">
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
