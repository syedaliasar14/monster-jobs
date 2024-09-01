import Image from "next/image";
import { imageOptions } from "../register/enums";

export default function ProfilePic({ employee }: any) {

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
      width={64} height={64}
      className="w-12 h-12 rounded-full"
    />
  )
}