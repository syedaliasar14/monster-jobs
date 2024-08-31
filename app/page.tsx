"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import MySignInButton from "./components/MySignInButton";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-5xl font-bold text-primary-foreground">Welcome to</div>
      <div className="text-6xl font-bold text-primary-foreground pt-2 pb-5">Monster Jobs</div>
      <div className="text-xl text-primary-foreground text-center pb-2">Find the perfect career opportunities for our new monster friends.</div>
      <SignedIn>
        <Button
          onClick={() => router.push('register')}
          className="mt-6 text-lg rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 shadow-lg shadow-yellow-500/50 ring-2 ring-yellow-500 ring-offset-2 ring-offset-background focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          ✨Hire a Monster!✨
        </Button>
        <Button
          onClick={() => router.push('employeelist')}
          className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-primary-foreground"
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


