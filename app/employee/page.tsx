"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Employee() {
  const router = useRouter();
  
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-4 space-y-4">
      <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-md text-gray-800">
        <div className="flex items-center space-x-4">
          <img
            src="https://picsum.photos/200"
            alt="Employee"
            className="w-24 h-24 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm text-gray-600">Software Engineer</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
          nulla quis lectus elementum vulputate. Phasellus ut lectus ipsum.
          Donec non nisl sit amet nisl lobortis malesuada.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          onClick={() => router.push('/employeelist')}
        >
          View All Employees
        </Button>
        <Button
          onClick={() => router.push('/')}
        >
          Home
        </Button>
      </div>
    </main>
  );
}

