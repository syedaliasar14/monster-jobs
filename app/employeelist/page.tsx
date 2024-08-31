"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EmployeeList() {
  const router = useRouter();
  const employees = useQuery(api.employees.get)

  console.log(employees)
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-5xl font-bold p-4 text-primary-foreground mb-8">Monster Employees</div>
      <ul className="grid gap-4 grid-cols-3">
        {employees && employees.map(employee => (
          <li key={employee.employeeId} 
            onClick={() => router.push('/employee?employeeId=' + employee._id)} 
            className="p-4 bg-primary-foreground rounded-lg shadow-md cursor-pointer text-slate-700">
            <div className="flex items-center">
              <Image src="/profilepic.png" alt="Profile picture" 
                width={64} height={64} className="w-12 h-12 rounded-full"/>
              <div className="pl-4">
                <div className="font-bold">{employee.name ? employee.name : "(No name)"}</div>
                <div>Hair color: {employee.hairColor}</div>
                <div>Features: {employee.features?.join(", ")}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}


