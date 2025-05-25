import Code from '../assets/code.jpg'
import React from 'react'
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from '../constants';

export default function Workflow() {
    return (
        <>
            <div className='relative mt-20 '>
                <div className='items-center justify-center flex'>
                    <h1 className='text-3xl sm:text-4xl lg:text-6xl mt-6 traking-wide'>Accelerate your {" "}
                        <span className='text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text'>Cooding Workflow</span>
                    </h1>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-center'>
  {/* Image */}
  <div className="p-2 w-full lg:w-1/2 mt-6">
    <img src={Code} alt="" />
  </div>

  {/* Checklist Text */}
  <div className="pt-12 w-full lg:w-1/2">
    {checklistItems.map((item, index) => (
      <div key={index} className="flex mb-12">
        {/* Icon */}
        <div className="flex items-center justify-center text-green-500 bg-zinc-900 rounded-full w-10 h-10">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        {/* Text */}
        <div className='px-8'>
          <h5 className='text-xl'>{item.title}</h5>
          <p className='text-md text-neutral-500'>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

            </div>
        </>
    )
}
