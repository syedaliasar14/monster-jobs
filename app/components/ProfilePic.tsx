import Image from "next/image";

export default function ProfilePic({ employee }: any) {

  function getSrc(employee: any) {
    if (employee?.image?.startsWith("data:image/")) {
      return employee?.image  // base64 image
    } else {
      return `/${employee?.image || "profilepic.png"}`  //selected image
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