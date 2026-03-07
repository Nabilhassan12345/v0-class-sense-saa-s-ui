"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BarChart3, Calendar, Download, TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, BookOpen } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, Tooltip } from "recharts"

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
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 px-4 bg-white">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-indigo-600" />
              <h1 className="text-lg font-semibold text-slate-900">Insights</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Last 7 days
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-slate-50 p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Avg. Understanding</p>
                      <p className="text-2xl font-bold text-slate-900">72%</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">+8%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Participation Rate</p>
                      <p className="text-2xl font-bold text-slate-900">85%</p>
                    </div>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">+5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Misconceptions Detected</p>
                      <p className="text-2xl font-bold text-amber-600">16</p>
                    </div>
                    <div className="flex items-center text-red-600">
                      <TrendingDown className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">-3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Questions Asked</p>
                      <p className="text-2xl font-bold text-slate-900">48</p>
                    </div>
                    <div className="flex items-center text-slate-400">
                      <span className="text-sm font-medium">This week</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900">Weekly Trends</CardTitle>
                  <CardDescription>Understanding and participation over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={weeklyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                        <YAxis stroke="#64748b" fontSize={12} />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="understanding"
                          stroke="#6366f1"
                          strokeWidth={2}
                          dot={{ fill: "#6366f1" }}
                          name="Understanding"
                        />
                        <Line
                          type="monotone"
                          dataKey="participation"
                          stroke="#10b981"
                          strokeWidth={2}
                          dot={{ fill: "#10b981" }}
                          name="Participation"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-slate-900">Topic Performance</CardTitle>
                  <CardDescription>Understanding by topic area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={topicPerformance} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis type="number" stroke="#64748b" fontSize={12} domain={[0, 100]} />
                        <YAxis dataKey="topic" type="category" stroke="#64748b" fontSize={12} width={100} />
                        <Tooltip />
                        <Bar dataKey="understanding" fill="#6366f1" radius={[0, 4, 4, 0]} name="Understanding %" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Misconceptions Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  Top Misconceptions This Week
                </CardTitle>
                <CardDescription>Common misunderstandings detected across your class</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentMisconceptions.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-slate-200 bg-white"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          item.severity === "high" ? "bg-red-100" :
                          item.severity === "medium" ? "bg-amber-100" : "bg-yellow-100"
                        }`}>
                          <AlertTriangle className={`h-5 w-5 ${
                            item.severity === "high" ? "text-red-600" :
                            item.severity === "medium" ? "text-amber-600" : "text-yellow-600"
                          }`} />
                        </div>
                        <div>
                          <p className="font-medium text-slate-900">"{item.concept}"</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              <BookOpen className="h-3 w-3 mr-1" />
                              {item.topic}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-lg font-semibold text-slate-900">{item.frequency}</p>
                          <p className="text-xs text-slate-500">of students</p>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            item.severity === "high"
                              ? "text-red-700 border-red-200 bg-red-50"
                              : item.severity === "medium"
                              ? "text-amber-700 border-amber-200 bg-amber-50"
                              : "text-yellow-700 border-yellow-200 bg-yellow-50"
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

            {/* Topic Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-900">Topic Breakdown</CardTitle>
                <CardDescription>Detailed performance by topic</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topicPerformance.map((topic) => (
                    <div key={topic.topic} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-900">{topic.topic}</span>
                        <div className="flex items-center gap-3">
                          {topic.misconceptions > 0 && (
                            <Badge variant="outline" className="text-amber-700 border-amber-200 bg-amber-50">
                              {topic.misconceptions} misconceptions
                            </Badge>
                          )}
                          <span className={`text-sm font-medium ${
                            topic.understanding >= 80 ? "text-green-600" :
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
