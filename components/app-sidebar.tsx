import {
  Building,
  CalendarCheck,
  CalendarCheck2,
  CalendarClock,
  FileUser,
  HandCoins,
  Home,
  List,
  ListCheck,
  Mailbox,
  ReceiptText,
  Settings,
  SquareUserRound,
  UserPen,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const hrItems = [
  {
    title: "Employee List",
    url: "#",
    icon: List,
  },
  {
    title: "Request",
    url: "#",
    icon: Mailbox,
  },
  {
    title: "Timekeeping",
    url: "#",
    icon: CalendarClock,
  },
  {
    title: "Payroll",
    url: "#",
    icon: HandCoins,
  },
  {
    title: "shift schedule",
    url: "#",
    icon: CalendarCheck,
  },
  {
    title: "Job Structure",
    url: "#",
    icon: Building,
  },
];
const employeeItems = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Schedule",
    url: "#",
    icon: CalendarCheck2,
  },
  {
    title: "Personal Details",
    url: "#",
    icon: UserPen,
  },
  {
    title: "Payslip",
    url: "#",
    icon: ReceiptText,
  },
  {
    title: "Attendance",
    url: "#",
    icon: ListCheck,
  },
  {
    title: "Leave Request",
    url: "#",
    icon: FileUser,
  },
];
const adminItems = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "User Management",
    url: "#",
    icon: SquareUserRound,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>HR</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {hrItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Employee</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {employeeItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Administrator</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
