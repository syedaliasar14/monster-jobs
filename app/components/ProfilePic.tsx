import Image from "next/image";
import { imageOptions } from "../register/enums";

export default function ProfilePic({ employee, large=false }: { employee: any, large?: boolean }) {

  function getSrc(employee: any) {
    if (!employee?.image) {
      return "/profilepic.png"
    } else if (employee?.image?.startsWith("data:image/")) {
      return employee?.image  // base64 image
    } else if (imageOptions.includes(employee?.image)){
      return `/${employee?.image}`  //selected image
    } else {
      return employee?.image  //generated image
    }
  }

  return (
    <Image
      src={getSrc(employee)}
      alt="Profile picture" 
      width={large ? 128 : 64}
      height={large ? 128 : 64}
      className={`${large ? "w-32 h-32" : "w-12 h-12"} rounded-full`}
    />
  )
}