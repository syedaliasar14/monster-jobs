"use client";

import { useRouter } from "next/navigation";

export default function EmployeeList() {
  const router = useRouter();
  
  return (
    <div>
      <div>EmployeeList</div>
      <button
        onClick={() => router.push('/')}
        >Home</button>
    </div>
  )
}