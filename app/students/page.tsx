"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Filter, TrendingUp, TrendingDown, Minus, MoreHorizontal, Users, UserCheck, AlertCircle, Award, Star } from "lucide-react"

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
      <SidebarInset className="bg-edtech-gradient min-h-screen">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-white/50 bg-white/70 backdrop-blur-xl px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-6" />
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Students</h1>
              <p className="text-sm text-slate-600">Manage and track student progress</p>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-gray-50 border border-slate-200 p-5 transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-600 to-gray-700 shadow-md">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-base text-slate-600">Total</p>
                    <p className="text-3xl font-bold text-slate-900">20</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-5 transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
                    <UserCheck className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-base text-slate-600">Active</p>
                    <p className="text-3xl font-bold text-emerald-600">15</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 p-5 transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-md">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-base text-slate-600">Avg. Score</p>
                    <p className="text-3xl font-bold text-indigo-600">72%</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-5 transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-md">
                    <AlertCircle className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-base text-slate-600">Need Help</p>
                    <p className="text-3xl font-bold text-amber-600">3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1 sm:max-w-md">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <Input placeholder="Search students..." className="h-12 text-base pl-12 border-slate-200 bg-white rounded-xl" />
              </div>
              <Button variant="outline" className="h-12 px-6 text-base border-slate-200 rounded-xl">
                <Filter className="mr-2 h-5 w-5" />
                Filter
              </Button>
            </div>

            {/* Students Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {students.map((student, index) => (
                <div
                  key={student.id}
                  className={`group rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                    student.understanding >= 80
                      ? "bg-gradient-to-br from-emerald-50/80 to-teal-50/80 border-emerald-200 hover:border-emerald-300"
                      : student.understanding >= 60
                      ? "bg-gradient-to-br from-amber-50/80 to-orange-50/80 border-amber-200 hover:border-amber-300"
                      : "bg-gradient-to-br from-red-50/80 to-rose-50/80 border-red-200 hover:border-red-300"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14 border-2 border-white shadow-md">
                        <AvatarFallback className={`text-lg font-bold text-white ${
                          student.understanding >= 80
                            ? "bg-gradient-to-br from-emerald-500 to-teal-600"
                            : student.understanding >= 60
                            ? "bg-gradient-to-br from-amber-500 to-orange-600"
                            : "bg-gradient-to-br from-red-500 to-rose-600"
                        }`}>
                          {student.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-lg font-bold text-slate-900">{student.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            className={`text-sm px-3 py-1 ${
                              student.status === "active"
                                ? "bg-emerald-100 text-emerald-700 border-emerald-300"
                                : student.status === "thinking"
                                ? "bg-amber-100 text-amber-700 border-amber-300"
                                : "bg-slate-100 text-slate-500 border-slate-300"
                            }`}
                          >
                            {student.status}
                          </Badge>
                          {student.streak > 0 && (
                            <div className="flex items-center gap-1 text-amber-600">
                              <Star className="h-4 w-4 fill-amber-400" />
                              <span className="text-sm font-semibold">{student.streak}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-3xl font-bold ${
                        student.understanding >= 80 ? "text-emerald-600" :
                        student.understanding >= 60 ? "text-amber-600" : "text-red-600"
                      }`}>
                        {student.understanding}%
                      </p>
                      <div className={`flex items-center justify-end gap-1 mt-1 ${
                        student.trend === "up" ? "text-emerald-600" :
                        student.trend === "down" ? "text-red-600" : "text-slate-400"
                      }`}>
                        {student.trend === "up" && <TrendingUp className="h-4 w-4" />}
                        {student.trend === "down" && <TrendingDown className="h-4 w-4" />}
                        {student.trend === "stable" && <Minus className="h-4 w-4" />}
                        <span className="text-sm font-medium">{student.trend}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="h-3 w-full overflow-hidden rounded-full bg-white/60">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          student.understanding >= 80
                            ? "bg-gradient-to-r from-emerald-400 to-emerald-600"
                            : student.understanding >= 60
                            ? "bg-gradient-to-r from-amber-400 to-amber-600"
                            : "bg-gradient-to-r from-red-400 to-red-600"
                        }`}
                        style={{ width: `${student.understanding}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Footer Stats */}
                  <div className="mt-4 flex items-center justify-between text-base text-slate-600">
                    <span>{student.questionsAnswered} questions</span>
                    <span>{student.lastActive}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
