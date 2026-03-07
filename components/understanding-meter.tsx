"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UnderstandingMeter() {
  const understanding = 64
  const uncertain = 25
  const confused = 11

  // Calculate the angle for the gauge needle (0-180 degrees)
  // 0% = 180deg (left), 100% = 0deg (right)
  const needleAngle = 180 - (understanding / 100) * 180

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold text-slate-900">
          Understanding Meter
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          {/* Gauge Chart */}
          <div className="relative h-32 w-40">
            <svg viewBox="0 0 120 70" className="h-full w-full">
              {/* Background arc segments */}
              {/* Red segment (0-33%) */}
              <path
                d="M 10 60 A 50 50 0 0 1 43.4 16.34"
                fill="none"
                stroke="#ef4444"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Yellow segment (33-66%) */}
              <path
                d="M 43.4 16.34 A 50 50 0 0 1 76.6 16.34"
                fill="none"
                stroke="#eab308"
                strokeWidth="12"
              />
              {/* Green segment (66-100%) */}
              <path
                d="M 76.6 16.34 A 50 50 0 0 1 110 60"
                fill="none"
                stroke="#22c55e"
                strokeWidth="12"
                strokeLinecap="round"
              />
              
              {/* Needle */}
              <g transform={`rotate(${needleAngle}, 60, 60)`}>
                <line
                  x1="60"
                  y1="60"
                  x2="60"
                  y2="20"
                  stroke="#1e3a5f"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="60" cy="60" r="6" fill="#1e3a5f" />
              </g>
            </svg>
            
            {/* Center percentage */}
            <div className="absolute inset-0 flex items-end justify-center pb-0">
              <span className="text-3xl font-bold text-slate-900">{understanding}%</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-green-700">{understanding}%</span>
              <span className="text-sm text-slate-500">Understanding</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="text-sm font-medium text-yellow-700">{uncertain}%</span>
              <span className="text-sm text-slate-500">Uncertain</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-sm font-medium text-red-700">{confused}%</span>
              <span className="text-sm text-slate-500">Confused</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
