import React from 'react'
import { testimonials } from "../constants";


export default function Testimonial() {
  return (
   <div className="mt-20 tracking-wide px-4">
  {/* Section Title */}
  <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-bold text-white">
    What People Are Saying
  </h2>

  {/* Testimonial Cards */}
  <div className="flex flex-wrap justify-center gap-6">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="w-full sm:w-[47%] lg:w-[30%] rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-md bg-white/10 border border-white/10 shadow-md"
      >
        {/* Quote */}
        <p className="text-neutral-200 leading-relaxed text-[1.05rem] italic">
          “{testimonial.text}”
        </p>

        {/* User Info */}
        <div className="flex mt-8 items-center">
          <img
            className="w-14 h-14 mr-4 rounded-full border-2 border-orange-500"
            src={testimonial.image}
            alt={testimonial.user}
          />
          <div>
            <h6 className="font-semibold text-orange-400">{testimonial.user}</h6>
            <span className="text-sm font-normal text-neutral-400">
              {testimonial.company}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  )
}
