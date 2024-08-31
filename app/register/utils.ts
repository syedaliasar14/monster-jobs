import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1),
  hairColor: z.string(),
  skinColor: z.string(),
  numberOfEyes: z.string(),
  numberOfArms: z.string(),
  numberOfLegs: z.string(),
  skinTexture: z.string(),
  features: z.array(z.string()),
})

export async function onSubmit(values: z.infer<typeof formSchema>, router: any, createEmployee: Function) {
  console.log(values)
  const employeeId = await createEmployee(values)
  router.push('/register/jobsearch?employeeId=' + employeeId)
}