"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { formSchema, onSubmit } from "./utils";
import { hairColorOptions, skinColorOptions, numberOfEyesOptions, numberOfArmsOptions, numberOfLegsOptions, skinTextureOptions, featuresOptions } from "./enums";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Register() {
  const router = useRouter();
  const radioFormFields = [
    { name: 'hairColor', label: 'Hair Color', options: hairColorOptions },
    { name: 'skinColor', label: 'Skin Color', options: skinColorOptions },
    { name: 'numberOfEyes', label: 'Number of Eyes', options: numberOfEyesOptions },
    { name: 'numberOfArms', label: 'Number of Arms', options: numberOfArmsOptions },
    { name: 'numberOfLegs', label: 'Number of Legs', options: numberOfLegsOptions },
    { name: 'skinTexture', label: 'Skin Texture', options: skinTextureOptions },
  ] as const;
  const createEmployee = useMutation(api.employees.createEmployee)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      hairColor: hairColorOptions[0],
      skinColor: skinColorOptions[0],
      numberOfEyes: numberOfEyesOptions[0],
      numberOfArms: numberOfArmsOptions[0],
      numberOfLegs: numberOfLegsOptions[0],
      skinTexture: skinTextureOptions[0],
      features: [],
    },
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary p-24">
      <div className="text-3xl font-bold p-4 text-primary-foreground">Register a Monster Employee</div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit((v) => onSubmit(v, router, createEmployee))} className="flex flex-col gap-8 p-10">
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
        <FormField
          control={form.control} name="features" render={() => (
            <FormItem>
              <FormLabel>Features</FormLabel>
              <div className="grid grid-cols-3 gap-4">
                {featuresOptions.map((item) => (
                  <FormField key={item.id} control={form.control} name="features" render={({ field }) => {
                    return (
                      <FormItem key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(field.value?.filter((value) => value !== item.id))
                            }}/>
                        </FormControl>
                        <div>{item.label}</div>
                      </FormItem>
                    )}}
                  />))}
                </div>
              <FormMessage />
            </FormItem>
          )}/>
        <Button type="submit">Search For Jobs</Button>
      </form>
      </Form>
    </main>
  )
}