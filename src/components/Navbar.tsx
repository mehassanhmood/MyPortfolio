// @ts-nocheck
import React from 'react'
// import { Socials } from "../constants/index"
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed
} from "react-icons/rx";

const Navbar = () => {
  return (
    <div className='z-50 w-full h-[65px] fixed top-0 backdrop-blur-md px-10 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417]'>
        <div className='w-full h-full flex flex-row justify-between m-auto px-[10px]'>
            <a href="#about-me"
            className='h-auto w-auto flex flex-row items-center'
            >
                 <div className='hover:animate-spin-slow pr-2'>
                  <p className='Welcome-text'>HM</p>
                 </div>

                <span className='font-bold ml-[10px] hidden md:block text-gray-300 pl-2'>
                    Hassan Mehmood
                </span>
            </a>

            <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 pt-6">
          <a href="https://github.com/mehassanhmood" target="_blank" className='text-gray-200 hover:text-purple-300 cursor-pointer'>
          <RxGithubLogo />
          </a>
          <a href="https://www.linkedin.com/in/15-hassanmehmood/" target='_blank' className='text-gray-200 hover:text-purple-300 cursor-pointer'>
          <RxLinkedinLogo />
          </a>
          <a href="mailto:mehassanhmood@gmail.com" className='text-gray-200 hover:text-purple-300 cursor-pointer'>
            <RxEnvelopeClosed/>
          </a>
        </div>

        </div>
    </div>
  )
}

export default Navbar
