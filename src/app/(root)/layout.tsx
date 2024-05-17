import Sidebar from "@/components/admin/SideBar";
import NavBar from "@/components/shared/NavBar";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1">
        <div className="fixed w-72 h-full">
          <Sidebar />
        </div>
        <main className="flex-1 bg-white p-4 overflow-y-auto ml-72">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
