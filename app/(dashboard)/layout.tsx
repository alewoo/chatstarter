"use client";

import { RedirectToSignIn } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { Sidebar } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Authenticated><SidebarProvider><DashboardSidebar/>{children}</SidebarProvider></Authenticated> */}
      <Unauthenticated>
        <RedirectToSignIn />
      </Unauthenticated>
    </>
  );
}

// function DashboardSidebar() {
//     return (
//         <Sidebar>

//         </Sidebar>
//     )
// }
