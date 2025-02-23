import Image from "next/image";
import { getSrc } from "../register/utils";

export default function ProfilePic({ employee, large=false }: { employee: any, large?: boolean }) {
  return (
    <Image
      src={getSrc(employee?.image)}
      alt="Profile picture" 
      width={large ? 128 : 64}
      height={large ? 128 : 64}
      className={`${large ? "w-32 h-32" : "w-12 h-12"} rounded-full`}
    />
  )
}