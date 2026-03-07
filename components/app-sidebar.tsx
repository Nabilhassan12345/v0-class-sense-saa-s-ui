"use client"

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
    href: "#",
    isActive: false,
  },
  {
    title: "Live Session",
    icon: Radio,
    href: "#",
    isActive: true,
  },
  {
    title: "AI Question Generator",
    icon: Sparkles,
    href: "#",
    isActive: false,
  },
  {
    title: "Students",
    icon: Users,
    href: "#",
    isActive: false,
  },
  {
    title: "Insights",
    icon: BarChart3,
    href: "#",
    isActive: false,
  },
]

const settingsNavItems = [
  {
    title: "Settings",
    icon: Settings,
    href: "#",
    isActive: false,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-slate-200">
      <SidebarHeader className="border-b border-slate-200 px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
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
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className={
                      item.isActive
                        ? "bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }
                  >
                    <a href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.title === "Live Session" && (
                        <span className="ml-auto flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-slate-200 px-2 py-4">
        <SidebarMenu>
          {settingsNavItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className="text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              >
                <a href={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
