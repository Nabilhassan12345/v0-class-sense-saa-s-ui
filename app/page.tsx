"use client"

import Link from "next/link"
import { Radio, Users, BookOpen, BarChart3, Plus, Clock, ChevronRight, TrendingUp, Sparkles } from "lucide-react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AppSidebar } from "@/components/app-sidebar"
import { cn } from "@/lib/utils"

const recentSessions = [
  {
    id: 1,
    name: "Photosynthesis",
    class: "Biology 9A",
    date: "Today, 10:30 AM",
    students: 20,
    understanding: 64,
  },
  {
    id: 2,
    name: "Gravity & Motion",
    class: "Physics 10B",
    date: "Yesterday, 2:00 PM",
    students: 18,
    understanding: 72,
  },
  {
    id: 3,
    name: "Cell Division",
    class: "Biology 9A",
    date: "Mar 5, 9:00 AM",
    students: 19,
    understanding: 58,
  },
]

const quickStats = [
  { label: "Total Sessions", value: "47", change: "+3", icon: Radio, color: "bg-[#1e3a5f]", lightColor: "bg-blue-50" },
  { label: "Active Students", value: "156", change: "+12", icon: Users, color: "bg-green-600", lightColor: "bg-green-50" },
  { label: "Questions Asked", value: "324", change: "+28", icon: BookOpen, color: "bg-purple-600", lightColor: "bg-purple-50" },
  { label: "Avg. Understanding", value: "68%", change: "+8%", icon: BarChart3, color: "bg-amber-500", lightColor: "bg-amber-50" },
]

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-slate-50">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 px-6">
          <SidebarTrigger className="-ml-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors" />
          <Separator orientation="vertical" className="h-6" />
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-slate-900">Dashboard</h1>
              <p className="text-sm text-slate-500">Welcome back, Teacher</p>
            </div>
            <Link href="/live-session">
              <Button className="gap-2 bg-[#1e3a5f] hover:bg-[#16324d] shadow-sm transition-all hover:shadow-md active:scale-[0.98]">
                <Plus className="h-4 w-4" />
                Start Live Session
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickStats.map((stat, index) => (
                <Card 
                  key={stat.label} 
                  className="group border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-105",
                      stat.color
                    )}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500">{stat.label}</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                        <span className="flex items-center text-xs font-medium text-green-600">
                          <TrendingUp className="h-3 w-3 mr-0.5" />
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Sessions */}
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg text-slate-900">Recent Sessions</CardTitle>
                    <CardDescription>Your latest classroom sessions and understanding levels</CardDescription>
                  </div>
                  <Link href="/insights">
                    <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 gap-1">
                      View All
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentSessions.map((session) => (
                    <Link
                      key={session.id}
                      href="/insights"
                      className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f]/10 transition-colors group-hover:bg-[#1e3a5f]/15">
                          <BookOpen className="h-6 w-6 text-[#1e3a5f]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 group-hover:text-[#1e3a5f] transition-colors">{session.name}</h3>
                          <p className="text-sm text-slate-500">{session.class}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
                          <Clock className="h-4 w-4" />
                          {session.date}
                        </div>
                        <div className="hidden md:flex items-center gap-2 text-sm text-slate-500">
                          <Users className="h-4 w-4" />
                          {session.students} students
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2.5 w-24 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className={cn(
                                "h-full rounded-full transition-all duration-500",
                                session.understanding >= 70
                                  ? "bg-green-500"
                                  : session.understanding >= 50
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                              )}
                              style={{ width: `${session.understanding}%` }}
                            />
                          </div>
                          <span className={cn(
                            "text-sm font-semibold min-w-[3ch]",
                            session.understanding >= 70 ? "text-green-600" :
                            session.understanding >= 50 ? "text-amber-600" : "text-red-600"
                          )}>
                            {session.understanding}%
                          </span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-slate-400" />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Link href="/live-session" className="block group">
                <Card className="h-full border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:border-green-300 hover:-translate-y-0.5">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 transition-transform group-hover:scale-110">
                      <Radio className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-green-600 transition-colors">Start Live Session</h3>
                    <p className="mt-1 text-sm text-slate-500">Begin a new classroom session</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/ai-questions" className="block group">
                <Card className="h-full border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:border-purple-300 hover:-translate-y-0.5">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 transition-transform group-hover:scale-110">
                      <Sparkles className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">Generate Questions</h3>
                    <p className="mt-1 text-sm text-slate-500">Create AI-powered questions</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/insights" className="block group">
                <Card className="h-full border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 transition-transform group-hover:scale-110">
                      <BarChart3 className="h-7 w-7 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-amber-600 transition-colors">View Insights</h3>
                    <p className="mt-1 text-sm text-slate-500">Analyze class performance</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
