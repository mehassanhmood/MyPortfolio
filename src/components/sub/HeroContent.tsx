// @ts-ignore
import React from 'react'
import {motion} from "framer-motion"
import { SparklesIcon } from '@heroicons/react/16/solid'
import { RxDownload } from "react-icons/rx";

// @ts-ignore
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '../utils/motion'
const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div
      className='flex flex-col h-full w-full text-start gap-5 justify-center m-auto'
      >
 
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box font-bold py-[8px] px-[10px] pl-[8px] pr-[8px] border border-[#7042f88b] opacity-[0.9]'
        >          
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
          <h1 className='Welcome-text text-[17px] mr-[10px]'>
              Full Stack Data Scientist
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
            Obsessed with Machine Learning
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
              {" "}
               &  {" "}
            </span>
            Application Development
          </span>
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
          I&apos;m a Full Stack Data Scientist with experience in Web Application Development and Data Engineering.
          Check out my projects and skills.
        </motion.p>

        {/* <motion.a href=""
        variants={slideInFromLeft(1)}
        className='text-white text-center button-primary cursor-pointer py-2 border rounded-lg max-w-[200px]'
        >
          Learn More!
        </motion.a> */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className='flex justify-center w-full h-full items-center'
        >
          <img 
          // src={"/mainIconsdark.svg"}
          src={"./mainIconsdark.svg"}
          alt='work Icons'
          width={750}
          height={750}
          className='opacity-[0.8]'
          />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent