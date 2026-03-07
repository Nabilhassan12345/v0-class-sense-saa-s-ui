"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Bell, Shield, Palette, Users, Sparkles, Save } from "lucide-react"

export default function SettingsPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b border-slate-200 bg-white/80 px-4 backdrop-blur-sm sm:h-16">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-slate-500 to-slate-700">
              <Settings className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-base font-semibold text-slate-900 sm:text-lg">Settings</h1>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-slate-50 p-4 sm:p-6">
          <div className="mx-auto max-w-3xl space-y-4 sm:space-y-6">
            <Tabs defaultValue="general" className="space-y-4 sm:space-y-6">
              <TabsList className="grid w-full grid-cols-2 bg-white p-1 sm:grid-cols-4">
                <TabsTrigger value="general" className="text-xs sm:text-sm">General</TabsTrigger>
                <TabsTrigger value="notifications" className="text-xs sm:text-sm">Alerts</TabsTrigger>
                <TabsTrigger value="ai" className="text-xs sm:text-sm">AI</TabsTrigger>
                <TabsTrigger value="class" className="text-xs sm:text-sm">Class</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4 sm:space-y-6">
                <Card className="border-slate-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base text-slate-900 sm:text-lg">
                      <Palette className="h-5 w-5" />
                      Appearance
                    </CardTitle>
                    <CardDescription>Customize how ClassSense looks</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <Label>Theme</Label>
                        <p className="text-sm text-slate-500">Select your preferred theme</p>
                      </div>
                      <Select defaultValue="light">
                        <SelectTrigger className="w-full border-slate-200 sm:w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Compact mode</Label>
                        <p className="text-sm text-slate-500">Show more content on screen</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base text-slate-900 sm:text-lg">
                      <Shield className="h-5 w-5" />
                      Privacy
                    </CardTitle>
                    <CardDescription>Manage data and privacy</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Anonymous mode</Label>
                        <p className="text-sm text-slate-500">Hide student names during sessions</p>
                      </div>
                      <Switch />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Share analytics</Label>
                        <p className="text-sm text-slate-500">Help improve ClassSense</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-4 sm:space-y-6">
                <Card className="border-slate-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base text-slate-900 sm:text-lg">
                      <Bell className="h-5 w-5" />
                      Alert Preferences
                    </CardTitle>
                    <CardDescription>Configure when you receive alerts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Misconception alerts</Label>
                        <p className="text-sm text-slate-500">When misconceptions are detected</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Low understanding alerts</Label>
                        <p className="text-sm text-slate-500">When understanding drops</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Participation alerts</Label>
                        <p className="text-sm text-slate-500">Notify about inactive students</p>
                      </div>
                      <Switch />
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <Label>Understanding threshold</Label>
                        <p className="text-sm text-slate-500">Alert when below</p>
                      </div>
                      <Select defaultValue="50">
                        <SelectTrigger className="w-full border-slate-200 sm:w-24">
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
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ai" className="space-y-4 sm:space-y-6">
                <Card className="border-slate-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base text-slate-900 sm:text-lg">
                      <Sparkles className="h-5 w-5" />
                      AI Configuration
                    </CardTitle>
                    <CardDescription>Customize AI behavior</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Auto-generate follow-ups</Label>
                        <p className="text-sm text-slate-500">Suggest questions based on misconceptions</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <Label>Detection sensitivity</Label>
                        <p className="text-sm text-slate-500">Misconception detection level</p>
                      </div>
                      <Select defaultValue="medium">
                        <SelectTrigger className="w-full border-slate-200 sm:w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Separator />
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <Label>Question difficulty</Label>
                        <p className="text-sm text-slate-500">Default for generated questions</p>
                      </div>
                      <Select defaultValue="mixed">
                        <SelectTrigger className="w-full border-slate-200 sm:w-32">
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
                    <Separator />
                    <div className="space-y-2">
                      <Label>Subject context</Label>
                      <p className="text-sm text-slate-500">Help AI understand your class</p>
                      <Input 
                        placeholder="e.g., Grade 7 Biology, plant biology unit" 
                        className="border-slate-200"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="class" className="space-y-4 sm:space-y-6">
                <Card className="border-slate-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base text-slate-900 sm:text-lg">
                      <Users className="h-5 w-5" />
                      Class Settings
                    </CardTitle>
                    <CardDescription>Manage your class configuration</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Class name</Label>
                      <Input defaultValue="Biology 101 - Period 3" className="border-slate-200" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Subject</Label>
                        <Select defaultValue="biology">
                          <SelectTrigger className="border-slate-200">
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
                      <div className="space-y-2">
                        <Label>Grade level</Label>
                        <Select defaultValue="7">
                          <SelectTrigger className="border-slate-200">
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
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Anonymous responses</Label>
                        <p className="text-sm text-slate-500">Students answer without names</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base text-slate-900 sm:text-lg">Session Defaults</CardTitle>
                    <CardDescription>Default settings for new sessions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <Label>Response time limit</Label>
                        <p className="text-sm text-slate-500">Default answer time</p>
                      </div>
                      <Select defaultValue="30">
                        <SelectTrigger className="w-full border-slate-200 sm:w-32">
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
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Auto-advance</Label>
                        <p className="text-sm text-slate-500">Move to next question automatically</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end">
                  <Button className="w-full bg-[#1e3a5f] hover:bg-[#16324d] sm:w-auto">
                    <Save className="mr-2 h-4 w-4" />
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
