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
  Smartphone,
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
    iconColor: "text-indigo-500",
    textColor: "text-indigo-600",
    hoverBg: "hover:bg-indigo-50",
    activeBg: "bg-indigo-100",
    activeText: "text-indigo-700",
    activeBorder: "border-indigo-300",
    iconBgActive: "bg-indigo-500",
  },
  {
    title: "Live Session",
    icon: Radio,
    href: "/live-session",
    isLive: true,
    iconColor: "text-emerald-500",
    textColor: "text-emerald-600",
    hoverBg: "hover:bg-emerald-50",
    activeBg: "bg-emerald-100",
    activeText: "text-emerald-700",
    activeBorder: "border-emerald-300",
    iconBgActive: "bg-emerald-500",
  },
  {
    title: "AI Questions",
    icon: Sparkles,
    href: "/ai-questions",
    iconColor: "text-purple-500",
    textColor: "text-purple-600",
    hoverBg: "hover:bg-purple-50",
    activeBg: "bg-purple-100",
    activeText: "text-purple-700",
    activeBorder: "border-purple-300",
    iconBgActive: "bg-purple-500",
  },
  {
    title: "Students",
    icon: Users,
    href: "/students",
    iconColor: "text-sky-500",
    textColor: "text-sky-600",
    hoverBg: "hover:bg-sky-50",
    activeBg: "bg-sky-100",
    activeText: "text-sky-700",
    activeBorder: "border-sky-300",
    iconBgActive: "bg-sky-500",
  },
  {
    title: "Insights",
    icon: BarChart3,
    href: "/insights",
    iconColor: "text-amber-500",
    textColor: "text-amber-600",
    hoverBg: "hover:bg-amber-50",
    activeBg: "bg-amber-100",
    activeText: "text-amber-700",
    activeBorder: "border-amber-300",
    iconBgActive: "bg-amber-500",
  },
]

const studentExperienceItems = [
  {
    title: "Student View",
    icon: Smartphone,
    href: "/student-view",
    iconColor: "text-violet-500",
    textColor: "text-violet-600",
    hoverBg: "hover:bg-violet-50",
    activeBg: "bg-violet-100",
    activeText: "text-violet-700",
    activeBorder: "border-violet-300",
    iconBgActive: "bg-violet-500",
  },
]

const settingsNavItems = [
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    iconColor: "text-slate-500",
    textColor: "text-slate-600",
    hoverBg: "hover:bg-slate-100",
    activeBg: "bg-slate-200",
    activeText: "text-slate-700",
    activeBorder: "border-slate-300",
    iconBgActive: "bg-slate-500",
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  const renderNavItem = (item: typeof mainNavItems[0], isActive: boolean) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className={cn(
          "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-200",
          isActive
            ? `${item.activeBg} ${item.activeText} border ${item.activeBorder}`
            : `${item.hoverBg} ${item.textColor}`
        )}
      >
        <Link href={item.href}>
          <div className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200",
            isActive 
              ? `${item.iconBgActive} shadow-md`
              : "bg-white shadow-sm border border-slate-200 group-hover:scale-110 group-hover:shadow-md"
          )}>
            <item.icon className={cn(
              "h-4 w-4 transition-all duration-200",
              isActive ? "text-white" : item.iconColor
            )} />
          </div>
          <span className={cn(
            "flex-1 transition-colors duration-200",
            isActive ? item.activeText : `text-slate-700 group-hover:${item.textColor}`
          )}>{item.title}</span>
          {"isLive" in item && item.isLive && (
            <span className="relative flex h-2.5 w-2.5 mr-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
          )}
          {isActive && (
            <ChevronRight className={cn("h-4 w-4", item.activeText, "opacity-60")} />
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )

  return (
    <Sidebar className="border-r border-slate-200 bg-gradient-to-b from-white to-slate-50/50">
      <SidebarHeader className="border-b border-slate-100 px-4 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 transition-transform group-hover:scale-105">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ClassSense</span>
            <p className="text-[10px] font-medium text-indigo-500 uppercase tracking-wider">Classroom Intelligence</p>
          </div>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="px-3 py-4">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Teacher Tools
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainNavItems.map((item) => renderNavItem(item, pathname === item.href))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Student Experience Section */}
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel className="mb-2 px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Student Experience
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {studentExperienceItems.map((item) => renderNavItem(item, pathname === item.href))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-slate-100 px-3 py-3">
        <SidebarMenu>
          {settingsNavItems.map((item) => renderNavItem(item, pathname === item.href))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
