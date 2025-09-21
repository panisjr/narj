import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex flex-col w-full h-screen">
      <main className="flex flex-col w-full items-start overflow-hidden">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
