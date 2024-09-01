import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { imageOptions } from "./enums";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { test64 } from "./test64";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ImageFormField({ form }: any) {
  const [isGenerated, setIsGenerated] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  
  return (
    <FormField control={form.control} name="image" render={({ field }) => (
      <FormItem>
        <FormLabel>Select a Profile Picture 🖼️</FormLabel>
        <FormControl>
          <div className="flex flex-col gap-4 items-center">
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
            <div className="pt-4 text-center font-bold">Or generate an image of your monster</div>
            {!isGenerated && 
              <Button
                className="bg-indigo-500 hover:bg-indigo-600 w-[100px]"
                type="button"
                onClick={async () => {
                  const newImage = 'data:image/jpeg;base64,' + test64 //await generateImageWithDalle(); // Call the API route
                  setGeneratedImage(newImage)
                  field.onChange(newImage); // Store the generated image in the form
                  setIsGenerated(true);
                }}
              >Generate</Button>}
            {isGenerated && (
              !generatedImage ? <Skeleton className="w-32 h-32 rounded-full border-[3px]" /> :
              <Image
                className={`cursor-pointer border-[3px] rounded-full bg-white ${field.value === generatedImage ? "border-indigo-500" : "border-transparent"}`}
                onClick={() => field.onChange(generatedImage)}
                src={generatedImage}
                alt="Generated image"
                width={128}
                height={128}
              />
            )}
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}/>
  );
}