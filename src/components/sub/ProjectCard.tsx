// @ts-nocheck
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ src, title, description }) => {

  const [isExpanded, setIsExpanded] = useState(false);


  // Define the maximum length to show before truncating
  const MAX_LENGTH = 50;
  // Check if the description exceeds the limit
  const shouldTruncate = description.length > MAX_LENGTH;

  return (

    <motion.div 
    className='relative w-[200px] md:w-[400px] overflow-hidden text-wrap rounded-lg shadow-lg border border-[#2A0E61] m-2 ml-10 pr-3 md:m-2 '
    >

      <img src={src} alt={title}
      width={400}
      height={400}

      className=' object-contain'
       />

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
    </motion.div>
  )
}

export default ProjectCard
