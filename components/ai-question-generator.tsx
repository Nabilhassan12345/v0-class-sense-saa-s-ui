"use client"

import { Sparkles, Plus, RefreshCw } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const suggestedQuestions = [
  {
    question: "Where does the energy for photosynthesis come from?",
    type: "Recall",
    difficulty: "Easy",
  },
  {
    question: "Explain why plants are called autotrophs.",
    type: "Conceptual",
    difficulty: "Medium",
  },
  {
    question: "Compare photosynthesis and cellular respiration.",
    type: "Analysis",
    difficulty: "Hard",
  },
]

export function AIQuestionGenerator() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <CardTitle className="text-base font-semibold text-slate-900">
              AI Question Suggestions
            </CardTitle>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="h-3.5 w-3.5" />
            Regenerate
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-slate-500">
          Based on detected misconceptions and topic coverage:
        </p>

        {suggestedQuestions.map((item, index) => (
          <div
            key={index}
            className="group flex items-start justify-between rounded-lg border border-slate-200 bg-white p-3 transition-colors hover:border-indigo-200 hover:bg-indigo-50/30"
          >
            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium text-slate-700">
                {item.question}
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary" className="text-xs">
                  {item.type}
                </Badge>
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    item.difficulty === "Easy"
                      ? "border-green-200 text-green-700"
                      : item.difficulty === "Medium"
                        ? "border-yellow-200 text-yellow-700"
                        : "border-red-200 text-red-700"
                  }`}
                >
                  {item.difficulty}
                </Badge>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="opacity-0 transition-opacity group-hover:opacity-100"
            >
              <Plus className="h-4 w-4" />
              Add
            </Button>
          </div>
        ))}

        <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50/50 p-4">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            <input
              type="text"
              placeholder="Ask AI to generate a specific type of question..."
              className="flex-1 bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none"
            />
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
              Generate
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
