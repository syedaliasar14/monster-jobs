"use client";

import { useRouter } from "next/navigation";

export default function Employee() {
  const router = useRouter();
  
  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-md">
        <div className="flex items-center">
          <img
            src="https://picsum.photos/200"
            alt="Employee"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
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
      <button
        onClick={() => router.push('/employeelist')}
        >View All Employees</button>
    </div>
  );
}
