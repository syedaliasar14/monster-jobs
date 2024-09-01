import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(100),
  hairColor: z.string(),
  skinColor: z.string(),
  numberOfEyes: z.string(),
  numberOfArms: z.string(),
  numberOfLegs: z.string(),
  skinTexture: z.string(),
  features: z.array(z.string()),
  image: z.string(),
})

export async function onSubmit(values: z.infer<typeof formSchema>, router: any, createEmployee: Function) {
  console.log(values)
  const employeeId = await createEmployee(values)
  router.push('/register/jobsearch?employeeId=' + employeeId)
}

export async function generateImageUrl(prompt: string) {
  console.log('Generating image for prompt:', prompt)
  const res = await fetch('/api/dalle', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt })
  })
  const { imageUrl } = await res.json()
  return imageUrl;
}

export function createPrompt(values: z.infer<typeof formSchema>) {
  const { hairColor, skinColor, numberOfEyes, numberOfArms, numberOfLegs, skinTexture, features } = values
  return `A monster with ${hairColor} hair, ${skinColor} skin, ${numberOfEyes} eyes, 
    ${numberOfArms} arms, ${numberOfLegs} legs, ${skinTexture} skin texture, and ${features?.join(', ')}.`
}