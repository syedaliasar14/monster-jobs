"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import MySignInButton from "./MySignInButton";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <header className="fixed top-0 flex w-full items-center justify-between p-4">
      <button 
        className="text-2xl font-bold tracking-wide text-primary-foreground"
        onClick={() => router.push('/')}
        >Monster Jobs</button>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <MySignInButton />
      </SignedOut>
    </header>
  );
}