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
  },
  {
    title: "AI Question Generator",
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
    <Sidebar className="border-r border-slate-200">
      <SidebarHeader className="border-b border-slate-200 px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e3a5f]">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold text-slate-900">ClassSense</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-slate-500 uppercase tracking-wider px-2">
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={
                        isActive
                          ? "bg-blue-50 text-[#1e3a5f] hover:bg-blue-100"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        {item.title === "Live Session" && (
                          <span className="ml-auto flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
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
      <SidebarFooter className="border-t border-slate-200 px-2 py-4">
        <SidebarMenu>
          {settingsNavItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  className={
                    isActive
                      ? "bg-blue-50 text-[#1e3a5f] hover:bg-blue-100"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }
                >
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
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
