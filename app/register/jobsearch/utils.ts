import { generateChat } from "@/app/api/gpt/utils";
import { zodResponseFormat } from "openai/helpers/zod";
import { JOB_POOL } from "./const";
import { z } from "zod";

export function getJobsFromJobPool(): string[] {
  const shuffled = Array.from(new Set(JOB_POOL)).sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 15);
}

export async function generateJobs(employee: any): Promise<string[]> {
  try {
    // Call GPT
    const prompt = createJobSearchPrompt(employee);
    const response_format = zodResponseFormat(JobSearchResult, "jobs")
    const response = await generateChat(prompt, response_format);

    const { jobs } = JSON.parse(response);
    console.log(jobs);
    return jobs;
  } catch (error) {
    console.error(error);
    console.info("Failed to generate jobs from OpenAI. Fetching from job pool...");
    return getJobsFromJobPool();
  }
}

function createJobSearchPrompt(employee: any) {
  const { hairColor, skinColor, numberOfEyes, numberOfArms, numberOfLegs, skinTexture, features } = employee
  return `Generate a list of 15 potential jobs (can be fun & silly or serious) in JSON format. ` +
    `The job search is for a monster employee with the following characteristics: ` +
    `A monster with ${hairColor} hair, ${skinColor} skin, ${numberOfEyes} eyes, ${numberOfArms} arms, ` +
    `${numberOfLegs} legs, ${skinTexture} skin texture, and ${features?.join(', ')}.`
}

const JobSearchResult = z.object({
  jobs: z.array(z.string())
})
