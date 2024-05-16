"use client";
import React from "react";

import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const page = () => {
  const { status } = useSession();

  return (
    <div>
      {status === "authenticated" && (
        <div>
          <button onClick={() => signOut()}>Singnout</button>
        </div>
      )}
      {status !== "authenticated" && (
        <div>
          <button onClick={() => signIn("google")}>Signin</button>
        </div>
      )}
    </div>
  );
};

export default page;
