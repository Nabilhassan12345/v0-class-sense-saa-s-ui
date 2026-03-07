"use client"

import { useState } from "react"
import { AlertTriangle, Lightbulb, ChevronRight, Sparkles, X, MessageSquare, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MisconceptionAlert() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <Card 
        className={cn(
          "border-2 border-red-200 bg-gradient-to-br from-red-50 via-red-50/80 to-white shadow-sm overflow-hidden transition-all duration-300",
          isHovered && "shadow-lg border-red-300 -translate-y-0.5"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader className="pb-3 border-b border-red-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg transition-all duration-300",
                isHovered && "scale-110 shadow-red-200"
              )}>
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-base font-bold text-red-900 flex items-center gap-2">
                  Misconception Alert
                  <Sparkles className="h-4 w-4 text-red-500 animate-pulse" />
                </CardTitle>
                <p className="text-xs text-red-600">AI-detected learning gap</p>
              </div>
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-red-100 border border-red-200">
              <Zap className="h-3 w-3 text-red-600" />
              <span className="text-xs font-bold text-red-700">High Priority</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-5 space-y-4">
          {/* Main Stats */}
          <div className="flex items-baseline gap-3">
            <span className="text-5xl font-bold text-red-600 tabular-nums">42%</span>
            <span className="text-sm text-red-700 font-medium">of students think:</span>
          </div>
          
          {/* Misconception Quote */}
          <div className="rounded-xl border-2 border-red-200 bg-white p-4 shadow-sm">
            <p className="text-lg font-semibold text-red-900 text-balance leading-relaxed">
              "Plants get their food from the soil."
            </p>
          </div>

          {/* Follow-up Suggestion */}
          <button 
            onClick={() => setIsExpanded(true)}
            className={cn(
              "w-full rounded-xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-amber-50/50 p-4 text-left transition-all duration-300",
              "hover:border-amber-300 hover:bg-amber-100/50 hover:shadow-md active:scale-[0.99]"
            )}
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 shadow-md flex-shrink-0">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-amber-800">Suggested Follow-up Question</p>
                <p className="mt-1.5 text-sm text-amber-700 leading-relaxed">
                  "If plants get food from soil, why can plants grow in water alone with sunlight?"
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-amber-600 mt-1 transition-transform group-hover:translate-x-1" />
            </div>
          </button>

          {/* Action Button */}
          <Button 
            onClick={() => setIsExpanded(true)}
            className={cn(
              "w-full justify-between rounded-xl py-6 transition-all duration-300",
              "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
              "shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
            )}
          >
            <span className="flex items-center gap-2 font-semibold">
              <MessageSquare className="h-4 w-4" />
              Address This Misconception
            </span>
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardContent>
      </Card>

      {/* Expanded Modal */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsExpanded(false)}
        >
          <div 
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Address Misconception</h3>
                  <p className="text-sm text-slate-500">8 students affected</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="rounded-xl p-2 hover:bg-slate-100 transition-all duration-200 hover:rotate-90"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            {/* The Misconception */}
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-4 mb-5">
              <p className="text-xs font-bold uppercase tracking-wider text-red-600 mb-2">Students Believe</p>
              <p className="text-lg font-semibold text-red-900">
                "Plants get their food from the soil."
              </p>
            </div>

            {/* The Truth */}
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-4 mb-5">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">Scientific Reality</p>
              <p className="text-sm text-emerald-800 leading-relaxed">
                Plants produce glucose (their food) through <span className="font-bold">photosynthesis</span> using sunlight, carbon dioxide, and water. Soil provides <span className="font-bold">minerals</span> (like nitrogen and phosphorus), but these are not food - they're building blocks.
              </p>
            </div>

            {/* Suggested Actions */}
            <div className="space-y-3">
              <p className="text-sm font-bold text-slate-700">Suggested Actions:</p>
              
              <button className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 p-4 text-left transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:shadow-sm active:scale-[0.99]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100">
                    <Lightbulb className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Ask Follow-up Question</p>
                    <p className="text-xs text-slate-500">Prompt critical thinking</p>
                  </div>
                </div>
              </button>
              
              <button className="w-full rounded-xl border-2 border-slate-200 bg-slate-50 p-4 text-left transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 hover:shadow-sm active:scale-[0.99]">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100">
                    <MessageSquare className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Show Visual Explanation</p>
                    <p className="text-xs text-slate-500">Display photosynthesis diagram</p>
                  </div>
                </div>
              </button>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => setIsExpanded(false)}
                className="flex-1 rounded-xl border-slate-200 hover:bg-slate-50 transition-all active:scale-[0.98]"
              >
                Dismiss
              </Button>
              <Button
                className="flex-1 rounded-xl bg-gradient-to-r from-[#1e3a5f] to-[#2d4a6f] hover:from-[#16324d] hover:to-[#1e3a5f] shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
              >
                Send Explanation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
