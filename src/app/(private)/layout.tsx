import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/core/sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div
          data-slot="container"
          className="flex flex-col flex-1 w-full px-4 py-6 md:px-10 md:py-8 gap-8"
        >
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
