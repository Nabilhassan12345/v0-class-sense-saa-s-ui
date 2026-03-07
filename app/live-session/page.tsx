"use client"

import { Radio, Users, Clock, Pause, SkipForward, Bell } from "lucide-react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import { UnderstandingMeter } from "@/components/understanding-meter"
import { MisconceptionAlert } from "@/components/misconception-alert"
import { CurrentQuestion } from "@/components/current-question"
import { ParticipationCard } from "@/components/participation-card"
import { ConceptInsights } from "@/components/concept-insights"

export default function LiveSessionPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-slate-100">
        {/* Deep Blue Header - matches screenshot */}
        <header className="bg-[#1e3a5f] text-white">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1 text-white hover:bg-white/10" />
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Radio className="h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-wide">ClassSense</h1>
                  <p className="text-xs text-blue-200">The Classroom Thinking Radar</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-lg bg-white/10 p-2 hover:bg-white/20">
                <Users className="h-5 w-5" />
              </button>
              <button className="rounded-lg bg-white/10 p-2 hover:bg-white/20">
                <Bell className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Live Session Banner */}
          <div className="border-t border-white/10 bg-[#16324d] px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-green-500">
                <span className="text-xs font-bold">L</span>
              </div>
              <span className="font-semibold">LIVE SESSION:</span>
              <span className="text-blue-200">Biology — Photosynthesis</span>
            </div>
          </div>
        </header>

        {/* Control Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-slate-500" />
              <span className="font-semibold text-slate-900">19</span>
              <span className="text-slate-500">/ 20 students connected</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-slate-500" />
              <span className="font-semibold text-slate-900">24:32</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Pause className="h-4 w-4" />
              Pause Session
            </Button>
            <Button size="sm" className="gap-2 bg-[#1e3a5f] hover:bg-[#16324d]">
              <SkipForward className="h-4 w-4" />
              Next Question
            </Button>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* LEFT COLUMN - Teacher Interaction */}
              <div className="space-y-6">
                <CurrentQuestion />
              </div>

              {/* RIGHT COLUMN - Classroom Insights */}
              <div className="space-y-6">
                <UnderstandingMeter />
                <ParticipationCard />
                <MisconceptionAlert />
                <ConceptInsights />
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
