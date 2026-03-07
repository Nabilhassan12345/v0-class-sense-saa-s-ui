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
import { Search, Filter, TrendingUp, TrendingDown, Minus, MoreHorizontal } from "lucide-react"

const students = [
  { id: 1, name: "Emma Wilson", initials: "EW", understanding: 92, trend: "up", streak: 5, questionsAnswered: 24, lastActive: "2 min ago", status: "active" },
  { id: 2, name: "James Chen", initials: "JC", understanding: 85, trend: "up", streak: 3, questionsAnswered: 22, lastActive: "5 min ago", status: "active" },
  { id: 3, name: "Sofia Rodriguez", initials: "SR", understanding: 78, trend: "stable", streak: 2, questionsAnswered: 20, lastActive: "1 min ago", status: "active" },
  { id: 4, name: "Liam Johnson", initials: "LJ", understanding: 65, trend: "down", streak: 0, questionsAnswered: 18, lastActive: "8 min ago", status: "thinking" },
  { id: 5, name: "Olivia Brown", initials: "OB", understanding: 88, trend: "up", streak: 4, questionsAnswered: 23, lastActive: "3 min ago", status: "active" },
  { id: 6, name: "Noah Davis", initials: "ND", understanding: 45, trend: "down", streak: 0, questionsAnswered: 12, lastActive: "15 min ago", status: "inactive" },
  { id: 7, name: "Ava Martinez", initials: "AM", understanding: 72, trend: "stable", streak: 1, questionsAnswered: 19, lastActive: "4 min ago", status: "active" },
  { id: 8, name: "Ethan Taylor", initials: "ET", understanding: 58, trend: "down", streak: 0, questionsAnswered: 15, lastActive: "12 min ago", status: "thinking" },
  { id: 9, name: "Isabella Anderson", initials: "IA", understanding: 95, trend: "up", streak: 7, questionsAnswered: 25, lastActive: "1 min ago", status: "active" },
  { id: 10, name: "Mason Thomas", initials: "MT", understanding: 52, trend: "stable", streak: 0, questionsAnswered: 14, lastActive: "20 min ago", status: "inactive" },
]

export default function StudentsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 px-4 bg-white">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-lg font-semibold text-slate-900">Students</h1>
        </header>
        <main className="flex-1 overflow-auto bg-slate-50 p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-slate-500">Total Students</p>
                  <p className="text-2xl font-bold text-slate-900">20</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-slate-500">Active Now</p>
                  <p className="text-2xl font-bold text-green-600">15</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-slate-500">Avg. Understanding</p>
                  <p className="text-2xl font-bold text-indigo-600">72%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-slate-500">Need Attention</p>
                  <p className="text-2xl font-bold text-amber-600">3</p>
                </CardContent>
              </Card>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input placeholder="Search students..." className="pl-9" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Students Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-900">Class Roster</CardTitle>
                <CardDescription>View individual student performance and engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm font-medium text-slate-500 border-b">
                    <div className="col-span-3">Student</div>
                    <div className="col-span-2">Understanding</div>
                    <div className="col-span-1">Trend</div>
                    <div className="col-span-2">Questions</div>
                    <div className="col-span-2">Last Active</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-1"></div>
                  </div>
                  
                  {/* Student Rows */}
                  {students.map((student) => (
                    <div
                      key={student.id}
                      className="grid grid-cols-12 gap-4 items-center px-4 py-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="col-span-3 flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-indigo-100 text-indigo-700 text-xs">
                            {student.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-slate-900">{student.name}</p>
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
                          <span className={`text-sm font-medium ${
                            student.understanding >= 80 ? "text-green-600" :
                            student.understanding >= 60 ? "text-amber-600" : "text-red-600"
                          }`}>
                            {student.understanding}%
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1">
                        {student.trend === "up" && (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        )}
                        {student.trend === "down" && (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                        {student.trend === "stable" && (
                          <Minus className="h-4 w-4 text-slate-400" />
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
                              ? "text-green-700 border-green-200 bg-green-50"
                              : student.status === "thinking"
                              ? "text-amber-700 border-amber-200 bg-amber-50"
                              : "text-slate-500 border-slate-200 bg-slate-50"
                          }
                        >
                          {student.status}
                        </Badge>
                      </div>
                      <div className="col-span-1 flex justify-end">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
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
