"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function UnderstandingMeter() {
  const understanding = 64
  const uncertain = 25
  const confused = 11

  // Calculate the angle for the gauge needle (0-180 degrees)
  // 0% = 180deg (left), 100% = 0deg (right)
  const needleAngle = 180 - (understanding / 100) * 180

  return (
    <Card className="border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-slate-900">
            Understanding Meter
          </CardTitle>
          <div className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
            <TrendingUp className="h-3 w-3" />
            +12%
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          {/* Gauge Chart */}
          <div className="relative h-36 w-44">
            <svg viewBox="0 0 120 70" className="h-full w-full">
              {/* Background arc segments */}
              {/* Red segment (0-33%) */}
              <path
                d="M 10 60 A 50 50 0 0 1 43.4 16.34"
                fill="none"
                stroke="#fecaca"
                strokeWidth="14"
                strokeLinecap="round"
                className="transition-all duration-500"
              />
              {/* Yellow segment (33-66%) */}
              <path
                d="M 43.4 16.34 A 50 50 0 0 1 76.6 16.34"
                fill="none"
                stroke="#fef08a"
                strokeWidth="14"
                className="transition-all duration-500"
              />
              {/* Green segment (66-100%) */}
              <path
                d="M 76.6 16.34 A 50 50 0 0 1 110 60"
                fill="none"
                stroke="#bbf7d0"
                strokeWidth="14"
                strokeLinecap="round"
                className="transition-all duration-500"
              />
              
              {/* Active overlay based on value */}
              <path
                d="M 10 60 A 50 50 0 0 1 43.4 16.34"
                fill="none"
                stroke="#ef4444"
                strokeWidth="14"
                strokeLinecap="round"
                className="transition-all duration-700"
                style={{ opacity: understanding < 33 ? 1 : 0.3 }}
              />
              <path
                d="M 43.4 16.34 A 50 50 0 0 1 76.6 16.34"
                fill="none"
                stroke="#eab308"
                strokeWidth="14"
                className="transition-all duration-700"
                style={{ opacity: understanding >= 33 && understanding < 66 ? 1 : 0.3 }}
              />
              <path
                d="M 76.6 16.34 A 50 50 0 0 1 110 60"
                fill="none"
                stroke="#22c55e"
                strokeWidth="14"
                strokeLinecap="round"
                className="transition-all duration-700"
                style={{ opacity: understanding >= 66 ? 1 : 0.3 }}
              />
              
              {/* Needle */}
              <g 
                style={{ 
                  transform: `rotate(${needleAngle}deg)`,
                  transformOrigin: '60px 60px',
                  transition: 'transform 0.7s ease-out'
                }}
              >
                <line
                  x1="60"
                  y1="60"
                  x2="60"
                  y2="18"
                  stroke="#1e3a5f"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="60" cy="60" r="7" fill="#1e3a5f" />
                <circle cx="60" cy="60" r="4" fill="white" />
              </g>
            </svg>
            
            {/* Center percentage */}
            <div className="absolute inset-0 flex items-end justify-center pb-1">
              <span className="text-3xl font-bold text-slate-900">{understanding}%</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3">
            <button className="group flex items-center gap-3 rounded-xl p-2 -m-2 transition-colors hover:bg-green-50">
              <div className="h-4 w-4 rounded-full bg-green-500 ring-4 ring-green-100 transition-all group-hover:ring-green-200" />
              <div className="text-left">
                <span className="text-lg font-bold text-green-700">{understanding}%</span>
                <p className="text-xs text-slate-500">Understanding</p>
              </div>
            </button>
            <button className="group flex items-center gap-3 rounded-xl p-2 -m-2 transition-colors hover:bg-amber-50">
              <div className="h-4 w-4 rounded-full bg-amber-500 ring-4 ring-amber-100 transition-all group-hover:ring-amber-200" />
              <div className="text-left">
                <span className="text-lg font-bold text-amber-700">{uncertain}%</span>
                <p className="text-xs text-slate-500">Uncertain</p>
              </div>
            </button>
            <button className="group flex items-center gap-3 rounded-xl p-2 -m-2 transition-colors hover:bg-red-50">
              <div className="h-4 w-4 rounded-full bg-red-500 ring-4 ring-red-100 transition-all group-hover:ring-red-200" />
              <div className="text-left">
                <span className="text-lg font-bold text-red-700">{confused}%</span>
                <p className="text-xs text-slate-500">Confused</p>
              </div>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
