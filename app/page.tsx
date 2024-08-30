"use client";

import { api } from "@/convex/_generated/api";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";

export default function WelcomePage() {

  const tasks = useQuery(api.tasks.get)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div>Welcome to</div>
      <div>Monster Jobs</div>
      <SignedIn>
        <button>Register a Monster Employee</button>
        <button>View all Employees</button>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </main>
  );
}
