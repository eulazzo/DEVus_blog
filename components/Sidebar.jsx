import aboutProfile from "../public/aboutProfile.jpeg";
import Image from "next/image";
import Link from "next/link";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="hidden lg:inline-block xl:inline-block flex-3  shadow-md px-2 ">
      <div className="flex flex-col items-center bg-white">
        <div className="m-2 mb-3 w-[80%] py-1 text-center border-t-1 border-black">
          <span className="font-semibold"> ABOUT ME</span>
        </div>
        <div className="w-48 h-52  relative">
          <Image
            layout="fill"
            src={aboutProfile}
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <p className="w-56 text-gray0 text-sm mt-6">
          Web developer passionate about technology, investments,
          entrepreneurship, languages and everything that involves financial
          freedom.
        </p>
        <div className="flex flex-col items-center ">
          <div className="mt-2 flex flex-col items-center py-2">
            <span className="text-center  border-b-1 mt-2 border-black  border-t-1">
              {" "}
              Follow me
            </span>
            <ul className="flex gap-2 cursor-pointer text-center  mt-5 ">
              <li className="bg-black rounded-md items-center  h-7 w-7 flex flex-col cursor-pointer justify-center text-white ">
                <Link href={"https://www.instagram.com/eulazzo/"}>
                  <AiFillInstagram />
                </Link>
              </li>
              <li className="bg-black rounded-md items-center  h-7 w-7 flex flex-col cursor-pointer justify-center text-white">
                <Link href={"https://github.com/eulazzo"}>
                  <AiFillGithub />
                </Link>
              </li>
              <li className="bg-black items-center  h-7 w-7 flex flex-col cursor-pointer justify-center rounded-md text-white ">
                <Link href={"https://www.linkedin.com/in/eulazzo/"}>
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
