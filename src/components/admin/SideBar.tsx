import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-slate-900 p-6 px-6 h-full overflow-y-auto shadow-lg">
      <div className="border-b-2 border-gray-300 mb-8 pb-4">
        <div className="w-[140px] h-[140px] bg-gray-400 rounded-lg m-auto mb-4"></div>
        <div className="text-2xl font-bold  text-center mb-2">
          Raj Catering Service
        </div>
        <p className="text-center">GSTIN: 87583027494</p>
      </div>
      <ul className="flex flex-col gap-4">
        <Link
          className="p-3 rounded-lg hover:bg-primary-400 hover:text-white transition duration-200 ease-in-out"
          href="/admin"
        >
          Home
        </Link>

        <Link
          className="p-3 rounded-lg hover:bg-blue-950 hover:text-white transition duration-200 ease-in-out"
          href="/admin/profile"
        >
          Profile
        </Link>

        <Link
          className="p-3 rounded-lg hover:bg-blue-950 hover:text-white transition duration-200 ease-in-out"
          href="/admin/queries"
        >
          Queries
        </Link>

        <Link
          className="p-3 rounded-lg hover:bg-blue-950 hover:text-white transition duration-200 ease-in-out"
          href="/admin/queries"
        >
          Settings
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
