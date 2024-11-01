// @ts-nocheck
import React from 'react'
import {
    RxGithubLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed
  } from "react-icons/rx";

// import {faH} from ""


const Footer = () => {
  return (
    <div className='text-gray-200 w-full h-full bg-transparent shadow-lg p-[15px]'>
         <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                <div
                className='min-w-[200px] h-auto flex flex-col items-center justify-start'
                >
                    <div className='font-bold text-[16px]' >Community</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxGithubLogo />
                        <span className='text-[15px] ml-[6px]'>GitHub</span>
                    </p>

                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxLinkedinLogo />
                        <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                    </p>
                    
                </div>

                <div
                    className='min-w-[200px] h-auto flex flex-col items-center justify-start'
                >
                    <div className='font-bold text-[16px]' >About</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxEnvelopeClosed />
                        <span className='text-[15px] ml-[6px]'>Email</span>
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; My Work 2024 Inc. All rights reserved
            </div>

        </div>
    </div>
  )
}

export default Footer
