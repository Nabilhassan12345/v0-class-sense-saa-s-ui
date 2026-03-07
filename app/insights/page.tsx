"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, Download, TrendingUp, TrendingDown, AlertTriangle, BookOpen, Brain, Target, Zap } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Area, AreaChart } from "recharts"

const weeklyData = [
  { day: "Mon", understanding: 65, participation: 80 },
  { day: "Tue", understanding: 68, participation: 75 },
  { day: "Wed", understanding: 72, participation: 85 },
  { day: "Thu", understanding: 70, participation: 78 },
  { day: "Fri", understanding: 75, participation: 90 },
]

const topicPerformance = [
  { topic: "Photosynthesis", understanding: 72, misconceptions: 3 },
  { topic: "Cell Structure", understanding: 85, misconceptions: 1 },
  { topic: "Respiration", understanding: 68, misconceptions: 4 },
  { topic: "Plant Nutrition", understanding: 58, misconceptions: 6 },
  { topic: "Energy Transfer", understanding: 78, misconceptions: 2 },
]

const recentMisconceptions = [
  { id: 1, concept: "Plants get food from soil", frequency: "42%", severity: "high", topic: "Plant Nutrition" },
  { id: 2, concept: "Respiration only happens at night", frequency: "28%", severity: "medium", topic: "Respiration" },
  { id: 3, concept: "Photosynthesis produces oxygen only", frequency: "19%", severity: "low", topic: "Photosynthesis" },
]

export default function InsightsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-edtech-gradient min-h-screen">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-white/50 bg-white/70 backdrop-blur-xl px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-6" />
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Insights</h1>
                <p className="text-sm text-slate-600">Analyze learning patterns and trends</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-slate-200 bg-white rounded-xl hidden sm:flex">
                <Calendar className="mr-2 h-5 w-5" />
                Last 7 days
              </Button>
              <Button variant="outline" className="border-slate-200 bg-white rounded-xl">
                <Download className="h-5 w-5 sm:mr-2" />
                <span className="hidden sm:inline">Export</span>
              </Button>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 p-5 transition-all hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-base text-slate-600">Understanding</p>
                    <p className="mt-1 text-4xl font-bold text-slate-900">72%</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                    <TrendingUp className="h-4 w-4" />
                    +8%
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-5 transition-all hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-base text-slate-600">Participation</p>
                    <p className="mt-1 text-4xl font-bold text-slate-900">85%</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                    <TrendingUp className="h-4 w-4" />
                    +5%
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-5 transition-all hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-base text-slate-600">Misconceptions</p>
                    <p className="mt-1 text-4xl font-bold text-amber-600">16</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                    <TrendingDown className="h-4 w-4" />
                    -3
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 p-5 transition-all hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-base text-slate-600">Questions</p>
                    <p className="mt-1 text-4xl font-bold text-slate-900">48</p>
                  </div>
                  <span className="text-sm text-slate-500">This week</span>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Weekly Trends</h2>
                    <p className="text-base text-slate-600">Understanding and participation</p>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weeklyData}>
                      <defs>
                        <linearGradient id="colorUnderstanding" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorParticipation" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                      <XAxis dataKey="day" stroke="#64748b" fontSize={14} tickLine={false} axisLine={false} />
                      <YAxis stroke="#64748b" fontSize={14} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                          fontSize: '14px'
                        }} 
                      />
                      <Area
                        type="monotone"
                        dataKey="understanding"
                        stroke="#6366f1"
                        strokeWidth={3}
                        fill="url(#colorUnderstanding)"
                        name="Understanding"
                      />
                      <Area
                        type="monotone"
                        dataKey="participation"
                        stroke="#10b981"
                        strokeWidth={3}
                        fill="url(#colorParticipation)"
                        name="Participation"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-indigo-500" />
                    <span className="text-base text-slate-600">Understanding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-emerald-500" />
                    <span className="text-base text-slate-600">Participation</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Topic Performance</h2>
                    <p className="text-base text-slate-600">Understanding by topic</p>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topicPerformance} layout="vertical" barSize={24}>
                      <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#4F46E5"/>
                          <stop offset="100%" stopColor="#7C3AED"/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                      <XAxis type="number" stroke="#64748b" fontSize={14} domain={[0, 100]} tickLine={false} axisLine={false} />
                      <YAxis 
                        dataKey="topic" 
                        type="category" 
                        stroke="#64748b" 
                        fontSize={13} 
                        width={100} 
                        tickLine={false} 
                        axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                          fontSize: '14px'
                        }} 
                      />
                      <Bar 
                        dataKey="understanding" 
                        fill="url(#barGradient)" 
                        radius={[0, 8, 8, 0]} 
                        name="Understanding %" 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Misconceptions */}
            <div className="rounded-2xl bg-gradient-to-br from-red-50/80 to-rose-50/80 border border-red-200 shadow-xl overflow-hidden">
              <div className="flex items-center gap-3 p-6 border-b border-red-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 shadow-md">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Top Misconceptions</h2>
                  <p className="text-base text-slate-600">Common misunderstandings detected</p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {recentMisconceptions.map((item) => (
                  <div
                    key={item.id}
                    className={`flex flex-col gap-4 rounded-2xl border bg-white p-5 transition-all hover:shadow-md sm:flex-row sm:items-center sm:justify-between ${
                      item.severity === "high" ? "border-red-300" :
                      item.severity === "medium" ? "border-amber-300" : "border-yellow-300"
                    }`}
                  >
                    <div className="flex items-start gap-4 sm:items-center">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        item.severity === "high" ? "bg-gradient-to-br from-red-500 to-rose-600" :
                        item.severity === "medium" ? "bg-gradient-to-br from-amber-500 to-orange-600" :
                        "bg-gradient-to-br from-yellow-500 to-amber-500"
                      } shadow-md`}>
                        <AlertTriangle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-slate-900">"{item.concept}"</p>
                        <Badge variant="outline" className="mt-1 border-slate-300 text-sm">
                          <BookOpen className="mr-1 h-4 w-4" />
                          {item.topic}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-6 sm:justify-end">
                      <div className="text-left sm:text-right">
                        <p className="text-3xl font-bold text-slate-900">{item.frequency}</p>
                        <p className="text-sm text-slate-500">of students</p>
                      </div>
                      <Badge
                        className={`text-sm px-4 py-1.5 ${
                          item.severity === "high"
                            ? "bg-red-100 text-red-700 border-red-300"
                            : item.severity === "medium"
                            ? "bg-amber-100 text-amber-700 border-amber-300"
                            : "bg-yellow-100 text-yellow-700 border-yellow-300"
                        }`}
                      >
                        {item.severity}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Topic Breakdown */}
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-md">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Topic Breakdown</h2>
                  <p className="text-base text-slate-600">Detailed performance by topic</p>
                </div>
              </div>
              <div className="space-y-5">
                {topicPerformance.map((topic) => (
                  <div key={topic.topic} className="space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-lg font-semibold text-slate-900">{topic.topic}</span>
                      <div className="flex shrink-0 items-center gap-3">
                        {topic.misconceptions > 0 && (
                          <Badge className={`text-sm px-3 py-1 ${
                            topic.misconceptions >= 4 
                              ? "bg-red-100 text-red-700 border-red-300"
                              : topic.misconceptions >= 2
                              ? "bg-amber-100 text-amber-700 border-amber-300"
                              : "bg-yellow-100 text-yellow-700 border-yellow-300"
                          }`}>
                            {topic.misconceptions} issues
                          </Badge>
                        )}
                        <span className={`text-xl font-bold ${
                          topic.understanding >= 80 ? "text-emerald-600" :
                          topic.understanding >= 60 ? "text-amber-600" : "text-red-600"
                        }`}>
                          {topic.understanding}%
                        </span>
                      </div>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ${
                          topic.understanding >= 80 
                            ? "bg-gradient-to-r from-emerald-400 to-emerald-600"
                            : topic.understanding >= 60
                            ? "bg-gradient-to-r from-amber-400 to-amber-600"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                        }`}
                        style={{ width: `${topic.understanding}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
