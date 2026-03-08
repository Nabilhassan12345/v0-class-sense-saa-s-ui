"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Bell, Shield, Palette, Users, Sparkles, Save, Moon, Sun, Monitor, Eye, Share2, Brain, Target, Clock, Zap } from "lucide-react"

export default function SettingsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-edtech-gradient min-h-screen">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-white/50 bg-white/70 backdrop-blur-xl px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-6" />
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-600 to-gray-700 shadow-lg">
              <Settings className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
              <p className="text-sm text-slate-600">Customize your ClassSense experience</p>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-4xl space-y-6">
            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 gap-2 bg-white/80 backdrop-blur border border-white p-2 rounded-2xl shadow-lg sm:grid-cols-4">
                <TabsTrigger value="general" className="rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-indigo-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md text-base py-3">
                  General
                </TabsTrigger>
                <TabsTrigger value="notifications" className="rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-md text-base py-3">
                  Alerts
                </TabsTrigger>
                <TabsTrigger value="ai" className="rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-violet-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-md text-base py-3">
                  AI
                </TabsTrigger>
                <TabsTrigger value="class" className="rounded-xl data-[state=active]:bg-gradient-to-br data-[state=active]:from-sky-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md text-base py-3">
                  Class
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-6">
                {/* Appearance Card */}
                <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 p-6 shadow-lg transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
                      <Palette className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Appearance</h2>
                      <p className="text-base text-slate-600">Customize how ClassSense looks</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl bg-white/60 p-4 border border-indigo-100">
                      <div className="flex items-center gap-3">
                        <Sun className="h-5 w-5 text-amber-500" />
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Theme</Label>
                          <p className="text-sm text-slate-500">Select your preferred theme</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2 border-indigo-200 bg-white hover:bg-indigo-50">
                          <Sun className="h-4 w-4" />
                          Light
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 border-slate-200 bg-white hover:bg-slate-50">
                          <Moon className="h-4 w-4" />
                          Dark
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2 border-slate-200 bg-white hover:bg-slate-50">
                          <Monitor className="h-4 w-4" />
                          System
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/60 p-4 border border-indigo-100">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-indigo-500" />
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Compact mode</Label>
                          <p className="text-sm text-slate-500">Show more content on screen</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                {/* Privacy Card */}
                <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-6 shadow-lg transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Privacy</h2>
                      <p className="text-base text-slate-600">Manage data and privacy settings</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between rounded-xl bg-white/60 p-4 border border-emerald-100">
                      <div className="flex items-center gap-3">
                        <Eye className="h-5 w-5 text-emerald-500" />
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Anonymous mode</Label>
                          <p className="text-sm text-slate-500">Hide student names during sessions</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/60 p-4 border border-emerald-100">
                      <div className="flex items-center gap-3">
                        <Share2 className="h-5 w-5 text-emerald-500" />
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Share analytics</Label>
                          <p className="text-sm text-slate-500">Help improve ClassSense with anonymous data</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-6 shadow-lg transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-md">
                      <Bell className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Alert Preferences</h2>
                      <p className="text-base text-slate-600">Configure when you receive alerts during sessions</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between rounded-xl bg-white/60 p-4 border border-amber-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                          <Target className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Misconception alerts</Label>
                          <p className="text-sm text-slate-500">Get notified when misconceptions are detected</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/60 p-4 border border-amber-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                          <Brain className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Low understanding alerts</Label>
                          <p className="text-sm text-slate-500">When class understanding drops significantly</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/60 p-4 border border-amber-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100">
                          <Users className="h-4 w-4 text-sky-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Participation alerts</Label>
                          <p className="text-sm text-slate-500">Notify about students who become inactive</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl bg-white/60 p-4 border border-amber-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                          <Zap className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Understanding threshold</Label>
                          <p className="text-sm text-slate-500">Alert when understanding drops below</p>
                        </div>
                      </div>
                      <Select defaultValue="50">
                        <SelectTrigger className="w-full sm:w-28 border-amber-200 bg-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="40">40%</SelectItem>
                          <SelectItem value="50">50%</SelectItem>
                          <SelectItem value="60">60%</SelectItem>
                          <SelectItem value="70">70%</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="ai" className="space-y-6">
                <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 p-6 shadow-lg transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-md">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">AI Configuration</h2>
                      <p className="text-base text-slate-600">Customize how AI assists your teaching</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between rounded-xl bg-white/60 p-4 border border-violet-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100">
                          <Zap className="h-4 w-4 text-violet-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Auto-generate follow-ups</Label>
                          <p className="text-sm text-slate-500">Suggest questions based on misconceptions</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl bg-white/60 p-4 border border-violet-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                          <Target className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Detection sensitivity</Label>
                          <p className="text-sm text-slate-500">Misconception detection level</p>
                        </div>
                      </div>
                      <Select defaultValue="medium">
                        <SelectTrigger className="w-full sm:w-32 border-violet-200 bg-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl bg-white/60 p-4 border border-violet-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                          <Brain className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Question difficulty</Label>
                          <p className="text-sm text-slate-500">Default for AI-generated questions</p>
                        </div>
                      </div>
                      <Select defaultValue="mixed">
                        <SelectTrigger className="w-full sm:w-32 border-violet-200 bg-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="hard">Hard</SelectItem>
                          <SelectItem value="mixed">Mixed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3 rounded-xl bg-white/60 p-4 border border-violet-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100">
                          <Settings className="h-4 w-4 text-indigo-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Subject context</Label>
                          <p className="text-sm text-slate-500">Help AI understand your classroom</p>
                        </div>
                      </div>
                      <Input 
                        placeholder="e.g., Grade 7 Biology, plant biology unit" 
                        className="border-violet-200 bg-white rounded-xl h-12 text-base"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="class" className="space-y-6">
                <div className="rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 p-6 shadow-lg transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-md">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Class Settings</h2>
                      <p className="text-base text-slate-600">Configure your classroom details</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="space-y-3 rounded-xl bg-white/60 p-4 border border-sky-100">
                      <Label className="text-base font-semibold text-slate-900">Class name</Label>
                      <Input defaultValue="Biology 101 - Period 3" className="border-sky-200 bg-white rounded-xl h-12 text-base" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-3 rounded-xl bg-white/60 p-4 border border-sky-100">
                        <Label className="text-base font-semibold text-slate-900">Subject</Label>
                        <Select defaultValue="biology">
                          <SelectTrigger className="border-sky-200 bg-white rounded-xl h-12 text-base">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="biology">Biology</SelectItem>
                            <SelectItem value="chemistry">Chemistry</SelectItem>
                            <SelectItem value="physics">Physics</SelectItem>
                            <SelectItem value="math">Mathematics</SelectItem>
                            <SelectItem value="history">History</SelectItem>
                            <SelectItem value="english">English</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3 rounded-xl bg-white/60 p-4 border border-sky-100">
                        <Label className="text-base font-semibold text-slate-900">Grade level</Label>
                        <Select defaultValue="7">
                          <SelectTrigger className="border-sky-200 bg-white rounded-xl h-12 text-base">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="6">Grade 6</SelectItem>
                            <SelectItem value="7">Grade 7</SelectItem>
                            <SelectItem value="8">Grade 8</SelectItem>
                            <SelectItem value="9">Grade 9</SelectItem>
                            <SelectItem value="10">Grade 10</SelectItem>
                            <SelectItem value="11">Grade 11</SelectItem>
                            <SelectItem value="12">Grade 12</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/60 p-4 border border-sky-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100">
                          <Eye className="h-4 w-4 text-sky-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Anonymous responses</Label>
                          <p className="text-sm text-slate-500">Students answer without showing names</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 p-6 shadow-lg transition-all hover:shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Session Defaults</h2>
                      <p className="text-base text-slate-600">Default settings for new live sessions</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl bg-white/60 p-4 border border-indigo-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100">
                          <Clock className="h-4 w-4 text-amber-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Response time limit</Label>
                          <p className="text-sm text-slate-500">Default time for student answers</p>
                        </div>
                      </div>
                      <Select defaultValue="30">
                        <SelectTrigger className="w-full sm:w-36 border-indigo-200 bg-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 seconds</SelectItem>
                          <SelectItem value="30">30 seconds</SelectItem>
                          <SelectItem value="45">45 seconds</SelectItem>
                          <SelectItem value="60">60 seconds</SelectItem>
                          <SelectItem value="none">No limit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-white/60 p-4 border border-indigo-100">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100">
                          <Zap className="h-4 w-4 text-emerald-600" />
                        </div>
                        <div>
                          <Label className="text-base font-semibold text-slate-900">Auto-advance</Label>
                          <p className="text-sm text-slate-500">Automatically move to the next question</p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button className="w-full sm:w-auto btn-premium text-white px-8 py-3 h-auto text-base rounded-xl">
                    <Save className="mr-2 h-5 w-5" />
                    Save Changes
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
