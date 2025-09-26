import React from 'react'
import about from "../assets/about.jpg"
import VideoPlayer from './VideoPlayer'
import { BiSolidBadgeCheck } from "react-icons/bi";

function About() {
  return (
    <div className='w-[100vw] lg:h-[70vh] min-h-[50vh] flex flex-wrap items-center justify-center gap-2 mb-[30px]'>
        <div className='lg:w-[40%] md:w-[80%] w-[100%] h-[100%] flex items-center justify-center relative' >
            <img src={about} className='w-[80%] h-[90%] rounded-lg ' alt="Students learning online" />
            <VideoPlayer />
        </div>

        <div className='lg:w-[50%] md:w-[70%] w-[100%] h-[100%] flex items-start justify-center flex-col px-[35px] md:px-[80px]' >
          <div className='text-4xl font-semibold text-gray-500 mb-2'>
            About Us
          </div>
          <div className='text-2xl font-bold'>We Help Maximize Your Learning Growth</div>
          <div className='text-lg text-gray-600 mt-4'>We provide a modern Learning Management System to simplify online education, track progress, and enhance student-instructor collaboration efficiently.</div>
          <div className='w-[90%] lg:w-[80%] flex md:flex-row'>
            <div className='flex items-center justify-center gap-10 mt-[40px] text-base'>
              <div className='flex items-center justify-center gap-[10px]'>
                <BiSolidBadgeCheck className='w-[20px] h-[20px] text-blue-500'/>
                Simplified Learning
              </div>
              <div className='flex items-center justify-center gap-[10px]'><BiSolidBadgeCheck className='w-[20px] h-[20px] text-blue-500'/>Expert Trainers</div> 
            </div>
            <div className='flex items-center justify-between mt-[20px] text-base'>
              <div className='flex items-center justify-center gap-[10px]'><BiSolidBadgeCheck className='w-[20px] h-[20px] text-blue-500'/>Big Experience</div>
              <div className='flex items-center justify-center gap-[10px]'><BiSolidBadgeCheck className='w-[20px] h-[20px] text-blue-500'/>Lifetime Access</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About;