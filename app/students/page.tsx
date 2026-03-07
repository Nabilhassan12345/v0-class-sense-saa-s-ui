"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, TrendingUp, TrendingDown, Minus, MoreHorizontal, Users, UserCheck, AlertCircle, Award } from "lucide-react"

const students = [
  { id: 1, name: "Emma Wilson", initials: "EW", understanding: 92, trend: "up", streak: 5, questionsAnswered: 24, lastActive: "2 min ago", status: "active" },
  { id: 2, name: "James Chen", initials: "JC", understanding: 85, trend: "up", streak: 3, questionsAnswered: 22, lastActive: "5 min ago", status: "active" },
  { id: 3, name: "Sofia Rodriguez", initials: "SR", understanding: 78, trend: "stable", streak: 2, questionsAnswered: 20, lastActive: "1 min ago", status: "active" },
  { id: 4, name: "Liam Johnson", initials: "LJ", understanding: 65, trend: "down", streak: 0, questionsAnswered: 18, lastActive: "8 min ago", status: "thinking" },
  { id: 5, name: "Olivia Brown", initials: "OB", understanding: 88, trend: "up", streak: 4, questionsAnswered: 23, lastActive: "3 min ago", status: "active" },
  { id: 6, name: "Noah Davis", initials: "ND", understanding: 45, trend: "down", streak: 0, questionsAnswered: 12, lastActive: "15 min ago", status: "inactive" },
  { id: 7, name: "Ava Martinez", initials: "AM", understanding: 72, trend: "stable", streak: 1, questionsAnswered: 19, lastActive: "4 min ago", status: "active" },
  { id: 8, name: "Ethan Taylor", initials: "ET", understanding: 58, trend: "down", streak: 0, questionsAnswered: 15, lastActive: "12 min ago", status: "thinking" },
]

export default function StudentsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b border-slate-200 bg-white/80 px-4 backdrop-blur-sm sm:h-16">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
              <Users className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-base font-semibold text-slate-900 sm:text-lg">Students</h1>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-slate-50 p-4 sm:p-6">
          <div className="mx-auto max-w-6xl space-y-4 sm:space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              <Card className="border-slate-200">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
                    <Users className="h-5 w-5 text-slate-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 sm:text-sm">Total</p>
                    <p className="text-xl font-bold text-slate-900 sm:text-2xl">20</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100">
                    <UserCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 sm:text-sm">Active</p>
                    <p className="text-xl font-bold text-emerald-600 sm:text-2xl">15</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 sm:text-sm">Avg. Score</p>
                    <p className="text-xl font-bold text-blue-600 sm:text-2xl">72%</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                    <AlertCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 sm:text-sm">Need Help</p>
                    <p className="text-xl font-bold text-amber-600 sm:text-2xl">3</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1 sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input placeholder="Search students..." className="border-slate-200 pl-9" />
              </div>
              <Button variant="outline" size="sm" className="w-full border-slate-200 sm:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>

            {/* Students Table - Desktop */}
            <Card className="hidden border-slate-200 lg:block">
              <CardHeader className="pb-3">
                <CardTitle className="text-slate-900">Class Roster</CardTitle>
                <CardDescription>View individual student performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-4 border-b border-slate-100 px-4 py-2 text-sm font-medium text-slate-500">
                    <div className="col-span-3">Student</div>
                    <div className="col-span-2">Understanding</div>
                    <div className="col-span-1">Trend</div>
                    <div className="col-span-2">Questions</div>
                    <div className="col-span-2">Last Active</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-1"></div>
                  </div>
                  
                  {students.map((student) => (
                    <div
                      key={student.id}
                      className="grid grid-cols-12 items-center gap-4 rounded-lg px-4 py-3 transition-colors hover:bg-slate-50"
                    >
                      <div className="col-span-3 flex items-center gap-3">
                        <Avatar className="h-9 w-9 border border-slate-200">
                          <AvatarFallback className="bg-gradient-to-br from-[#1e3a5f] to-blue-600 text-xs font-medium text-white">
                            {student.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="truncate font-medium text-slate-900">{student.name}</p>
                          {student.streak > 0 && (
                            <p className="text-xs text-amber-600">{student.streak} day streak</p>
                          )}
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center gap-2">
                          <Progress
                            value={student.understanding}
                            className="h-2 flex-1"
                          />
                          <span className={`text-sm font-semibold ${
                            student.understanding >= 80 ? "text-emerald-600" :
                            student.understanding >= 60 ? "text-amber-600" : "text-red-600"
                          }`}>
                            {student.understanding}%
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1">
                        {student.trend === "up" && (
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
                            <TrendingUp className="h-4 w-4 text-emerald-600" />
                          </div>
                        )}
                        {student.trend === "down" && (
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100">
                            <TrendingDown className="h-4 w-4 text-red-600" />
                          </div>
                        )}
                        {student.trend === "stable" && (
                          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100">
                            <Minus className="h-4 w-4 text-slate-400" />
                          </div>
                        )}
                      </div>
                      <div className="col-span-2 text-sm text-slate-600">
                        {student.questionsAnswered} answered
                      </div>
                      <div className="col-span-2 text-sm text-slate-500">
                        {student.lastActive}
                      </div>
                      <div className="col-span-1">
                        <Badge
                          variant="outline"
                          className={
                            student.status === "active"
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                              : student.status === "thinking"
                              ? "border-amber-200 bg-amber-50 text-amber-700"
                              : "border-slate-200 bg-slate-50 text-slate-500"
                          }
                        >
                          {student.status}
                        </Badge>
                      </div>
                      <div className="col-span-1 flex justify-end">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Students Cards - Mobile/Tablet */}
            <div className="space-y-3 lg:hidden">
              {students.map((student) => (
                <Card key={student.id} className="border-slate-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border border-slate-200">
                          <AvatarFallback className="bg-gradient-to-br from-[#1e3a5f] to-blue-600 text-xs font-medium text-white">
                            {student.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-slate-900">{student.name}</p>
                          <div className="mt-0.5 flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={
                                student.status === "active"
                                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                  : student.status === "thinking"
                                  ? "border-amber-200 bg-amber-50 text-amber-700"
                                  : "border-slate-200 bg-slate-50 text-slate-500"
                              }
                            >
                              {student.status}
                            </Badge>
                            {student.streak > 0 && (
                              <span className="text-xs text-amber-600">{student.streak} day streak</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {student.trend === "up" && <TrendingUp className="h-4 w-4 text-emerald-600" />}
                        {student.trend === "down" && <TrendingDown className="h-4 w-4 text-red-600" />}
                        {student.trend === "stable" && <Minus className="h-4 w-4 text-slate-400" />}
                        <span className={`text-lg font-bold ${
                          student.understanding >= 80 ? "text-emerald-600" :
                          student.understanding >= 60 ? "text-amber-600" : "text-red-600"
                        }`}>
                          {student.understanding}%
                        </span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Progress value={student.understanding} className="h-2" />
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
                      <span>{student.questionsAnswered} questions answered</span>
                      <span>{student.lastActive}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
