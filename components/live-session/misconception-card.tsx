"use client"

import { useState } from "react"
import { AlertTriangle, Lightbulb, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MisconceptionCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <div className="bg-white border border-[#E5E7EB] rounded-xl shadow-sm overflow-hidden">
        {/* Header with Alert Badge */}
        <div className="px-5 py-4 border-b border-[#E5E7EB]">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-[#111827]">Detected Misconception</h2>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FEE2E2] border border-[#fecaca]">
              <AlertTriangle className="h-3.5 w-3.5 text-[#991B1B]" />
              <span className="text-xs font-semibold text-[#991B1B]">Alert</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Stat */}
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#991B1B] tabular-nums">42%</span>
            <span className="text-sm text-[#6B7280]">of students believe:</span>
          </div>

          {/* Misconception Quote */}
          <div className="p-4 rounded-lg bg-[#FEE2E2] border border-[#fecaca]">
            <p className="text-sm font-medium text-[#991B1B] leading-relaxed">
              "Plants get their food from the soil."
            </p>
          </div>

          {/* Suggested Follow-up */}
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full p-4 rounded-lg bg-[#FEF3C7] border border-[#fde68a] text-left transition-all duration-200 hover:bg-[#fef3c7]/80 hover:shadow-sm active:scale-[0.99] group"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f59e0b] flex-shrink-0">
                <Lightbulb className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#92400E] mb-1">Suggested Follow-up</p>
                <p className="text-sm text-[#92400E] leading-relaxed">
                  "If plants get food from soil, why can they grow in water alone?"
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-[#92400E] mt-1 transition-transform group-hover:translate-x-0.5" />
            </div>
          </button>

          {/* Action Button */}
          <Button
            onClick={() => setIsExpanded(true)}
            className="w-full justify-between bg-[#991B1B] hover:bg-[#7f1d1d] text-white transition-all duration-200 hover:shadow-md active:scale-[0.98]"
          >
            <span className="font-medium">Address Misconception</span>
            <ChevronRight className="h-4 w-4" />
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
            className="w-full max-w-md rounded-xl bg-white shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FEE2E2]">
                  <AlertTriangle className="h-5 w-5 text-[#991B1B]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#111827]">Address Misconception</h3>
                  <p className="text-xs text-[#6B7280]">8 students affected</p>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-2 rounded-lg hover:bg-[#F8FAFC] transition-colors"
              >
                <X className="h-4 w-4 text-[#6B7280]" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 space-y-4">
              {/* The Misconception */}
              <div className="p-4 rounded-lg bg-[#FEE2E2] border border-[#fecaca]">
                <p className="text-xs font-semibold text-[#991B1B] uppercase tracking-wider mb-1">Students Believe</p>
                <p className="text-sm font-medium text-[#991B1B]">
                  "Plants get their food from the soil."
                </p>
              </div>

              {/* The Truth */}
              <div className="p-4 rounded-lg bg-[#DCFCE7] border border-[#bbf7d0]">
                <p className="text-xs font-semibold text-[#166534] uppercase tracking-wider mb-1">Scientific Reality</p>
                <p className="text-sm text-[#166534] leading-relaxed">
                  Plants produce glucose through <span className="font-semibold">photosynthesis</span> using sunlight, CO2, and water. Soil provides minerals, not food.
                </p>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider">Suggested Actions</p>
                
                <button className="w-full p-3 rounded-lg border border-[#E5E7EB] bg-white text-left transition-all duration-150 hover:bg-[#F8FAFC] hover:border-[#d1d5db] active:scale-[0.99]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FEF3C7]">
                      <Lightbulb className="h-4 w-4 text-[#92400E]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#111827]">Ask Follow-up Question</p>
                      <p className="text-xs text-[#6B7280]">Prompt critical thinking</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 px-5 py-4 border-t border-[#E5E7EB]">
              <Button
                variant="outline"
                onClick={() => setIsExpanded(false)}
                className="flex-1 border-[#E5E7EB] text-[#6B7280] hover:text-[#111827] hover:bg-[#F8FAFC]"
              >
                Dismiss
              </Button>
              <Button className="flex-1 bg-[#2563EB] hover:bg-[#1d4ed8] text-white">
                Send Explanation
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
