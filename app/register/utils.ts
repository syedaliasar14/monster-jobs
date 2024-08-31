import { z } from "zod";

export const formSchema = z.object({
  name: z.string(),
  hairColor: z.string(),
  skinColor: z.string(),
  numberOfEyes: z.string(),
  armsOrWings: z.string(),
  legsOrTentacles: z.string(),
  tail: z.string(),
  skinTexture: z.string(),
  fangs: z.string(),
})

export function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values)
}