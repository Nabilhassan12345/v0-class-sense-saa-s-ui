"use client"

import Link from "next/link"
import { Radio, Users, BookOpen, BarChart3, Plus, Clock } from "lucide-react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AppSidebar } from "@/components/app-sidebar"

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
  { label: "Total Sessions", value: "47", icon: Radio, color: "bg-blue-100 text-blue-600" },
  { label: "Active Students", value: "156", icon: Users, color: "bg-green-100 text-green-600" },
  { label: "Questions Asked", value: "324", icon: BookOpen, color: "bg-purple-100 text-purple-600" },
  { label: "Avg. Understanding", value: "68%", icon: BarChart3, color: "bg-amber-100 text-amber-600" },
]

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-slate-100">
        {/* Header */}
        <header className="flex h-16 items-center gap-4 border-b border-slate-200 bg-white px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-6" />
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-slate-900">Dashboard</h1>
              <p className="text-sm text-slate-500">Welcome back, Teacher</p>
            </div>
            <Link href="/live-session">
              <Button className="gap-2 bg-[#1e3a5f] hover:bg-[#16324d]">
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
              {quickStats.map((stat) => (
                <Card key={stat.label} className="border-slate-200 shadow-sm">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{stat.label}</p>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Sessions */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Recent Sessions</CardTitle>
                <CardDescription>Your latest classroom sessions and their understanding levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <div
                      key={session.id}
                      className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f]/10">
                          <BookOpen className="h-6 w-6 text-[#1e3a5f]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{session.name}</h3>
                          <p className="text-sm text-slate-500">{session.class}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Clock className="h-4 w-4" />
                          {session.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Users className="h-4 w-4" />
                          {session.students} students
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
                            <div
                              className={`h-full rounded-full ${
                                session.understanding >= 70
                                  ? "bg-green-500"
                                  : session.understanding >= 50
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                              style={{ width: `${session.understanding}%` }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-slate-700">
                            {session.understanding}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Link href="/live-session" className="block">
                <Card className="h-full border-slate-200 shadow-sm transition-colors hover:border-[#1e3a5f]/30 hover:bg-slate-50">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100">
                      <Radio className="h-7 w-7 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900">Start Live Session</h3>
                    <p className="mt-1 text-sm text-slate-500">Begin a new classroom session</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/ai-questions" className="block">
                <Card className="h-full border-slate-200 shadow-sm transition-colors hover:border-[#1e3a5f]/30 hover:bg-slate-50">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100">
                      <BookOpen className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900">Generate Questions</h3>
                    <p className="mt-1 text-sm text-slate-500">Create AI-powered questions</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/insights" className="block">
                <Card className="h-full border-slate-200 shadow-sm transition-colors hover:border-[#1e3a5f]/30 hover:bg-slate-50">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100">
                      <BarChart3 className="h-7 w-7 text-amber-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900">View Insights</h3>
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
