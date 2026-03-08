"use client"

import { useState, useEffect } from "react"
import { 
  Check, 
  Send, 
  Sparkles, 
  Clock, 
  Loader2, 
  GraduationCap, 
  ArrowRight, 
  User, 
  Hash,
  Zap,
  Star,
  Trophy,
  Lightbulb
} from "lucide-react"
import { cn } from "@/lib/utils"

type Step = "join" | "waiting" | "answer" | "reasoning" | "submitted"

// Same question and options as the Live Session teacher view
const answerOptions = [
  { 
    id: "A", 
    text: "Oxygen", 
    color: "from-sky-500 to-cyan-600", 
    bgLight: "bg-sky-50",
    bgMedium: "bg-sky-100",
    border: "border-sky-300",
    ring: "ring-sky-400",
    textColor: "text-sky-700",
    shadow: "shadow-sky-200"
  },
  { 
    id: "B", 
    text: "Glucose", 
    color: "from-emerald-500 to-teal-600", 
    bgLight: "bg-emerald-50",
    bgMedium: "bg-emerald-100",
    border: "border-emerald-300",
    ring: "ring-emerald-400",
    textColor: "text-emerald-700",
    shadow: "shadow-emerald-200"
  },
  { 
    id: "C", 
    text: "Carbon dioxide", 
    color: "from-amber-500 to-orange-600", 
    bgLight: "bg-amber-50",
    bgMedium: "bg-amber-100",
    border: "border-amber-300",
    ring: "ring-amber-400",
    textColor: "text-amber-700",
    shadow: "shadow-amber-200"
  },
  { 
    id: "D", 
    text: "Water", 
    color: "from-violet-500 to-purple-600", 
    bgLight: "bg-violet-50",
    bgMedium: "bg-violet-100",
    border: "border-violet-300",
    ring: "ring-violet-400",
    textColor: "text-violet-700",
    shadow: "shadow-violet-200"
  },
]

// Floating particles component for visual interest
function FloatingParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "absolute rounded-full opacity-20",
            i % 3 === 0 ? "bg-indigo-400" : i % 3 === 1 ? "bg-violet-400" : "bg-sky-400"
          )}
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }
      `}</style>
    </div>
  )
}

export default function StudentViewPage() {
  const [step, setStep] = useState<Step>("join")
  const [sessionCode, setSessionCode] = useState("")
  const [studentName, setStudentName] = useState("")
  const [isJoining, setIsJoining] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [reasoning, setReasoning] = useState("")
  const [timeLeft, setTimeLeft] = useState(45)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [streak, setStreak] = useState(3)
  const [points, setPoints] = useState(150)

  useEffect(() => {
    if (step === "answer" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1))
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [step, timeLeft])

  const handleJoinSession = async () => {
    if (sessionCode.trim() && studentName.trim()) {
      setIsJoining(true)
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsJoining(false)
      setStep("waiting")
      // Simulate waiting for question
      setTimeout(() => setStep("answer"), 2000)
    }
  }

  const handleAnswerSelect = (id: string) => {
    setSelectedAnswer(id)
  }

  const handleAnswerSubmit = () => {
    if (selectedAnswer) {
      setStep("reasoning")
    }
  }

  const handleReasoningSubmit = async () => {
    if (reasoning.trim()) {
      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitting(false)
      setShowConfetti(true)
      setPoints(prev => prev + 25)
      setStreak(prev => prev + 1)
      setStep("submitted")
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }

  const selectedOption = answerOptions.find(o => o.id === selectedAnswer)

  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-br from-slate-50 via-indigo-50/30 to-violet-50/50 relative">
      <FloatingParticles />
      
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-3 h-3 rounded-sm",
                ["bg-indigo-500", "bg-violet-500", "bg-emerald-500", "bg-amber-500", "bg-sky-500"][i % 5]
              )}
              style={{
                left: `${Math.random() * 100}%`,
                top: "-20px",
                animation: `confetti-fall ${2 + Math.random() * 2}s ease-out forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
          <style jsx>{`
            @keyframes confetti-fall {
              0% { transform: translateY(0) rotate(0deg); opacity: 1; }
              100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
            }
          `}</style>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-indigo-100 px-4 py-3 shadow-sm">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 opacity-20 blur-sm" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-200">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                ClassSense
              </h1>
              <p className="text-xs font-medium text-slate-500">Live Session</p>
            </div>
          </div>
          
          {/* Points & Streak */}
          {step !== "join" && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-3 py-1.5 border border-amber-200">
                <Zap className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-bold text-amber-700">{streak}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 px-3 py-1.5 border border-violet-200">
                <Star className="h-4 w-4 text-violet-500" />
                <span className="text-sm font-bold text-violet-700">{points}</span>
              </div>
            </div>
          )}
          
          {/* Timer */}
          {step === "answer" && (
            <div className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 font-mono text-base font-bold transition-all",
              timeLeft <= 10 
                ? "animate-pulse bg-gradient-to-r from-red-100 to-orange-100 text-red-600 border border-red-200" 
                : "bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 border border-indigo-200"
            )}>
              <Clock className="h-4 w-4" />
              <span>{timeLeft}s</span>
            </div>
          )}
        </div>
      </header>

      {/* Session Info Banner */}
      {step !== "join" && step !== "waiting" && (
        <div className="bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2.5 text-white">
          <div className="mx-auto max-w-lg flex items-center justify-center gap-3 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-semibold">Biology: Photosynthesis</span>
            <span className="text-white/60">|</span>
            <span className="text-white/80">Question 3 of 5</span>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      {step !== "join" && step !== "waiting" && (
        <div className="bg-white/60 backdrop-blur-sm border-b border-indigo-100 px-4 py-4">
          <div className="mx-auto flex max-w-lg items-center justify-center gap-3">
            {/* Step 1 */}
            <div className="flex items-center gap-2">
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-all duration-500",
                step === "answer" 
                  ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-200 scale-110" 
                  : "bg-gradient-to-br from-emerald-400 to-teal-500 text-white"
              )}>
                {step === "answer" ? "1" : <Check className="h-5 w-5" strokeWidth={3} />}
              </div>
              <span className={cn(
                "text-sm font-semibold hidden sm:block",
                step === "answer" ? "text-indigo-700" : "text-emerald-600"
              )}>
                Answer
              </span>
            </div>
            
            {/* Connector */}
            <div className={cn(
              "h-1 w-12 sm:w-20 rounded-full transition-all duration-700",
              step !== "answer" 
                ? "bg-gradient-to-r from-emerald-400 to-teal-400" 
                : "bg-slate-200"
            )} />
            
            {/* Step 2 */}
            <div className="flex items-center gap-2">
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-all duration-500",
                step === "reasoning" 
                  ? "bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-200 scale-110" 
                  : step === "submitted" 
                    ? "bg-gradient-to-br from-emerald-400 to-teal-500 text-white" 
                    : "bg-slate-100 text-slate-400 border-2 border-dashed border-slate-200"
              )}>
                {step === "submitted" ? <Check className="h-5 w-5" strokeWidth={3} /> : "2"}
              </div>
              <span className={cn(
                "text-sm font-semibold hidden sm:block transition-colors",
                step === "reasoning" ? "text-violet-700" : step === "submitted" ? "text-emerald-600" : "text-slate-400"
              )}>
                Explain
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex flex-1 flex-col p-4 sm:p-6 relative z-10">
        <div className="mx-auto w-full max-w-lg flex-1 flex flex-col">
          
          {/* JOIN SESSION */}
          {step === "join" && (
            <div className="flex flex-1 flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-6 duration-700">
              {/* Welcome Illustration */}
              <div className="relative mb-8">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-indigo-200 to-violet-200 opacity-50 blur-xl animate-pulse" />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-2xl shadow-indigo-300">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Welcome Card */}
              <div className="w-full rounded-3xl bg-white/80 backdrop-blur-sm p-8 shadow-2xl shadow-indigo-100 ring-1 ring-white">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                    Join Your Class
                  </h2>
                  <p className="mt-2 text-slate-500">
                    Enter the code from your teacher
                  </p>
                </div>

                {/* Session Code Input */}
                <div className="mb-5">
                  <label className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-100">
                      <Hash className="h-3.5 w-3.5 text-indigo-600" />
                    </div>
                    Session Code
                  </label>
                  <input
                    type="text"
                    placeholder="ABC123"
                    value={sessionCode}
                    onChange={(e) => setSessionCode(e.target.value.toUpperCase())}
                    maxLength={6}
                    className="w-full rounded-2xl border-2 border-indigo-200 bg-gradient-to-br from-indigo-50/50 to-violet-50/50 px-5 py-4 text-center text-3xl font-bold tracking-[0.4em] text-slate-800 placeholder-slate-300 transition-all focus:border-indigo-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                {/* Student Name Input */}
                <div className="mb-8">
                  <label className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-100">
                      <User className="h-3.5 w-3.5 text-violet-600" />
                    </div>
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full rounded-2xl border-2 border-violet-200 bg-gradient-to-br from-violet-50/50 to-purple-50/50 px-5 py-4 text-lg font-semibold text-slate-800 placeholder-slate-400 transition-all focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100"
                  />
                </div>

                {/* Join Button */}
                <button
                  onClick={handleJoinSession}
                  disabled={!sessionCode.trim() || !studentName.trim() || isJoining}
                  className={cn(
                    "group relative flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-lg font-bold text-white transition-all duration-300 overflow-hidden",
                    sessionCode.trim() && studentName.trim() && !isJoining
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 active:scale-[0.98]"
                      : "bg-slate-300 cursor-not-allowed"
                  )}
                >
                  {sessionCode.trim() && studentName.trim() && !isJoining && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                  {isJoining ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Session
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              {/* Help Text */}
              <p className="mt-6 text-center text-sm text-slate-500">
                Ask your teacher for the session code
              </p>
            </div>
          )}

          {/* WAITING FOR QUESTION */}
          {step === "waiting" && (
            <div className="flex flex-1 flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700">
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full bg-indigo-400/30 animate-ping" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 shadow-2xl">
                  <Loader2 className="h-10 w-10 text-white animate-spin" />
                </div>
              </div>
              <h2 className="mb-2 text-xl font-bold text-slate-800">
                Welcome, {studentName}!
              </h2>
              <p className="text-slate-500">Waiting for the next question...</p>
            </div>
          )}

          {/* ANSWER SELECTION */}
          {step === "answer" && (
            <div className="flex flex-1 flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Question Card */}
              <div className="mb-6 rounded-3xl bg-white/90 backdrop-blur-sm p-6 sm:p-8 shadow-xl shadow-indigo-100 ring-1 ring-indigo-100">
                <div className="mb-5 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-100 to-violet-100 px-4 py-2 border border-indigo-200">
                    <Lightbulb className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm font-bold text-indigo-700">Think carefully!</span>
                  </div>
                </div>
                <h2 className="text-center text-xl font-bold leading-relaxed text-slate-800 sm:text-2xl lg:text-3xl">
                  What is the main product of photosynthesis?
                </h2>
              </div>

              {/* Answer Options */}
              <div className="flex-1 grid grid-cols-1 gap-3 sm:gap-4">
                {answerOptions.map((option, index) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(option.id)}
                    style={{ animationDelay: `${index * 80}ms` }}
                    className={cn(
                      "animate-in fade-in slide-in-from-bottom-3 group relative w-full rounded-2xl border-2 p-4 sm:p-5 text-left transition-all duration-300 active:scale-[0.98] overflow-hidden",
                      selectedAnswer === option.id
                        ? `${option.bgMedium} ${option.border} shadow-xl ${option.shadow} scale-[1.02] ring-2 ${option.ring}`
                        : `bg-white/80 backdrop-blur-sm hover:bg-white ${option.border} hover:shadow-lg hover:scale-[1.01]`
                    )}
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    
                    <div className="relative flex items-center gap-4">
                      <div className={cn(
                        "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-xl font-bold transition-all duration-300",
                        selectedAnswer === option.id
                          ? `bg-gradient-to-br ${option.color} text-white shadow-lg`
                          : "bg-slate-100 text-slate-600 group-hover:bg-gradient-to-br group-hover:" + option.color + " group-hover:text-white"
                      )}>
                        {selectedAnswer === option.id ? (
                          <Check className="h-7 w-7" strokeWidth={3} />
                        ) : (
                          option.id
                        )}
                      </div>
                      <span className={cn(
                        "flex-1 text-lg sm:text-xl font-semibold transition-colors duration-300",
                        selectedAnswer === option.id ? option.textColor : "text-slate-700"
                      )}>
                        {option.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  onClick={handleAnswerSubmit}
                  disabled={!selectedAnswer}
                  className={cn(
                    "group relative flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-lg font-bold text-white transition-all duration-300 overflow-hidden",
                    selectedAnswer
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-xl shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-300 active:scale-[0.98]"
                      : "bg-slate-300 cursor-not-allowed"
                  )}
                >
                  {selectedAnswer && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                  Continue
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          )}

          {/* REASONING INPUT */}
          {step === "reasoning" && (
            <div className="flex flex-1 flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Selected Answer Summary */}
              {selectedOption && (
                <div className={cn(
                  "mb-6 rounded-2xl p-5 border-2 shadow-lg",
                  selectedOption.bgMedium,
                  selectedOption.border,
                  selectedOption.shadow
                )}>
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold bg-gradient-to-br text-white shadow-lg",
                      selectedOption.color
                    )}>
                      <Check className="h-6 w-6" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500">Your answer</p>
                      <p className={cn("text-lg font-bold", selectedOption.textColor)}>
                        {selectedOption.id}. {selectedOption.text}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Reasoning Card */}
              <div className="flex-1 rounded-3xl bg-white/90 backdrop-blur-sm p-6 sm:p-8 shadow-xl shadow-violet-100 ring-1 ring-violet-100">
                <div className="mb-5 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-4 py-2 border border-violet-200">
                    <Sparkles className="h-4 w-4 text-violet-600" />
                    <span className="text-sm font-bold text-violet-700">Share your thinking</span>
                  </div>
                </div>
                
                <h2 className="text-center text-xl font-bold text-slate-800 mb-2 sm:text-2xl">
                  Explain your reasoning
                </h2>
                <p className="text-center text-slate-500 mb-6">
                  Why did you choose this answer?
                </p>

                <textarea
                  value={reasoning}
                  onChange={(e) => setReasoning(e.target.value)}
                  placeholder="Write your explanation..."
                  rows={5}
                  className="w-full rounded-2xl border-2 border-violet-200 bg-gradient-to-br from-violet-50/50 to-purple-50/50 p-5 text-lg text-slate-800 placeholder-slate-400 transition-all focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-violet-100 resize-none"
                />

                <div className="mt-4 flex justify-end text-sm text-slate-500">
                  {reasoning.length} / 500 characters
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  onClick={handleReasoningSubmit}
                  disabled={!reasoning.trim() || isSubmitting}
                  className={cn(
                    "group relative flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-lg font-bold text-white transition-all duration-300 overflow-hidden",
                    reasoning.trim() && !isSubmitting
                      ? "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 shadow-xl shadow-violet-200 hover:shadow-2xl hover:shadow-violet-300 active:scale-[0.98]"
                      : "bg-slate-300 cursor-not-allowed"
                  )}
                >
                  {reasoning.trim() && !isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Reasoning
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* SUBMISSION CONFIRMED */}
          {step === "submitted" && (
            <div className="flex flex-1 flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-700">
              {/* Success Icon */}
              <div className="relative mb-8">
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 opacity-50 blur-xl animate-pulse" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-2xl shadow-emerald-200">
                  <Check className="h-14 w-14 text-white" strokeWidth={3} />
                </div>
              </div>

              {/* Success Message */}
              <h2 className="mb-3 text-2xl font-bold text-slate-800 sm:text-3xl">
                Answer Submitted!
              </h2>
              <p className="mb-8 text-center text-slate-500 text-lg">
                Great job! Waiting for teacher...
              </p>

              {/* Points Earned */}
              <div className="mb-8 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 p-6 border-2 border-amber-200 shadow-lg shadow-amber-100">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-200">
                    <Trophy className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-amber-600">Points Earned</p>
                    <p className="text-3xl font-bold text-amber-700">+25</p>
                  </div>
                </div>
              </div>

              {/* Your Answer Summary */}
              {selectedOption && (
                <div className={cn(
                  "w-full rounded-2xl p-5 border-2 shadow-lg",
                  selectedOption.bgLight,
                  selectedOption.border
                )}>
                  <p className="text-sm font-semibold text-slate-500 mb-2">Your answer</p>
                  <p className={cn("text-lg font-bold mb-3", selectedOption.textColor)}>
                    {selectedOption.id}. {selectedOption.text}
                  </p>
                  <p className="text-sm font-semibold text-slate-500 mb-1">Your reasoning</p>
                  <p className="text-slate-700">{reasoning}</p>
                </div>
              )}

              {/* Waiting Animation */}
              <div className="mt-8 flex items-center gap-3 text-slate-500">
                <Loader2 className="h-5 w-5 animate-spin text-indigo-500" />
                <span className="text-sm font-medium">Waiting for the next question...</span>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
