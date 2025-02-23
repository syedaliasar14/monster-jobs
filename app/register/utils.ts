import { z } from "zod";
import { imageOptions } from "./enums";

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

export function createPrompt(values: z.infer<typeof formSchema>) {
  const { hairColor, skinColor, numberOfEyes, numberOfArms, numberOfLegs, skinTexture, features } = values
  return `A monster with ${hairColor} hair, ${skinColor} skin, ${numberOfEyes} eyes, ${numberOfArms} arms, ` +
    ` ${numberOfLegs} legs, ${skinTexture} skin texture, and ${features?.join(', ')}.`
}

export function getSrc(image: string | undefined) {
    if (!image) {
      return "/profilepic.png"
    } else if (image.startsWith("data:image/")) {
      return image  // base64 image
    } else if (imageOptions.includes(image)){
      return `/${image}`  //selected image
    } else {
      return image  //generated image
    }
  }