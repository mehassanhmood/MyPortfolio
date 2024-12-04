// @ts-nocheck
import React, { useState } from 'react'
import { motion, AnimatePresence, spring } from 'framer-motion';

const ProjectCard = ({ src, title, description, source_code, deployed_app }) => {

  const [isExpanded, setIsExpanded] = useState(false);


  // Define the maximum length to show before truncating
  const MAX_LENGTH = 50;
  // Check if the description exceeds the limit
  const shouldTruncate = description.length > MAX_LENGTH;

  return (

    <div 
      className='flex-col justify-content items-center relative w-auto w-max md:w-[300px] overflow-hidden text-wrap rounded-lg shadow-lg border border-[#2A0E61] m-2'
      >
      <a
      
      href={deployed_app} target='_blank' rel='noopener noreferrer'>

        <motion.img 
        whileHover={{scale:1.05}}
        whileTap={{scale:0.9}}
        transition={{type:"spring", stiffness:200, damping:10}}
        src={src} alt={title}
        width={400}
        height={400}
        className='object-cover w-auto' 
        />
      </a>

      <div className='relative p-4 flex flex-col items-baseline'>
          <h1 className='text-white font-semibold text-md md:text-2xl'>{title}</h1>
          <p className='relative text-gray-300 mt-2'>
            {shouldTruncate && !isExpanded
            ? `${description.slice(0, MAX_LENGTH)}...`
            : description}
          </p>

          {/* Show the "Read More" button only if truncation is needed */}
          {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='mt-2 text-purple-400 hover:underline text-sm'
            >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
          )}
        </div>

        <a 
          href={source_code}
          className='ml-4 text-sm bg-clip-text text-transparent bg-gray-100'
          target='_blank' rel='noopener noreferrer'>
          <span className=' hover:text-teal-700 hover:bg-clip-text duration-300'>
            Source code
          </span>
         </a>
    </div>
  )
}

export default ProjectCard
