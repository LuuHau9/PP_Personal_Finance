"use client";

import {
  ArrowDownUp,
  ChartPie,
  House,
  PiggyBank,
  Receipt,
  SquareTerminal,
} from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/core/sidebar";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import Image from "next/image";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "/overview",
      icon: House,
      isActive: true,
    },
    {
      title: "Transactions",
      url: "/transactions",
      icon: ArrowDownUp,
      isActive: true,
    },
    {
      title: "Budgets",
      url: "/budgets",
      icon: ChartPie,
      isActive: true,
    },
    {
      title: "Pots",
      url: "/pots",
      icon: PiggyBank,
      isActive: true,
    },
    {
      title: "Recurring bills",
      url: "/recurring-bills",
      icon: Receipt,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="justify-center group-data-[collapsible=icon]:items-center">
        <Image
          src={"/images/logo.svg"}
          alt="application's logo"
          width={121}
          height={21}
          className="py-6 pl-6 group-data-[collapsible=icon]:hidden"
        />
        <Image
          src={"/images/logo-collapsed.svg"}
          alt="application's logo"
          width={16}
          height={28}
          className="pt-4 pb-6 hidden text-center group-data-[collapsible=icon]:block"
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger className="w-full h-10" />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
