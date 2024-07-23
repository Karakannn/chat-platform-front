import React from "react";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main className="w-full h-full">
      <Outlet />
    </main>
  );
}
