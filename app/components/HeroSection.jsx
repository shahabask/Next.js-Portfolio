"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

import {motion} from 'framer-motion'
   
  
function HeroSection() {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
       <motion.div initial={{opacity:0,scale: 0.5}} animate={{opacity:1,scale: 1}} transition={{duration:0.5}} 
       className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
         <h1 className="text-white mb-4 sm:text-5xl lg:text-7xl lg:leading-normal text-4xl font-extrabold">
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-700'>
            {`Hello, I'm`} {" "}
            </span>
            <br></br>
            <TypeAnimation
      sequence={[
        'Shahabas Mohammed',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'React.js Developer',
        1000,
        'Node.js Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
           </h1>
         <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
         { `Let's go through my journey`}
         </p>
         <div>
           <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-sky-600 to-sky-800 hover:bg-slate-200 text-white'>Hire Me</button>
           <a download={'MERN STACK DEVELOPER - SHAHABAS.pdf'} href="/resume/shahabas_resume.pdf">    <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-sky-500 to-sky-800 hover:bg-slate-800 text-white mt-3'>
         <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></button></a>
         </div>
       </motion.div>
       <motion.div 
       initial={{opacity:0,scale: 0.5}} animate={{opacity:1,scale: 1}} transition={{duration:0.5}} 
        className='col-span-4 place-self-center mt-4 lg:mt-0'>
      <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
        <Image src='/public/images/cartoon profile pic 3.jpeg'
          alt='hero image'
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
        />
      </div>
      
       </motion.div>
       </div>
    </section>
  )
}

export default HeroSection