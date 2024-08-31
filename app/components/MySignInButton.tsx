"use client";

import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function MySignInButton() {
  const router = useRouter();
  const { redirectToSignIn } = useClerk();
  
  return (
    <Button
      onClick={() => redirectToSignIn()}
      >Sign In</Button>
  );
}