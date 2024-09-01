"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { generateJobs } from "./utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Skeleton } from "@/components/ui/skeleton";

export default function JobSearch() {
  const [jobList, setJobList] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const router = useRouter();
  const urlParams = useSearchParams();
  const employeeId = urlParams.get('employeeId');
  const employee = useQuery(api.employees.getEmployeeById, { employeeId: employeeId as Id<"employees"> });
  const updateEmployeeJob = useMutation(api.employees.updateEmployeeJob);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  if (employee) {
    generateJobs(employee).then((jobs) => {
      if (jobs) {
        setJobList(jobs);
      }
    }).finally(() => {
      setLoading(false);
    });
  }
}, [employee]);
  
  const handleJobClick = (job: string) => {
    setSelectedJob(job);
  }

  const hire = async (job: string) => {
    if (employeeId && job) {
      await updateEmployeeJob({ employeeId: employeeId as Id<"employees">, job });
      console.log(`${employee.name} has been hired as a ${job}!`);
      router.push(`/employee?employeeId=${employeeId}`);
    }
  };
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-5xl font-bold p-4 text-primary-foreground">Job Search</div>
      <div className="text-xl font-bold">Select the job you want for {employee?.name}</div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {!loading ? (
          jobList?.map(job => (
            <div key={job} 
              className={`p-4 rounded-lg shadow cursor-pointer hover:shadow-lg ${selectedJob === job ? 'bg-indigo-500 text-primary-foreground' : 'bg-primary/50'}`}
              onClick={() => handleJobClick(job)}>
              <div>{job}</div>
            </div>
          ))
        ) : (
          Array.from({ length: 15 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-48 rounded-lg bg-gray-300" />
          ))
        )}
      </div>
      <Button
        onClick={() => selectedJob && hire(selectedJob)}
        className="mt-6 w-[300px] text-lg rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 shadow-lg shadow-yellow-500/50 ring-2 ring-yellow-500 ring-offset-2 ring-offset-background focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        disabled={!selectedJob}
      >
        Hire {employee?.name}!
      </Button>
    </main>
  )
}
