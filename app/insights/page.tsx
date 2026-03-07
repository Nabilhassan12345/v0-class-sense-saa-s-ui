"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Calendar, Download, TrendingUp, TrendingDown, AlertTriangle, BookOpen, Users, Zap } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Tooltip, Area, AreaChart } from "recharts"

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
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b border-slate-200 bg-white/80 px-4 backdrop-blur-sm sm:h-16">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <h1 className="text-base font-semibold text-slate-900 sm:text-lg">Insights</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hidden border-slate-200 sm:flex">
                <Calendar className="mr-2 h-4 w-4" />
                Last 7 days
              </Button>
              <Button variant="outline" size="sm" className="border-slate-200">
                <Download className="h-4 w-4 sm:mr-2" />
                <span className="hidden sm:inline">Export</span>
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-slate-50 p-4 sm:p-6">
          <div className="mx-auto max-w-6xl space-y-4 sm:space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              <Card className="border-slate-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-slate-500 sm:text-sm">Understanding</p>
                      <p className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">72%</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                      <TrendingUp className="h-3 w-3" />
                      +8%
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-slate-500 sm:text-sm">Participation</p>
                      <p className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">85%</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                      <TrendingUp className="h-3 w-3" />
                      +5%
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-slate-500 sm:text-sm">Misconceptions</p>
                      <p className="mt-1 text-xl font-bold text-amber-600 sm:text-2xl">16</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                      <TrendingDown className="h-3 w-3" />
                      -3
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-slate-500 sm:text-sm">Questions</p>
                      <p className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">48</p>
                    </div>
                    <span className="text-xs text-slate-400">This week</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
              <Card className="border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-slate-900 sm:text-lg">Weekly Trends</CardTitle>
                  <CardDescription>Understanding and participation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-56 sm:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={weeklyData}>
                        <defs>
                          <linearGradient id="colorUnderstanding" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorParticipation" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                        <XAxis dataKey="day" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                          }} 
                        />
                        <Area
                          type="monotone"
                          dataKey="understanding"
                          stroke="#6366f1"
                          strokeWidth={2}
                          fill="url(#colorUnderstanding)"
                          name="Understanding"
                        />
                        <Area
                          type="monotone"
                          dataKey="participation"
                          stroke="#10b981"
                          strokeWidth={2}
                          fill="url(#colorParticipation)"
                          name="Participation"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-indigo-500" />
                      <span className="text-sm text-slate-600">Understanding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-emerald-500" />
                      <span className="text-sm text-slate-600">Participation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-slate-900 sm:text-lg">Topic Performance</CardTitle>
                  <CardDescription>Understanding by topic</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-56 sm:h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topicPerformance} layout="vertical" barSize={20}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                        <XAxis type="number" stroke="#64748b" fontSize={12} domain={[0, 100]} tickLine={false} axisLine={false} />
                        <YAxis 
                          dataKey="topic" 
                          type="category" 
                          stroke="#64748b" 
                          fontSize={11} 
                          width={90} 
                          tickLine={false} 
                          axisLine={false}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                          }} 
                        />
                        <Bar 
                          dataKey="understanding" 
                          fill="#1e3a5f" 
                          radius={[0, 6, 6, 0]} 
                          name="Understanding %" 
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Misconceptions */}
            <Card className="border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base text-slate-900 sm:text-lg">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Top Misconceptions
                </CardTitle>
                <CardDescription>Common misunderstandings detected</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentMisconceptions.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-start gap-3 sm:items-center">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                          item.severity === "high" ? "bg-red-100" :
                          item.severity === "medium" ? "bg-amber-100" : "bg-yellow-100"
                        }`}>
                          <AlertTriangle className={`h-5 w-5 ${
                            item.severity === "high" ? "text-red-600" :
                            item.severity === "medium" ? "text-amber-600" : "text-yellow-600"
                          }`} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-slate-900">"{item.concept}"</p>
                          <Badge variant="outline" className="mt-1 border-slate-200 text-xs">
                            <BookOpen className="mr-1 h-3 w-3" />
                            {item.topic}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-4 sm:justify-end">
                        <div className="text-left sm:text-right">
                          <p className="text-xl font-bold text-slate-900">{item.frequency}</p>
                          <p className="text-xs text-slate-500">of students</p>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            item.severity === "high"
                              ? "border-red-200 bg-red-50 text-red-700"
                              : item.severity === "medium"
                              ? "border-amber-200 bg-amber-50 text-amber-700"
                              : "border-yellow-200 bg-yellow-50 text-yellow-700"
                          }
                        >
                          {item.severity}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Topic Breakdown */}
            <Card className="border-slate-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-slate-900 sm:text-lg">Topic Breakdown</CardTitle>
                <CardDescription>Detailed performance by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topicPerformance.map((topic) => (
                    <div key={topic.topic} className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-medium text-slate-900">{topic.topic}</span>
                        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                          {topic.misconceptions > 0 && (
                            <Badge variant="outline" className="border-amber-200 bg-amber-50 text-amber-700">
                              {topic.misconceptions} issues
                            </Badge>
                          )}
                          <span className={`text-sm font-semibold ${
                            topic.understanding >= 80 ? "text-emerald-600" :
                            topic.understanding >= 60 ? "text-amber-600" : "text-red-600"
                          }`}>
                            {topic.understanding}%
                          </span>
                        </div>
                      </div>
                      <Progress value={topic.understanding} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
