"use client";

import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  return (
    <div>
      <div>Register</div>
      <div>Name</div>
      <div>Features</div>
      <div>Hair Color</div>
      <div>Skin Color</div>
      <div>Number of Eyes</div>
      <div>Arms or Wings</div>
      <div>Legs or Tentacles</div>
      <div>Tail</div>
      <div>Skin Texture</div>
      <div>Fangs</div>
      <button
        onClick={() => router.push('/register/jobsearch')}
        >Search For Jobs</button>
    </div>
  )
}