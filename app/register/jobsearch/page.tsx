"use client";

import { useRouter } from "next/navigation";

export default function JobSearch() {
  const jobList = ['Construction', 'Swim teacher', 'Lawyer', 'Flight Attendant']
  const router = useRouter();
  return (
    <div>
      <div>JobSearch</div>
      {jobList.map(job => <div key={job}>{job}</div>)}
      <button
        onClick={() => router.push('/employee')}
        >Hire!</button>
    </div>
  )
}