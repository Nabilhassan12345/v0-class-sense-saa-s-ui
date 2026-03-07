"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  LayoutDashboard,
  Radio,
  Sparkles,
  Users,
  BarChart3,
  Settings,
  GraduationCap,
  ChevronRight,
  Zap,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const mainNavItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    gradient: "from-slate-600 to-gray-700",
  },
  {
    title: "Live Session",
    icon: Radio,
    href: "/live-session",
    isLive: true,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "AI Questions",
    icon: Sparkles,
    href: "/ai-questions",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Students",
    icon: Users,
    href: "/students",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Insights",
    icon: BarChart3,
    href: "/insights",
    gradient: "from-amber-500 to-orange-600",
  },
]

const settingsNavItems = [
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    gradient: "from-slate-500 to-gray-600",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-slate-200/50 bg-gradient-to-b from-white to-slate-50/50">
      <SidebarHeader className="border-b border-slate-100 px-4 py-5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 transition-transform group-hover:scale-105 group-hover:rotate-3">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ClassSense</span>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Classroom Intelligence</p>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-3 py-5">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-3 px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1.5">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        "group relative flex items-center gap-3 rounded-xl px-3 py-3 font-semibold transition-all duration-200",
                        isActive
                          ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg`
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      <Link href={item.href}>
                        <div className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-lg transition-all",
                          isActive 
                            ? "bg-white/20" 
                            : `bg-gradient-to-br ${item.gradient} shadow-md`
                        )}>
                          <item.icon className={cn(
                            "h-5 w-5 transition-colors",
                            isActive ? "text-white" : "text-white"
                          )} />
                        </div>
                        <span className="flex-1 text-base">{item.title}</span>
                        {item.isLive && (
                          <span className="relative flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                          </span>
                        )}
                        {isActive && (
                          <ChevronRight className="h-5 w-5 text-white/70" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-slate-100 px-3 py-4">
        <SidebarMenu>
          {settingsNavItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-3 py-3 font-semibold transition-all duration-200",
                    isActive
                      ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg`
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <Link href={item.href}>
                    <div className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-all",
                      isActive 
                        ? "bg-white/20" 
                        : `bg-gradient-to-br ${item.gradient} shadow-md`
                    )}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-base">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
