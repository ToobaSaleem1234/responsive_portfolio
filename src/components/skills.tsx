import React from 'react'
import { FaCheckSquare } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Skills = () => {
  return (
    <Card data-aos="zoom-in" className='h-[85vh] overflow-y-auto bg-slate-100'>
      <CardHeader>
        <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap ">
          
          <div className="p-4 w-full md:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheckSquare className='text-white text-lg' />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">
                HTML
              </h2>
            </div>
            <div className='w-full h-1 rounded-lg bg-gray-500'>
              <div className='w-[100%] h-1 bg-indigo-500 rounded-lg' />
            </div>
            <h3 className=" text-indigo-500 text-sm text-right font-semibold tracking-tight">100%</h3>
          </div>

          <div className="p-4 w-full md:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheckSquare className='text-white text-lg' />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">
                CSS
              </h2>
            </div>
            <div className='w-full h-1 rounded-lg bg-gray-500'>
              <div className='w-[95%] h-1 bg-indigo-500 rounded-lg' />
            </div>
            <h3 className=" text-indigo-500 text-sm text-right font-semibold tracking-tight">95%</h3>
          </div>

          <div className="p-4 w-full md:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheckSquare className='text-white text-lg' />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">
                Next.js
              </h2>
            </div>
            <div className='w-full h-1 rounded-lg bg-gray-500'>
              <div className='w-[90%] h-1 bg-indigo-500 rounded-lg' />
            </div>
            <h3 className=" text-indigo-500 text-sm text-right font-semibold tracking-tight">90%</h3>
          </div>

          <div className="p-4 w-full md:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheckSquare className='text-white text-lg' />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">
                Tailwind CSS
              </h2>
            </div>
            <div className='w-full h-1 rounded-lg bg-gray-500'>
              <div className='w-[85%] h-1 bg-indigo-500 rounded-lg' />
            </div>
            <h3 className=" text-indigo-500 text-sm text-right font-semibold tracking-tight">85%</h3>
          </div>
          
          <div className="p-4 w-full md:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheckSquare className='text-white text-lg' />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">
                Typescript
              </h2>
            </div>
            <div className='w-full h-1 rounded-lg bg-gray-500'>
              <div className='w-[80%] h-1 bg-indigo-500 rounded-lg' />
            </div>
            <h3 className=" text-indigo-500 text-sm text-right font-semibold tracking-tight">80%</h3>
          </div>

          <div className="p-4 w-full md:w-1/3">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <FaCheckSquare className='text-white text-lg' />
              </div>
              <h2 className="text-xl font-semibold tracking-tight">
                Python
              </h2>
            </div>
            <div className='w-full h-1 rounded-lg bg-gray-500'>
              <div className='w-[75%] h-1 bg-indigo-500 rounded-lg' />
            </div>
            <h3 className=" text-indigo-500 text-sm text-right font-semibold tracking-tight">75%</h3>
          </div>
          
        </div>
      </CardContent>
    </Card>
  )
}

export default Skills