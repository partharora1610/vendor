import NavBar from "@/components/shared/NavBar";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <div className="mb-6 ">
        <NavBar />
      </div>
      <section className="px-6 max-md:pb-14 sm:px-14">
        <div className="">{children}</div>
      </section>
    </main>
  );
};

export default Layout;
