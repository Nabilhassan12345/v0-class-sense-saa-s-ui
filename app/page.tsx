"use client"

import Link from "next/link"
import { Radio, Users, BookOpen, BarChart3, Plus, Clock, ChevronRight, TrendingUp, Sparkles, Zap } from "lucide-react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
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
  { label: "Total Sessions", value: "47", change: "+3", icon: Radio, gradient: "from-indigo-500 to-purple-600", bg: "bg-gradient-to-br from-indigo-50 to-purple-50", border: "border-indigo-200" },
  { label: "Active Students", value: "156", change: "+12", icon: Users, gradient: "from-emerald-500 to-teal-600", bg: "bg-gradient-to-br from-emerald-50 to-teal-50", border: "border-emerald-200" },
  { label: "Questions Asked", value: "324", change: "+28", icon: BookOpen, gradient: "from-amber-500 to-orange-600", bg: "bg-gradient-to-br from-amber-50 to-orange-50", border: "border-amber-200" },
  { label: "Avg. Understanding", value: "68%", change: "+8%", icon: BarChart3, gradient: "from-sky-500 to-blue-600", bg: "bg-gradient-to-br from-sky-50 to-blue-50", border: "border-sky-200" },
]

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-edtech-gradient min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-white/50 bg-white/70 backdrop-blur-xl px-6">
          <SidebarTrigger className="-ml-1 text-slate-600 hover:text-slate-900 hover:bg-white/80 transition-colors" />
          <Separator orientation="vertical" className="h-6" />
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Welcome back, Teacher</h1>
              <p className="text-base text-slate-600">Ready to inspire minds today?</p>
            </div>
            <Link href="/live-session">
              <Button className="gap-2 btn-premium text-white text-base px-6 py-3 h-auto rounded-xl transition-all">
                <Zap className="h-5 w-5" />
                Start Live Session
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-7xl space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {quickStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`group relative overflow-hidden rounded-2xl ${stat.bg} ${stat.border} border p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-default`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-base font-medium text-slate-600">{stat.label}</p>
                      <p className="mt-2 text-4xl font-bold text-slate-900">{stat.value}</p>
                      <div className="mt-2 flex items-center gap-1 text-sm font-semibold text-emerald-600">
                        <TrendingUp className="h-4 w-4" />
                        {stat.change} this week
                      </div>
                    </div>
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <stat.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Sessions */}
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-xl overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Recent Sessions</h2>
                  <p className="text-base text-slate-600">Your latest classroom sessions</p>
                </div>
                <Link href="/insights">
                  <Button variant="ghost" className="text-base text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 gap-1">
                    View All
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="p-6 space-y-4">
                {recentSessions.map((session, index) => (
                  <Link
                    key={session.id}
                    href="/insights"
                    className="group flex items-center justify-between rounded-xl bg-gradient-to-r from-slate-50 to-white border border-slate-200 p-5 transition-all duration-300 hover:shadow-md hover:border-indigo-200 hover:from-indigo-50/50 hover:to-purple-50/30"
                  >
                    <div className="flex items-center gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md transition-transform group-hover:scale-110">
                        <BookOpen className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">{session.name}</h3>
                        <p className="text-base text-slate-600">{session.class}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-10">
                      <div className="hidden sm:flex items-center gap-2 text-base text-slate-500">
                        <Clock className="h-5 w-5" />
                        {session.date}
                      </div>
                      <div className="hidden md:flex items-center gap-2 text-base text-slate-500">
                        <Users className="h-5 w-5" />
                        {session.students} students
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-32 h-3 overflow-hidden rounded-full bg-slate-200">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${
                              session.understanding >= 70
                                ? "bg-gradient-to-r from-emerald-400 to-emerald-600"
                                : session.understanding >= 50
                                ? "bg-gradient-to-r from-amber-400 to-amber-600"
                                : "bg-gradient-to-r from-red-400 to-red-600"
                            }`}
                            style={{ width: `${session.understanding}%` }}
                          />
                        </div>
                        <span className={`text-lg font-bold min-w-[3ch] ${
                          session.understanding >= 70 ? "text-emerald-600" :
                          session.understanding >= 50 ? "text-amber-600" : "text-red-600"
                        }`}>
                          {session.understanding}%
                        </span>
                      </div>
                      <ChevronRight className="h-6 w-6 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-indigo-500" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <Link href="/live-session" className="block group">
                <div className="h-full rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-emerald-300">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Radio className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">Start Live Session</h3>
                  <p className="mt-2 text-base text-slate-600">Begin a new classroom session with real-time insights</p>
                </div>
              </Link>
              <Link href="/ai-questions" className="block group">
                <div className="h-full rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-violet-300">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors">Generate Questions</h3>
                  <p className="mt-2 text-base text-slate-600">Create AI-powered questions targeting misconceptions</p>
                </div>
              </Link>
              <Link href="/insights" className="block group">
                <div className="h-full rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-amber-300">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">View Insights</h3>
                  <p className="mt-2 text-base text-slate-600">Analyze class performance and learning trends</p>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
