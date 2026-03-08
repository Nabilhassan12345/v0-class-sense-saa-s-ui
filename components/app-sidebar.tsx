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
  Presentation,
  MonitorPlay,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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
    color: "indigo",
  },
  {
    title: "Live Session",
    icon: Radio,
    href: "/live-session",
    isLive: true,
    color: "emerald",
  },
  {
    title: "AI Questions",
    icon: Sparkles,
    href: "/ai-questions",
    color: "purple",
  },
  {
    title: "Students",
    icon: Users,
    href: "/students",
    color: "sky",
  },
  {
    title: "Insights",
    icon: BarChart3,
    href: "/insights",
    color: "amber",
  },
]

const studentExperienceItems = [
  {
    title: "Student View",
    icon: Smartphone,
    href: "/student-view",
    color: "violet",
  },
]

const settingsNavItems = [
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    color: "slate",
  },
]

const colorStyles: Record<string, {
  iconColor: string
  iconBg: string
  hoverBg: string
  activeBg: string
  activeText: string
  activeBorder: string
  iconBgActive: string
  gradientFrom: string
  gradientTo: string
}> = {
  indigo: {
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-50",
    hoverBg: "hover:bg-indigo-50/80",
    activeBg: "bg-gradient-to-r from-indigo-50 to-indigo-100/80",
    activeText: "text-indigo-700",
    activeBorder: "border-indigo-200",
    iconBgActive: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-indigo-600",
  },
  emerald: {
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-50",
    hoverBg: "hover:bg-emerald-50/80",
    activeBg: "bg-gradient-to-r from-emerald-50 to-emerald-100/80",
    activeText: "text-emerald-700",
    activeBorder: "border-emerald-200",
    iconBgActive: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600",
  },
  purple: {
    iconColor: "text-purple-500",
    iconBg: "bg-purple-50",
    hoverBg: "hover:bg-purple-50/80",
    activeBg: "bg-gradient-to-r from-purple-50 to-purple-100/80",
    activeText: "text-purple-700",
    activeBorder: "border-purple-200",
    iconBgActive: "bg-gradient-to-br from-purple-500 to-purple-600",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600",
  },
  sky: {
    iconColor: "text-sky-500",
    iconBg: "bg-sky-50",
    hoverBg: "hover:bg-sky-50/80",
    activeBg: "bg-gradient-to-r from-sky-50 to-sky-100/80",
    activeText: "text-sky-700",
    activeBorder: "border-sky-200",
    iconBgActive: "bg-gradient-to-br from-sky-500 to-sky-600",
    gradientFrom: "from-sky-500",
    gradientTo: "to-sky-600",
  },
  amber: {
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    hoverBg: "hover:bg-amber-50/80",
    activeBg: "bg-gradient-to-r from-amber-50 to-amber-100/80",
    activeText: "text-amber-700",
    activeBorder: "border-amber-200",
    iconBgActive: "bg-gradient-to-br from-amber-500 to-amber-600",
    gradientFrom: "from-amber-500",
    gradientTo: "to-amber-600",
  },
  violet: {
    iconColor: "text-violet-500",
    iconBg: "bg-violet-50",
    hoverBg: "hover:bg-violet-50/80",
    activeBg: "bg-gradient-to-r from-violet-50 to-violet-100/80",
    activeText: "text-violet-700",
    activeBorder: "border-violet-200",
    iconBgActive: "bg-gradient-to-br from-violet-500 to-violet-600",
    gradientFrom: "from-violet-500",
    gradientTo: "to-violet-600",
  },
  slate: {
    iconColor: "text-slate-500",
    iconBg: "bg-slate-100",
    hoverBg: "hover:bg-slate-100/80",
    activeBg: "bg-gradient-to-r from-slate-100 to-slate-200/80",
    activeText: "text-slate-700",
    activeBorder: "border-slate-300",
    iconBgActive: "bg-gradient-to-br from-slate-500 to-slate-600",
    gradientFrom: "from-slate-500",
    gradientTo: "to-slate-600",
  },
}

export function AppSidebar() {
  const pathname = usePathname()

  const renderNavItem = (item: typeof mainNavItems[0], isActive: boolean) => {
    const styles = colorStyles[item.color]
    
    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton
          asChild
          isActive={isActive}
          className={cn(
            "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 font-medium transition-all duration-200",
            isActive
              ? `${styles.activeBg} ${styles.activeText} border ${styles.activeBorder} shadow-sm`
              : `${styles.hoverBg} text-slate-600 hover:text-slate-900`
          )}
        >
          <Link href={item.href}>
            <div className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200",
              isActive 
                ? `${styles.iconBgActive} shadow-lg`
                : `${styles.iconBg} border border-white shadow-sm group-hover:scale-110 group-hover:shadow-md`
            )}>
              <item.icon className={cn(
                "h-[18px] w-[18px] transition-all duration-200",
                isActive ? "text-white" : styles.iconColor
              )} />
            </div>
            <span className={cn(
              "flex-1 text-[15px] font-medium transition-colors duration-200",
              isActive ? styles.activeText : "text-slate-700"
            )}>{item.title}</span>
            {"isLive" in item && item.isLive && (
              <span className="relative flex h-2.5 w-2.5 mr-1">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
              </span>
            )}
            {isActive && (
              <ChevronRight className={cn("h-4 w-4 opacity-50", styles.activeText)} />
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <Sidebar className="border-r border-slate-200/80 bg-gradient-to-b from-white via-slate-50/30 to-slate-100/50">
      {/* Brand Header */}
      <SidebarHeader className="border-b border-slate-100 px-4 py-5">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 shadow-xl shadow-indigo-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-indigo-500/40">
            <GraduationCap className="h-6 w-6 text-white" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/0 to-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
              ClassSense
            </span>
            <span className="text-[11px] font-semibold text-indigo-500/80 uppercase tracking-widest">
              AI Classroom Intelligence
            </span>
          </div>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="px-3 py-5">
        {/* Teacher Tools Section */}
        <SidebarGroup>
          <div className="mb-3 px-2 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100">
              <Presentation className="h-3.5 w-3.5 text-indigo-600" />
            </div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Teacher Tools
            </span>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1.5">
              {mainNavItems.map((item) => renderNavItem(item, pathname === item.href))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Divider */}
        <div className="my-5 mx-2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Student Experience Section */}
        <SidebarGroup>
          <div className="mb-3 px-2 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-violet-100 to-purple-100">
              <MonitorPlay className="h-3.5 w-3.5 text-violet-600" />
            </div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Student Experience
            </span>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1.5">
              {studentExperienceItems.map((item) => renderNavItem(item, pathname === item.href))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      {/* Footer with Settings */}
      <SidebarFooter className="border-t border-slate-100 bg-slate-50/50 px-3 py-3">
        <SidebarMenu>
          {settingsNavItems.map((item) => renderNavItem(item, pathname === item.href))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
