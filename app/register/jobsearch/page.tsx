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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-gradient-to-br from-yellow-800 to-orange-900">
      <div className="text-4xl font-bold tracking-wide text-primary-foreground mt-10">Job Search</div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {jobList.map(job => (
          <div key={job} 
            className={`p-4 rounded-lg shadow ${selectedJob === job ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
            onClick={() => handleJobClick(job)}>
            <div className={`text-lg`}>{job}</div>
          </div>
        ))}
      </div>
      <Button
        onClick={() => router.push(`/employee?job=${selectedJob}`)}
        className="mt-6 text-2xl w-[300px]"
        disabled={!selectedJob}
      >
        Hire!
      </Button>
    </div>
  )
}


