"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import MySignInButton from "./components/MySignInButton";

export default function WelcomePage() {
  const router = useRouter();
  const tasks = useQuery(api.tasks.get)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary p-24">
      <div className="text-5xl font-bold tracking-wide text-primary-foreground">Welcome to</div>
      <div className="text-6xl font-bold tracking-wide text-primary-foreground pt-2 pb-5">Monster Jobs</div>
      <div className="text-2xl text-primary-foreground pb-2">Find the perfect career opportunities for our new monster friends.</div>
      <SignedIn>
        <Button
          onClick={() => router.push('register')}
          className="mt-6"
        >
          Register a Monster Employee
        </Button>
        <Button
          onClick={() => router.push('employeelist')}
          className="mt-6 text-secondary-foreground bg-secondary hover:bg-secondary/80"
        >
          View all Employees
        </Button>
      </SignedIn>
      <SignedOut>
        <MySignInButton />
      </SignedOut>
    </main>
  );
}


