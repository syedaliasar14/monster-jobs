"use client";

import { useRouter } from "next/navigation";
import { getJobsFromJobPool } from "./utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function JobSearch() {
  const [jobList, setJobList] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const jobs = getJobsFromJobPool();
    setJobList(jobs);
  }, []);
  
  const handleJobClick = (job: string) => {
    setSelectedJob(job);
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-4xl font-bold tracking-wide text-primary-foreground mt-10">Job Search</div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {jobList.map(job => (
          <div key={job} 
            className={`p-4 rounded-lg shadow cursor-pointer hover:shadow-lg ${selectedJob === job ? 'bg-slate-400 text-primary-foreground' : 'bg-primary'}`}
            onClick={() => handleJobClick(job)}>
            <div>{job}</div>
          </div>
        ))}
      </div>
      <Button
        onClick={() => router.push(`/employee?job=${selectedJob}`)}
        className="mt-6 w-[300px] text-lg rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 shadow-lg shadow-yellow-500/50 ring-2 ring-yellow-500 ring-offset-2 ring-offset-background focus:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        disabled={!selectedJob}
      >
        Hire!
      </Button>
    </div>
  )
}


