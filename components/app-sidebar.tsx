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
  },
  {
    title: "Live Session",
    icon: Radio,
    href: "/live-session",
    isLive: true,
  },
  {
    title: "AI Questions",
    icon: Sparkles,
    href: "/ai-questions",
  },
  {
    title: "Students",
    icon: Users,
    href: "/students",
  },
  {
    title: "Insights",
    icon: BarChart3,
    href: "/insights",
  },
]

const settingsNavItems = [
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-slate-200 bg-white">
      <SidebarHeader className="border-b border-slate-100 px-4 py-5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1e3a5f] shadow-sm transition-transform group-hover:scale-105">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-lg font-bold text-slate-900">ClassSense</span>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Classroom Intelligence</p>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={cn(
                        "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-150",
                        isActive
                          ? "bg-[#1e3a5f] text-white shadow-sm"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      )}
                    >
                      <Link href={item.href}>
                        <item.icon className={cn(
                          "h-[18px] w-[18px] transition-colors",
                          isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                        )} />
                        <span className="flex-1">{item.title}</span>
                        {item.isLive && (
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                          </span>
                        )}
                        {isActive && (
                          <ChevronRight className="h-4 w-4 text-white/70" />
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
                    "group flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-150",
                    isActive
                      ? "bg-[#1e3a5f] text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  <Link href={item.href}>
                    <item.icon className={cn(
                      "h-[18px] w-[18px] transition-colors",
                      isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                    )} />
                    <span>{item.title}</span>
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
