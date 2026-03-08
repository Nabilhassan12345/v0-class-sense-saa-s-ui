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

const studentExperienceItems = [
  {
    title: "Student View",
    icon: Smartphone,
    href: "/student-view",
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

  const renderNavItem = (item: typeof mainNavItems[0], isActive: boolean) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className={cn(
          "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium transition-all duration-200",
          isActive
            ? "bg-slate-800 text-white shadow-md"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        )}
      >
        <Link href={item.href}>
          <item.icon className={cn(
            "h-5 w-5 transition-colors",
            isActive ? "text-white" : "text-slate-500"
          )} />
          <span className="flex-1">{item.title}</span>
          {item.isLive && (
            <span className="relative flex h-2.5 w-2.5 mr-1">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
          )}
          {isActive && (
            <ChevronRight className="h-4 w-4 text-white/70" />
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )

  return (
    <Sidebar className="border-r border-slate-200 bg-white">
      <SidebarHeader className="border-b border-slate-100 px-4 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25 transition-transform group-hover:scale-105">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-lg font-bold text-slate-900">ClassSense</span>
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Classroom Intelligence</p>
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
