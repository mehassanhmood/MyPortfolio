// @ts-nocheck
import React from 'react'
import { Socials } from "../constants/index"

const Navbar = () => {
  return (
    <div className='z-50 w-full h-[65px] fixed top-0 backdrop-blur-md px-10 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417]'>
        <div className='w-full h-full flex flex-row justify-between m-auto px-[10px]'>
            <a href="#about-me"
            className='h-auto w-auto flex flex-row items-center'
            >
                {/* <img src="/NavLogo.png" alt="logo"
                className='hover:animate-spin-slow h-[70px] w-[70px]'
                 /> */}
                 <img src="/h-solid.svg" alt="logo"
                className='hover:animate-spin-slow w-8 h-8 border rounded-lg bg-purple-500 h-[70px] w-[70px]'
                 />
                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
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

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <img
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>

        </div>
    </div>
  )
}

export default Navbar
