"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const OnboardingPage = () => {
  const router = useRouter();

  const handleCreateProfile = () => {
    router.push("/vendor/create-profile");
  };

  return (
    <div>
      <Button onClick={handleCreateProfile}>Create my vendor profile</Button>
    </div>
  );
};

export default OnboardingPage;
