"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Send, Copy, Check, Plus, BookOpen, Target, Lightbulb, Wand2, RefreshCw } from "lucide-react"

const generatedQuestions = [
  {
    id: 1,
    question: "What is the primary source of energy for photosynthesis?",
    type: "Multiple Choice",
    difficulty: "Easy",
    targetMisconception: "Energy source confusion",
    options: ["Sunlight", "Soil nutrients", "Water", "Carbon dioxide"],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Which part of the plant cell is responsible for photosynthesis?",
    type: "Multiple Choice",
    difficulty: "Medium",
    targetMisconception: "Cell structure",
    options: ["Mitochondria", "Chloroplast", "Nucleus", "Cell wall"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "If a plant is kept in complete darkness, what happens to its ability to make glucose?",
    type: "Short Answer",
    difficulty: "Hard",
    targetMisconception: "Light dependency",
    expectedAnswer: "The plant cannot produce glucose through photosynthesis because light is required for the light-dependent reactions.",
  },
]

const recentTopics = [
  "Photosynthesis basics",
  "Plant cell structure",
  "Energy conversion",
  "Carbon cycle",
]

export default function AIQuestionsPage() {
  const [prompt, setPrompt] = useState("")
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => setIsGenerating(false), 2000)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b border-slate-200 bg-white/80 px-4 backdrop-blur-sm sm:h-16">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-base font-semibold text-slate-900 sm:text-lg">AI Question Generator</h1>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-slate-50 p-4 sm:p-6">
          <div className="mx-auto max-w-5xl space-y-4 sm:space-y-6">
            {/* Input Section */}
            <Card className="overflow-hidden border-slate-200 shadow-sm">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-slate-900">Generate Questions</CardTitle>
                <CardDescription>
                  Describe your topic or paste content, and AI will generate targeted questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input
                    placeholder="e.g., Generate questions about photosynthesis..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="flex-1 border-slate-200 focus-visible:ring-violet-500"
                  />
                  <Button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700"
                  >
                    {isGenerating ? (
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Generate
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-slate-500">Quick:</span>
                  {recentTopics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="outline"
                      className="cursor-pointer border-slate-200 transition-colors hover:border-violet-300 hover:bg-violet-50"
                      onClick={() => setPrompt(`Generate questions about ${topic}`)}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              <Card className="group cursor-pointer border-slate-200 transition-all hover:border-violet-200 hover:bg-violet-50/50 hover:shadow-md">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 transition-colors group-hover:bg-violet-200">
                    <Target className="h-5 w-5 text-violet-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-900">Target Misconceptions</p>
                    <p className="truncate text-sm text-slate-500">Based on class data</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="group cursor-pointer border-slate-200 transition-all hover:border-amber-200 hover:bg-amber-50/50 hover:shadow-md">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200">
                    <Lightbulb className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-900">Concept Check</p>
                    <p className="truncate text-sm text-slate-500">Quick understanding pulse</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="group cursor-pointer border-slate-200 transition-all hover:border-emerald-200 hover:bg-emerald-50/50 hover:shadow-md">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 transition-colors group-hover:bg-emerald-200">
                    <BookOpen className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-900">Review Quiz</p>
                    <p className="truncate text-sm text-slate-500">End of lesson assessment</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Generated Questions */}
            <Card className="border-slate-200 shadow-sm">
              <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="text-slate-900">Generated Questions</CardTitle>
                  <CardDescription>3 questions for "Photosynthesis basics"</CardDescription>
                </div>
                <Button size="sm" className="w-full bg-[#1e3a5f] hover:bg-[#16324d] sm:w-auto">
                  <Plus className="mr-1 h-4 w-4" />
                  Add to Session
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {generatedQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="group rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-slate-300 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium leading-snug text-slate-900">{q.question}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="border-slate-200 text-xs">
                            {q.type}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={
                              q.difficulty === "Easy"
                                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                : q.difficulty === "Medium"
                                ? "border-amber-200 bg-amber-50 text-amber-700"
                                : "border-red-200 bg-red-50 text-red-700"
                            }
                          >
                            {q.difficulty}
                          </Badge>
                          <Badge variant="outline" className="border-violet-200 bg-violet-50 text-violet-700 text-xs">
                            Targets: {q.targetMisconception}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                        onClick={() => handleCopy(q.id, q.question)}
                      >
                        {copiedId === q.id ? (
                          <Check className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {q.options && (
                      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {q.options.map((option, index) => (
                          <div
                            key={index}
                            className={`rounded-lg border px-3 py-2 text-sm ${
                              index === q.correctAnswer
                                ? "border-emerald-300 bg-emerald-50 font-medium text-emerald-700"
                                : "border-slate-200 text-slate-600"
                            }`}
                          >
                            <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                          </div>
                        ))}
                      </div>
                    )}
                    {q.expectedAnswer && (
                      <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                        <span className="font-medium">Expected:</span> {q.expectedAnswer}
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
