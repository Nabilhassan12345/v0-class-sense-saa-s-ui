"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Copy, Check, Plus, BookOpen, Target, Lightbulb, Wand2, RefreshCw, Zap, Brain } from "lucide-react"

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
      <SidebarInset className="bg-edtech-gradient min-h-screen">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-white/50 bg-white/70 backdrop-blur-xl px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-6" />
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">AI Question Generator</h1>
              <p className="text-sm text-slate-600">Create targeted questions with AI</p>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-auto p-6">
          <div className="mx-auto max-w-5xl space-y-6">
            {/* Input Section */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-md">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Generate Questions</h2>
                  <p className="text-base text-slate-600">Describe your topic and let AI create targeted questions</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  placeholder="e.g., Generate questions about photosynthesis..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-1 h-14 text-lg border-violet-200 bg-white focus-visible:ring-violet-500 rounded-xl"
                />
                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="h-14 px-8 text-lg btn-premium text-white rounded-xl"
                >
                  {isGenerating ? (
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Wand2 className="mr-2 h-5 w-5" />
                  )}
                  Generate
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <span className="text-base text-slate-600">Quick topics:</span>
                {recentTopics.map((topic) => (
                  <Badge
                    key={topic}
                    variant="outline"
                    className="cursor-pointer border-violet-300 bg-white text-base px-4 py-1.5 transition-all hover:border-violet-500 hover:bg-violet-100 hover:scale-105"
                    onClick={() => setPrompt(`Generate questions about ${topic}`)}
                  >
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="group cursor-pointer rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-indigo-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 shadow-md transition-transform group-hover:scale-110">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">Target Misconceptions</p>
                    <p className="text-base text-slate-600">Based on class data</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-amber-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-md transition-transform group-hover:scale-110">
                    <Lightbulb className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">Concept Check</p>
                    <p className="text-base text-slate-600">Quick understanding pulse</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-emerald-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md transition-transform group-hover:scale-110">
                    <BookOpen className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">Review Quiz</p>
                    <p className="text-base text-slate-600">End of lesson assessment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Questions */}
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white shadow-xl overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Generated Questions</h2>
                    <p className="text-base text-slate-600">3 questions for "Photosynthesis basics"</p>
                  </div>
                </div>
                <Button className="btn-premium text-white px-6 py-3 h-auto text-base rounded-xl">
                  <Plus className="mr-2 h-5 w-5" />
                  Add to Session
                </Button>
              </div>
              <div className="p-6 space-y-4">
                {generatedQuestions.map((q, index) => (
                  <div
                    key={q.id}
                    className={`group rounded-2xl border p-5 transition-all duration-300 hover:shadow-md ${
                      index === 0 ? "bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border-indigo-200 hover:border-indigo-300" :
                      index === 1 ? "bg-gradient-to-br from-sky-50/50 to-blue-50/50 border-sky-200 hover:border-sky-300" :
                      "bg-gradient-to-br from-violet-50/50 to-purple-50/50 border-violet-200 hover:border-violet-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-lg font-semibold leading-snug text-slate-900">{q.question}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="border-slate-300 bg-white text-sm px-3 py-1">
                            {q.type}
                          </Badge>
                          <Badge
                            className={`text-sm px-3 py-1 ${
                              q.difficulty === "Easy"
                                ? "bg-emerald-100 text-emerald-700 border-emerald-300"
                                : q.difficulty === "Medium"
                                ? "bg-amber-100 text-amber-700 border-amber-300"
                                : "bg-red-100 text-red-700 border-red-300"
                            }`}
                          >
                            {q.difficulty}
                          </Badge>
                          <Badge className="bg-violet-100 text-violet-700 border-violet-300 text-sm px-3 py-1">
                            Targets: {q.targetMisconception}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white"
                        onClick={() => handleCopy(q.id, q.question)}
                      >
                        {copiedId === q.id ? (
                          <Check className="h-5 w-5 text-emerald-600" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                    {q.options && (
                      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {q.options.map((option, idx) => (
                          <div
                            key={idx}
                            className={`rounded-xl border px-4 py-3 text-base transition-all ${
                              idx === q.correctAnswer
                                ? "border-emerald-400 bg-emerald-50 font-semibold text-emerald-700 shadow-sm"
                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            <span className="font-bold">{String.fromCharCode(65 + idx)}.</span> {option}
                          </div>
                        ))}
                      </div>
                    )}
                    {q.expectedAnswer && (
                      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-600">
                        <span className="font-semibold">Expected Answer:</span> {q.expectedAnswer}
                      </div>
                    )}
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
