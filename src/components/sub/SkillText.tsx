// @ts-nocheck

import React from 'react'
import { motion } from "framer-motion"
import { SparklesIcon } from '@heroicons/react/16/solid'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box mb-8 border border-[#9fe8dc55] bg-[#102326aa] px-4 py-2 opacity-[0.9]'
        >
            <SparklesIcon className='mr-2 h-5 w-5 text-[#f0b35b]'/>
            <p className='Welcome-text font-mono text-sm'>Capabilities / 04</p>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='section-title mt-[10px] text-center font-medium'
        >
            AI, quantitative systems, and end-to-end delivery
        </motion.div>

        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive mb-10 mt-[10px] text-center text-sm text-[#9aaead]'
        >
            LangGraph · LangChain · Python · SQL · MLOps · Causal inference
        </motion.div>

    </div>
  )
}

export default SkillText
