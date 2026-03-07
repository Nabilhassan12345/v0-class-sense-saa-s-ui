"use client"

import { useState } from "react"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Send, Copy, Check, Plus, BookOpen, Target, Lightbulb } from "lucide-react"

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

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b border-slate-200 px-4 bg-white">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-indigo-600" />
            <h1 className="text-lg font-semibold text-slate-900">AI Question Generator</h1>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-slate-50 p-6">
          <div className="mx-auto max-w-5xl space-y-6">
            {/* Input Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-900">Generate Questions</CardTitle>
                <CardDescription>
                  Describe your topic or paste content, and AI will generate targeted questions to assess student understanding
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="e.g., Generate questions about photosynthesis that address common misconceptions about plant nutrition..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-indigo-600 hover:bg-indigo-700">
                    <Send className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm text-slate-500">Recent topics:</span>
                  {recentTopics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="outline"
                      className="cursor-pointer hover:bg-slate-100"
                      onClick={() => setPrompt(`Generate questions about ${topic}`)}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="cursor-pointer hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                    <Target className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Target Misconceptions</p>
                    <p className="text-sm text-slate-500">Based on class data</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                    <Lightbulb className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Concept Check</p>
                    <p className="text-sm text-slate-500">Quick understanding pulse</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="cursor-pointer hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Review Quiz</p>
                    <p className="text-sm text-slate-500">End of lesson assessment</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Generated Questions */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-slate-900">Generated Questions</CardTitle>
                  <CardDescription>3 questions generated for "Photosynthesis basics"</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add to Session
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {generatedQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="rounded-lg border border-slate-200 bg-white p-4 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-slate-900">{q.question}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {q.type}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={
                              q.difficulty === "Easy"
                                ? "text-green-700 border-green-200 bg-green-50"
                                : q.difficulty === "Medium"
                                ? "text-amber-700 border-amber-200 bg-amber-50"
                                : "text-red-700 border-red-200 bg-red-50"
                            }
                          >
                            {q.difficulty}
                          </Badge>
                          <Badge variant="outline" className="text-xs text-indigo-700 border-indigo-200 bg-indigo-50">
                            Targets: {q.targetMisconception}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopy(q.id, q.question)}
                      >
                        {copiedId === q.id ? (
                          <Check className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {q.options && (
                      <div className="grid grid-cols-2 gap-2">
                        {q.options.map((option, index) => (
                          <div
                            key={index}
                            className={`rounded-md border px-3 py-2 text-sm ${
                              index === q.correctAnswer
                                ? "border-green-300 bg-green-50 text-green-700"
                                : "border-slate-200 text-slate-600"
                            }`}
                          >
                            {String.fromCharCode(65 + index)}. {option}
                          </div>
                        ))}
                      </div>
                    )}
                    {q.expectedAnswer && (
                      <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                        <span className="font-medium">Expected answer:</span> {q.expectedAnswer}
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
