import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import Typewriter from 'typewriter-effect';
import { GrLinkedin } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrCloudDownload } from "react-icons/gr";

export function Sidebar() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-2 bg-slate-100">
      {/* {image} */}
      <Image src='/tooba.jpg' alt='profile' width={150} height={150} className="rounded-md" />

      {/* name */}
      <div className="mt-2 ">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-800 m-3">Tooba Saleem</h1>
        <h2 className="scroll-m-20 text-md font-semibold tracking-tight text-center ml-2 text-blue-500">
          <Typewriter
            options={{
              strings: ['Web Developer', 'UI/UX Designer', 'Front-end Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>

      {/* social media accounts */}
      <div className="mt-5 grid grid-cols-3 gap-2 m-3">
        <div>
          <Link href='https://www.linkedin.com/in/tooba-saleem-043b972b4/' target='_blank'className=" text-gray-600 hover:text-[#0077B5]" ><GrLinkedin size={30} /></Link>
        </div>
        <div>
          <Link href='https://www.facebook.com/tooba.saleem.739?mibextid=ZbWKwL' target="_blank" className=" text-gray-600 hover:text-[#1877F2]"><GrFacebookOption size={30} /></Link>
        </div>
        <div>
          <Link href='https://github.com/ToobaSaleem1234' target="_blank" className=" text-gray-600 hover:text-[black]"><GrGithub size={30}/></Link>
        </div>
      </div>

      {/* download cv button */}
      <Link href='http://127.0.0.1:5500/main.html'target='_blank'>
      <Button className="bg-gray-950 hover:bg-blue-500">
      <GrCloudDownload /> Download CV
    </Button>
      </Link>

    </div>
  )
}