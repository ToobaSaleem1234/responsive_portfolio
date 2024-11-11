import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import Typewriter from 'typewriter-effect';
import { GrLinkedin } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrCloudDownload } from "react-icons/gr";
import { Button } from '../ui/button';

const Mobilecard = () => {
    return (
        <div className='h-[90vh] bg-gray-100 flex flex-col items-center justify-center'>
            <div data-aos="zoom-in" className="card glass w-80 p-3 flex flex-col justify-center items-center bg-gray-200">

                <Image src='/tooba.jpg' alt='profile' width={150} height={150} className="rounded-md mx-auto" />
                <div className="card-body">
                    <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-gray-800 text-center">Tooba Saleem</h1>
                    <h2 className="scroll-m-20 text-md font-semibold text-center ml-2 text-indigo-700">
                        <Typewriter
                            options={{
                                strings: ['Web Developer', 'UI/UX Designer', 'Front-end Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <div className="mt-5 grid grid-cols-3">
                        <div>
                            <Link href='https://www.linkedin.com/in/tooba-saleem-043b972b4/' target='_blank' className="flex justify-center text-blue-600 hover:text-[#0077B5]" ><GrLinkedin size={40} /></Link>
                        </div>
                        <div>
                            <Link href='https://www.facebook.com/tooba.saleem.739?mibextid=ZbWKwL' target="_blank" className="text-blue-600 hover:text-[#234e86]"><GrFacebookOption size={40} /></Link>
                        </div>
                        <div>
                            <Link href='https://github.com/ToobaSaleem1234' target="_blank" className=" text-purple-950 hover:text-[#b360d9]"><GrGithub size={40} /></Link>
                        </div>

                        <Link href='http://127.0.0.1:5500/main.html'target='_blank'>
      <Button className="flex justify-center bg-gray-900 border-indigo-700 hover:bg-indigo-400 mt-6 ml-6">
      <GrCloudDownload className='mr-1 h-4 w-4'/> Download CV
    </Button>
      </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Mobilecard