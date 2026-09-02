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
    <div className='fixed top-0 z-50 h-[72px] w-full border-b border-[#9fe8dc18] bg-[#081014cc] px-4 backdrop-blur-md sm:px-8'>
      <div className='m-auto flex h-full w-full max-w-7xl flex-row items-center justify-between px-1'>
            <a href="#about-me"
            className='h-auto w-auto flex flex-row items-center'
            >
                 <div className='pr-2'>
                  <p className='font-mono text-[#9fe8dc]'>HM<span className='text-[#f0b35b]'>.</span></p>
                 </div>

                <span className='ml-[10px] hidden border-l border-[#9fe8dc33] pl-3 text-sm font-semibold text-gray-300 md:block'>
                    Hassan Mehmood
                </span>
            </a>

            <div className="hidden h-full w-[360px] flex-row items-center justify-between md:flex">
          <div className="mr-[15px] flex h-auto w-full items-center justify-between rounded-full border border-[#9fe8dc2e] bg-[#10232666] px-5 py-2 text-sm text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-4 text-lg">
          <a aria-label="GitHub" href="https://github.com/mehassanhmood" target="_blank" rel="noreferrer" className='cursor-pointer text-gray-200 hover:text-[#9fe8dc]'>
          <RxGithubLogo />
          </a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/15-hassanmehmood/" target='_blank' rel="noreferrer" className='cursor-pointer text-gray-200 hover:text-[#9fe8dc]'>
          <RxLinkedinLogo />
          </a>
          <a aria-label="Email Hassan" href="mailto:mehassanhmood@gmail.com" className='cursor-pointer text-gray-200 hover:text-[#9fe8dc]'>
            <RxEnvelopeClosed/>
          </a>
        </div>

        </div>
    </div>
  )
}

export default Navbar
