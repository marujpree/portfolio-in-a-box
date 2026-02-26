"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((o) => !o)} />
      <main
        className={`portfolio-main flex-1 transition-[margin] duration-300 ease-out ${sidebarOpen ? "md:ml-[320px]" : ""}`}
      >
        {children}
      </main>
    </div>
  );
}
