"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { formSchema, onSubmit } from "./utils";
import { hairColorOptions, skinColorOptions, numberOfEyesOptions, armsOrWingsOptions, legsOrTentaclesOptions, tailOptions, skinTextureOptions, fangsOptions } from "./enums";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function Register() {
  const router = useRouter();
  const radioFormFields = [
    { name: 'hairColor', label: 'Hair Color', options: hairColorOptions },
    { name: 'skinColor', label: 'Skin Color', options: skinColorOptions },
    { name: 'numberOfEyes', label: 'Number of Eyes', options: numberOfEyesOptions },
    { name: 'armsOrWings', label: 'Arms or Wings', options: armsOrWingsOptions },
    { name: 'legsOrTentacles', label: 'Legs or Tentacles', options: legsOrTentaclesOptions },
    { name: 'tail', label: 'Tail', options: tailOptions },
    { name: 'skinTexture', label: 'Skin Texture', options: skinTextureOptions },
    { name: 'fangs', label: 'Fangs', options: fangsOptions },
  ] as const;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      hairColor: hairColorOptions[0],
      skinColor: skinColorOptions[0],
      numberOfEyes: numberOfEyesOptions[0],
      armsOrWings: armsOrWingsOptions[0],
      legsOrTentacles: legsOrTentaclesOptions[0],
      tail: tailOptions[0],
      skinTexture: skinTextureOptions[0],
      fangs: fangsOptions[0],
    },
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-3xl p-4">Register a Monster Employee</div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-8 p-10">
        <FormField
          control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the Monster</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {radioFormFields.map((myField) => (
          <FormField key={myField.name} control={form.control} name={myField.name} render={({ field }) => (
            <FormItem>
              <FormLabel>{myField.label}</FormLabel>
              <FormControl>
                <RadioGroup defaultValue={myField.options[0]} className="grid grid-cols-3 gap-4">
                  {myField.options.map((option) => (
                    <div className="flex items-center space-x-2" key={option}>
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )} />
        ))}
        <Button type="submit"
          onClick={() => router.push('/register/jobsearch')}
          >Search For Jobs</Button>
      </form>
      </Form>
    </main>
  )
}