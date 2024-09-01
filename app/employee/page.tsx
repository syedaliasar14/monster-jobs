"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Skeleton } from "@/components/ui/skeleton";
import { createEmployeeDesc, createEmployeeDesc2 } from "./utils";

export default function Employee() {
  const router = useRouter();
  const urlParams = useSearchParams();
  const employeeId = urlParams.get('employeeId');
  const employee = useQuery(api.employees.getEmployeeById, { employeeId: employeeId as Id<"employees"> });
  console.log(employee?.skinColor.toLowerCase());

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-4 space-y-4">
      <div className="text-xl font-bold">{employee?.name} was hired as a {employee?.job}!</div>
      <div className="bg-white rounded-lg p-4 shadow-md w-full max-w-md text-gray-800">
        {!employee ? (
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-gray-300" />
              <Skeleton className="h-4 w-[200px] bg-gray-300" />
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-4">
              <Image
                src={`/${employee?.image || "profilepic.png"}`}
                alt="Profile picture" 
                width={64} height={64}
                className="w-12 h-12 rounded-full"/>
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold">{employee?.name}</h2>
                <span className={`inline-flex items-center px-3 my-1 rounded-full text-lg font-medium
                  bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-primary-foreground`}>
                  {employee?.job}
                </span>
              </div>
            </div>
            <p className="mt-4 text-gray-700 font-semibold">
              {employee && (
                <span>
                  {createEmployeeDesc2(employee) || "No description available"}
                </span>
              )}
            </p>
            <p className="mt-4 text-gray-700">Job started: {new Date(employee?._creationTime).toLocaleDateString()}</p>
          </>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Button className="bg-indigo-500 hover:bg-indigo-600 text-primary-foreground"
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


