import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

const Projects = () => {
  return (
    <Card data-aos="zoom-in" className='h-[85vh] overflow-y-auto bg-slate-100'>
      <CardHeader>
        <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap -m-7">

          {/* project 1 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={900}
                height={900}
                className="absolute inset-0 w-full h-full object-cover object-center border-2 border-gray-800"
                src="/project1.PNG"
              />
              <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-400 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300 hover:border-gray-500 hover:bg-gray-200">
                <h1 className="text-xl font-semibold tracking tight">
                  Static Interactive Resume
                </h1> 
                <p className="mt-4 leading-relaxed line-clamp-3 ">
                A statically generated, interactive resume built with Next.js, showcasing my skills, experience, and achievements in a visually engaging and user-friendly interface.
                </p>

                <Link className='text-xl font-semibold tracking tight' href={"#"} target="_blank">
                <p className='mt-4 text-indigo-500 m-6 p-5 hover:text-gray-500 underline'>View Project</p>
                </Link>
              </div>
            </div>
          </div>

          {/* project 2 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={900}
                height={900}
                className="absolute inset-0 w-full h-full object-cover object-center border-2 border-gray-800"
                src="/project2.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-400 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300 hover:border-gray-500 hover:bg-gray-200">
                <h1 className="text-xl font-semibold tracking tight">
                  Online Food Ordering Website..
                </h1> 
                <p className="mt-4 leading-relaxed line-clamp-3 ">
                A responsive and user-friendly food ordering website built with Next.js and Tailwind CSS, enabling customers to browse menus, place orders, and make payments seamlessly. 
                </p>

                <Link className='text-xl font-semibold tracking tight' href={"#"} target="_blank">
                <p className='mt-4 text-indigo-500 m-6 p-5 hover:text-gray-500 underline'>View Project</p>
                </Link>
              </div>
            </div>
          </div>

          {/* project 3 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={900}
                height={900}
                className="absolute inset-0 w-full h-full object-cover object-center border-2 border-gray-800"
                src="/project3.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-400 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300 hover:border-gray-500 hover:bg-gray-200">
                <h1 className="text-xl font-semibold tracking tight">
                  Dynamic Resume..
                </h1> 
                <p className="mt-4 leading-relaxed line-clamp-3 ">
                A dynamically generated, responsive resume built with Next.js and Tailwind CSS, showcasing my skills, experience, and achievements in a visually engaging and customizable format. 
                </p>

                <Link className='text-xl font-semibold tracking tight' href={"#"} target="_blank">
                <p className='mt-4 text-indigo-500 m-6 p-5 hover:text-gray-500 underline'>View Project</p>
                </Link>
              </div>
            </div>
          </div>

          {/* project 4 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={900}
                height={900}
                className="absolute inset-0 w-full h-full object-cover object-center border-2 border-gray-800"
                src="/project4.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-400 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300 hover:border-gray-500 hover:bg-gray-200">
                <h1 className="text-xl font-semibold tracking tight">
                  Simple Calculator...
                </h1> 
                <p className="mt-4 leading-relaxed line-clamp-3 ">
                A basic arithmetic calculator built with TypeScript, enabling users to perform fundamental mathematical operations such as addition, subtraction, multiplication, and division. 
                </p>

                <Link className='text-xl font-semibold tracking tight' href={"#"} target="_blank">
                <p className='mt-4 text-indigo-500 m-6 p-5 hover:text-gray-500 underline'>View Project</p>
                </Link>
              </div>
            </div>
          </div>

          {/* project 5 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={900}
                height={900}
                className="absolute inset-0 w-full h-full object-cover object-center border-2 border-gray-800"
                src="/project5.PNG"
              />
              <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-400 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300 hover:border-gray-500 hover:bg-gray-200">
                <h1 className="text-xl font-semibold tracking tight">
                  Animated Portfolio..
                </h1> 
                <p className="mt-4 leading-relaxed line-clamp-3 ">
                A visually stunning, animated portfolio built with Next.js and Tailwind CSS, showcasing my projects, skills, and experiences through engaging interactions and smooth animations. 
                </p>

                <Link className='text-xl font-semibold tracking tight' href={"#"} target="_blank">
                <p className='mt-4 text-indigo-500 m-6 p-5 hover:text-gray-500 underline'>View Project</p>
                </Link>
              </div>
            </div>
          </div>

          {/* project 6 */}
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-72">
              <Image
                alt="gallery"
                width={1000}
                height={1000}
                className="absolute inset-0 w-full h-full object-cover object-center border-2 border-gray-800"
                src="/project6.jpg"
              />
              <div className="px-8 py-10 relative z-10 w-full border-2 border-gray-400 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300 hover:border-gray-500 hover:bg-gray-200">
                <h1 className="text-xl font-semibold tracking tight">
                  Registration Form..
                </h1> 
                <p className="mt-4 leading-relaxed line-clamp-3 ">
                A responsive and user-friendly registration form built with HTML allowing users to input personal details and submit information securely. 
                </p>

                <Link className='text-xl font-semibold tracking tight' href={"#"} target="_blank">
                <p className='mt-4 text-indigo-500 m-6 p-5 hover:text-gray-500 underline'>View Project</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Projects