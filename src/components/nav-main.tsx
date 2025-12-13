"use client";

import { type LucideIcon } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/core/sidebar";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const navigator = useRouter();
  const path = usePathname();
  const mainMenuItem = path.split("/")[1];

  const [currentTab, setCurrentTab] = useState(
    mainMenuItem ? mainMenuItem.toLowerCase() : null,
  );
  const handleClickMenuItem = (url: string, name: string) => {
    setCurrentTab(name.toLowerCase());
    navigator.push(url);
  };

  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title} className={"text-sidebar-primary"}>
          <SidebarMenuButton
            isActive={currentTab === item.title.toLowerCase()}
            tooltip={item.title}
            size={"lg"}
            onClick={() => handleClickMenuItem(item.url, item.title)}
          >
            {item.icon && <item.icon />}
            <span>{item.title}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
