"use client"

import { useState, useEffect } from "react"
import { AlertTriangle, Lightbulb, ChevronRight, X, Zap, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function useAnimatedNumber(target: number, duration: number = 1000) {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    const steps = 30
    const interval = duration / steps
    let step = 0
    
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * easeOut))
      
      if (step >= steps) {
        clearInterval(timer)
        setValue(target)
      }
    }, interval)
    
    return () => clearInterval(timer)
  }, [target, duration])
  
  return value
}

export function MisconceptionCard() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const animatedPercent = useAnimatedNumber(42)

  return (
    <>
      <div 
        className={cn(
          "card-coral rounded-2xl shadow-lg overflow-hidden transition-all duration-300",
          isHovered ? "shadow-xl shadow-rose-200 scale-[1.01]" : "shadow-rose-100"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header with Alert Badge */}
        <div className="px-6 py-5 border-b border-rose-200/50 bg-white/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-500 shadow-lg shadow-rose-200 transition-transform duration-300",
                isHovered && "scale-110 rotate-3"
              )}>
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-slate-900">Misconception Alert</h2>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-200 to-rose-300 border border-rose-400 animate-pulse">
              <Zap className="h-4 w-4 text-rose-700" />
              <span className="text-sm font-bold text-rose-800 uppercase tracking-wide">Active</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 bg-white/30">
          {/* Stat */}
          <div className="flex items-baseline gap-3">
            <span className="text-5xl lg:text-6xl font-black text-rose-600 tabular-nums">{animatedPercent}%</span>
            <span className="text-lg text-slate-600">of students believe:</span>
          </div>

          {/* Misconception Quote */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-rose-100 to-rose-200 border-2 border-rose-300 shadow-inner">
            <p className="text-lg lg:text-xl font-semibold text-rose-800 leading-relaxed italic">
              "Plants get their food from the soil."
            </p>
          </div>

          {/* Suggested Follow-up */}
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full p-5 rounded-xl bg-gradient-to-r from-amber-100 to-amber-200 border-2 border-amber-300 text-left transition-all duration-300 hover:shadow-lg hover:shadow-amber-100 hover:scale-[1.01] active:scale-[0.99] group"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg shadow-amber-200 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-amber-800 uppercase tracking-wide mb-1">Suggested Follow-up</p>
                <p className="text-base lg:text-lg text-amber-900 leading-relaxed font-medium">
                  "If plants get food from soil, why can they grow in water alone?"
                </p>
              </div>
              <ChevronRight className="h-6 w-6 text-amber-600 mt-1 transition-transform group-hover:translate-x-1" />
            </div>
          </button>

          {/* Action Button */}
          <Button
            onClick={() => setIsExpanded(true)}
            size="lg"
            className="w-full justify-between bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white text-lg font-bold rounded-xl h-14 shadow-lg shadow-rose-200 transition-all duration-300 hover:shadow-xl hover:shadow-rose-300 hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>Address This Misconception</span>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Modal */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsExpanded(false)}
        >
          <div 
            className="w-full max-w-lg rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-gradient-to-r from-rose-50 to-rose-100">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-red-500 shadow-lg shadow-rose-200">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Address Misconception</h3>
                  <p className="text-sm text-slate-500 font-medium">8 students affected</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 rounded-xl hover:bg-rose-100 transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* The Misconception */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-rose-100 to-rose-200 border-2 border-rose-300">
                <p className="text-xs font-bold text-rose-700 uppercase tracking-wider mb-2">Students Believe</p>
                <p className="text-lg font-semibold text-rose-800 italic">
                  "Plants get their food from the soil."
                </p>
              </div>

              {/* The Truth */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-100 to-emerald-200 border-2 border-emerald-300">
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">Scientific Reality</p>
                <p className="text-base text-emerald-800 leading-relaxed">
                  Plants produce glucose through <span className="font-bold">photosynthesis</span> using sunlight, CO2, and water. Soil provides minerals, not food.
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Suggested Actions</p>
                
                <button className="w-full p-4 rounded-xl border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100 text-left transition-all duration-200 hover:shadow-md hover:border-amber-300 hover:scale-[1.01] active:scale-[0.99]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 shadow-md">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-800">Ask Follow-up Question</p>
                      <p className="text-sm text-slate-500">Prompt critical thinking</p>
                    </div>
                  </div>
                </button>

                <button className="w-full p-4 rounded-xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 to-indigo-100 text-left transition-all duration-200 hover:shadow-md hover:border-indigo-300 hover:scale-[1.01] active:scale-[0.99]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-md">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-slate-800">Show Explanation</p>
                      <p className="text-sm text-slate-500">Display correct concept to class</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 px-6 py-5 border-t border-slate-200 bg-slate-50">
              <Button
                variant="outline"
                onClick={() => setIsExpanded(false)}
                className="flex-1 border-2 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 font-semibold rounded-xl h-12"
              >
                Dismiss
              </Button>
              <Button className="flex-1 btn-premium text-white font-semibold rounded-xl h-12">
                Send Explanation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
