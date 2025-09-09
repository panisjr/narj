import React, { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex flex-col w-full h-screen">
      <main className="flex flex-col w-full h-full items-center justify-center">
        {children}
      </main>
    </div>
  );
}
