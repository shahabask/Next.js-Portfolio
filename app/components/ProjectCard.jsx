import React from 'react'
import { CodeBracketIcon,EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Github, Link2Icon } from "lucide-react";
function ProjectCard({imgUrl,title,description,gitUrl,previewUrl}) {
  return (
    <div>
        <div 
        className='h-52 md:h-72 rounded-t-xl relative group'
        style={{background: `url(${imgUrl})`, backgroundSize:'cover',backgroundPosition: 'center',
        }}>
    <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
     <Link className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
      href={gitUrl}>
        <Github className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"/>
     </Link>
     <Link className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
      href={previewUrl}>
        <Link2Icon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"/>
     </Link>
    </div>
        </div>
         <div className='text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4'>
           <h5 className='font-xl font-semibold md-2'>{title}</h5>
            <p className='text-[#ADB7BE] min-h-20'>{description}</p>
         </div>
        </div>
  )
}

export default ProjectCard