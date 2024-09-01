import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { imageOptions } from "./enums";
import Image from "next/image";

export default function ImageFormField(form: any) {
  

  return (
    <FormField
      control={form.control}
      name="selectedImage"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Select a Profile Picture 🖼️</FormLabel>
          <FormControl>
            <div className="grid grid-cols-4 gap-4">
              {imageOptions.map((image) => (
                <div key={image} className="flex flex-col items-center">
                  <Image
                    src={`/${image}`}
                    alt={image}
                    className={`cursor-pointer border-[3px] rounded-full bg-white ${field.value === image ? "border-indigo-500" : "border-transparent"}`}
                    onClick={() => field.onChange(image)}
                    width={64}
                    height={64}
                  />
                </div>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}