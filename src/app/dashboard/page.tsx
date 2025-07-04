"use client";

import { useAppSelector } from "@/hooks/reduxHooks";
import { useSessionExists } from "@/hooks/useSessionExists";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function DashboardPage() {
  const isSessionExists = useSessionExists();
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    console.log("isSessionExists", isSessionExists);
    if (!isSessionExists && !isLoggedIn && !user) {
      console.log("No session exists, redirecting to login page");
      router.push("/login");
      return;
    }
  }, [isSessionExists, router, isLoggedIn, user]);
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-2">

      </div>
    </div>
  );
}

export default DashboardPage;
