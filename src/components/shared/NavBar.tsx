"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const session = useSession();

  const { status } = session;

  return (
    <div className="flex justify-between py-4 px-24 border-b-2 border-gray-100 ">
      <h2 className="">marketplace</h2>

      <nav className="flex gap-6 ">
        <Link
          className="bg-blue-600 text-white py-2 px-8 text-lg rounded-md"
          href=""
        >
          Profile
        </Link>

        {status === "authenticated" ? (
          <p className="bg-blue-600 text-white py-2 px-8 text-lg rounded-md">
            Auth
          </p>
        ) : (
          <p>Not Authenticated</p>
        )}

        {status !== "authenticated" ? (
          <Link
            className="bg-blue-600 text-white py-2 px-8 text-lg rounded-md"
            href=""
            onClick={() =>
              signIn("google", {
                callbackUrl: "http://localhost:3000/admin",
              })
            }
          >
            Login
          </Link>
        ) : (
          <Link
            className="bg-blue-600 text-white py-2 px-8 text-lg rounded-md"
            href=""
            onClick={() => signOut()}
          >
            Signout
          </Link>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
