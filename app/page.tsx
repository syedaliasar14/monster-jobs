"use client";

import { api } from "@/convex/_generated/api";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();
  const tasks = useQuery(api.tasks.get)

  return (
    <div className="flex flex-col items-center justify-center p-24">
      <div>Welcome to</div>
      <div>Monster Jobs</div>
      <SignedIn>
        <button
          onClick={() => router.push('register')}
          >Register a Monster Employee</button>
        <button
          onClick={() => router.push('employeelist')}
          >View all Employees</button>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
