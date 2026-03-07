"use client"

import { Radio, Users, Clock, Pause, SkipForward, Bell, Settings, Share2 } from "lucide-react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { AppSidebar } from "@/components/app-sidebar"
import { UnderstandingMeter } from "@/components/understanding-meter"
import { MisconceptionAlert } from "@/components/misconception-alert"
import { CurrentQuestion } from "@/components/current-question"
import { ParticipationCard } from "@/components/participation-card"
import { ConceptInsights } from "@/components/concept-insights"
import { ReasoningInsights } from "@/components/reasoning-insights"

export default function LiveSessionPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-slate-50">
        {/* Deep Blue Header - matches screenshot */}
        <header className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] text-white shadow-lg">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="-ml-1 text-white/80 hover:text-white hover:bg-white/10 transition-colors" />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <Radio className="h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-xl font-bold tracking-tight">ClassSense</h1>
                  <p className="text-[11px] font-medium text-blue-200 uppercase tracking-wider">The Classroom Thinking Radar</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                <Share2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
              </Button>
            </div>
          </div>
          
          {/* Live Session Banner */}
          <div className="border-t border-white/10 bg-[#16324d]/80 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-400">Live</span>
                </div>
                <span className="text-white/40">|</span>
                <span className="font-semibold text-white">Biology</span>
                <span className="text-blue-200">— Photosynthesis</span>
              </div>
              <div className="text-xs text-blue-200">
                Session Code: <span className="font-mono font-bold text-white">PHOTO-247</span>
              </div>
            </div>
          </div>
        </header>

        {/* Control Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 px-6 py-3 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
              <Users className="h-4 w-4 text-green-600" />
              <span className="font-bold text-green-700">19</span>
              <span className="text-green-600/70">/ 20</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100">
              <Clock className="h-4 w-4 text-slate-500" />
              <span className="font-mono font-bold text-slate-700">24:32</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
              <span>Question</span>
              <span className="font-bold text-slate-700">3</span>
              <span>of</span>
              <span className="font-bold text-slate-700">5</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98]"
            >
              <Pause className="h-4 w-4" />
              <span className="hidden sm:inline">Pause</span>
            </Button>
            <Button 
              size="sm" 
              className="gap-2 bg-[#1e3a5f] hover:bg-[#16324d] shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
            >
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
                <ReasoningInsights />
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
