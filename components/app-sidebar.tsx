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
    gradient: "from-indigo-500 to-purple-600",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-600",
    activeBg: "bg-indigo-50",
    activeText: "text-indigo-700",
    activeBorder: "border-indigo-200",
  },
  {
    title: "Live Session",
    icon: Radio,
    href: "/live-session",
    isLive: true,
    gradient: "from-emerald-500 to-teal-600",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    activeBg: "bg-emerald-50",
    activeText: "text-emerald-700",
    activeBorder: "border-emerald-200",
  },
  {
    title: "AI Questions",
    icon: Sparkles,
    href: "/ai-questions",
    gradient: "from-violet-500 to-purple-600",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    activeBg: "bg-violet-50",
    activeText: "text-violet-700",
    activeBorder: "border-violet-200",
  },
  {
    title: "Students",
    icon: Users,
    href: "/students",
    gradient: "from-sky-500 to-blue-600",
    iconBg: "bg-gradient-to-br from-sky-500 to-blue-600",
    activeBg: "bg-sky-50",
    activeText: "text-sky-700",
    activeBorder: "border-sky-200",
  },
  {
    title: "Insights",
    icon: BarChart3,
    href: "/insights",
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
    activeBg: "bg-amber-50",
    activeText: "text-amber-700",
    activeBorder: "border-amber-200",
  },
]

const studentExperienceItems = [
  {
    title: "Student View",
    icon: Smartphone,
    href: "/student-view",
    gradient: "from-pink-500 to-rose-600",
    iconBg: "bg-gradient-to-br from-pink-500 to-rose-600",
    activeBg: "bg-pink-50",
    activeText: "text-pink-700",
    activeBorder: "border-pink-200",
  },
]

const settingsNavItems = [
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
    gradient: "from-slate-500 to-gray-600",
    iconBg: "bg-gradient-to-br from-slate-500 to-gray-600",
    activeBg: "bg-slate-100",
    activeText: "text-slate-700",
    activeBorder: "border-slate-200",
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
            ? `${item.activeBg} ${item.activeText} border ${item.activeBorder} shadow-sm`
            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
        )}
      >
        <Link href={item.href}>
          <div className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg transition-all",
            isActive 
              ? item.iconBg + " shadow-md"
              : "bg-slate-100 group-hover:" + item.iconBg
          )}>
            <item.icon className={cn(
              "h-4 w-4 transition-colors",
              isActive ? "text-white" : "text-slate-500 group-hover:text-white"
            )} />
          </div>
          <span className="flex-1">{item.title}</span>
          {item.isLive && (
            <span className="relative flex h-2.5 w-2.5 mr-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
          )}
          {isActive && (
            <ChevronRight className="h-4 w-4 opacity-50" />
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )

  return (
    <Sidebar className="border-r border-slate-200 bg-white">
      <SidebarHeader className="border-b border-slate-100 px-4 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 transition-transform group-hover:scale-105">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-slate-900">ClassSense</span>
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
