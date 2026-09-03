// @ts-ignore
import React from 'react'
import {motion} from "framer-motion"
import { SparklesIcon } from '@heroicons/react/16/solid'


// @ts-ignore
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '../utils/motion'
const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='mx-auto flex w-full max-w-7xl flex-row items-center justify-center gap-10 px-6 pt-32 sm:px-10 lg:px-12'
    >
      <div
      className='m-auto flex h-full w-full flex-col justify-center gap-5 text-start lg:w-[58%]'
      >
 
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box border border-[#9fe8dc55] bg-[#102326aa] px-3 py-2 font-bold opacity-[0.9]'
        >          
            <SparklesIcon className='mr-2 h-5 w-5 text-[#f0b35b]'/>
            <h1 className='Welcome-text mr-2 font-mono text-sm'>
              Hassan Mehmood
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='mt-6 flex h-auto w-auto max-w-[680px] flex-col gap-6 text-5xl font-bold leading-[0.98] text-white sm:text-6xl lg:text-7xl'
        >
          <span>
            AI/ML Engineer & Quant System Architect
            <span className='text-[#9fe8dc]'> | Founding Data Scientist</span>
          </span>
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='my-5 max-w-[600px] text-base leading-7 text-[#9aaead] sm:text-lg'
        >
          I&apos;m Hassan Mehmood, a Data Scientist and ML Engineer with 3+ years of experience
          delivering production ML systems, automated ETL pipelines, and BI solutions across
          fintech and B2B environments. My work focuses on explainable, secure, and trustworthy AI.
        </motion.p>

        <motion.div
        variants={slideInFromLeft(1)}
        className='flex flex-wrap gap-3'
        >
          <a href='#projects' className='button-primary'>Explore selected work</a>
          <a href='mailto:mehassanhmood@gmail.com' className='button-secondary'>Start a conversation</a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className='hidden h-full w-full items-center justify-center lg:flex lg:w-[42%]'
        >
          <img 
          // src={"/mainIconsdark.svg"}
          src={"./mainIconsdark.svg"}
          alt='work Icons'
          width={750}
          height={750}
          className='max-w-[520px] opacity-[0.72]'
          />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent