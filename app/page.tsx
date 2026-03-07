"use client"

import { Radio, Users, Clock, TrendingUp } from "lucide-react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { AppSidebar } from "@/components/app-sidebar"
import { UnderstandingSnapshot } from "@/components/understanding-snapshot"
import { MisconceptionAlert } from "@/components/misconception-alert"
import { ParticipationOverview } from "@/components/participation-overview"
import { LiveQuestion } from "@/components/live-question"
import { AIQuestionGenerator } from "@/components/ai-question-generator"
import { ResponseTimeline } from "@/components/response-timeline"
import { ConfusedConcepts } from "@/components/confused-concepts"

export default function LiveSessionPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-slate-50">
        {/* Header */}
        <header className="flex h-16 items-center gap-4 border-b border-slate-200 bg-white px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-6" />
          <div className="flex flex-1 items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <Radio className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-slate-900">
                  Live Session
                </h1>
                <p className="text-xs text-slate-500">
                  The Classroom Thinking Radar
                </p>
              </div>
            </div>
          </div>

          {/* Session Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="gap-1.5 border-slate-200">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                Live
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <Users className="h-4 w-4" />
                <span>
                  <span className="font-semibold text-slate-900">19</span> / 20
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span className="font-semibold text-slate-900">24:32</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-4 w-4" />
                <span className="font-semibold text-green-600">+12%</span>
              </div>
            </div>
          </div>
        </header>

        {/* Session Details Bar */}
        <div className="border-b border-slate-200 bg-white px-6 py-3">
          <div className="flex items-center gap-6 text-sm">
            <div>
              <span className="text-slate-500">Class:</span>{" "}
              <span className="font-medium text-slate-900">Biology 9A</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div>
              <span className="text-slate-500">Topic:</span>{" "}
              <span className="font-medium text-slate-900">Photosynthesis</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div>
              <span className="text-slate-500">Students Connected:</span>{" "}
              <span className="font-semibold text-green-600">19</span>
              <span className="text-slate-400"> / 20</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Top Row - Key Metrics */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <UnderstandingSnapshot />
              <div className="lg:col-span-2">
                <MisconceptionAlert />
              </div>
            </div>

            {/* Middle Row - Live Question & Participation */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <LiveQuestion />
              <ParticipationOverview />
            </div>

            {/* Bottom Row - AI Suggestions & Analytics */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <AIQuestionGenerator />
              </div>
              <div className="space-y-6">
                <ResponseTimeline />
                <ConfusedConcepts />
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
