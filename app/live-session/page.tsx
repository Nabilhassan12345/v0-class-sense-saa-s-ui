"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { UnderstandingSnapshot } from "@/components/understanding-snapshot"
import { MisconceptionAlert } from "@/components/misconception-alert"
import { LiveQuestion } from "@/components/live-question"
import { ParticipationOverview } from "@/components/participation-overview"
import { ResponseTimeline } from "@/components/response-timeline"
import { Users, Clock, TrendingUp, Play, Pause, SkipForward } from "lucide-react"

export default function LiveSessionPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 px-4 bg-white">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-semibold text-slate-900">Live Session</h1>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                <span className="mr-1.5 h-2 w-2 rounded-full bg-green-500 animate-pulse inline-block" />
                Live
              </Badge>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Users className="h-4 w-4" />
                <span className="font-medium">19/20</span>
                <span className="text-slate-400">students</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Clock className="h-4 w-4" />
                <span className="font-medium">24:32</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="font-medium text-green-600">+12%</span>
                <span className="text-slate-400">understanding</span>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">
                  <Pause className="h-4 w-4 mr-1" />
                  Pause
                </Button>
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                  <SkipForward className="h-4 w-4 mr-1" />
                  Next Question
                </Button>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-slate-50 p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Top Row - Main Focus */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <LiveQuestion />
              <UnderstandingSnapshot />
              <MisconceptionAlert />
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ParticipationOverview />
              <ResponseTimeline />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
