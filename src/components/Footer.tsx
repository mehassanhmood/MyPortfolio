
import {
    RxGithubLogo,
    RxLinkedinLogo,
    RxEnvelopeClosed,
    RxDownload
  } from "react-icons/rx";


const Footer = () => {


  return (
    <div className='duration-200 w-full h-full bg-transparent shadow-lg p-[15px] z-50'>
         <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                <div
                className='min-w-[200px] h-auto flex flex-col items-center justify-start gap-2'
                >
                    <div className='font-bold text-[18px] text-gray-200' >Community</div>
                    
                    <a
                    href={"https://github.com/mehassanhmood"} target="_blank"
                    className='flex flex-row items-center my-[15px] cursor-pointer text-gray-200 hover:text-purple-300 duration-200'>
                        <RxGithubLogo />
                        <span className='text-[15px] ml-[6px] cursor-pointer'>GitHub</span>
                    </a>

                    <a
                    href={"https://www.linkedin.com/in/15-hassanmehmood/"} target="_blank"
                    className='flex flex-row items-center my-[15px] cursor-pointer text-gray-200 hover:text-purple-300 duration-200'>
                        <RxLinkedinLogo />
                        <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                    </a>
                    
                </div>

                <div
                    className='min-w-[200px] h-auto flex flex-col items-center justify-start gap-2'
                >
                    <div className='font-bold text-[16px] text-gray-200' >About</div>
                    <a
                    href="mailto:mehassanhmood@gmail.com" target="_blank"
                    className='flex flex-row items-center my-[15px] cursor-pointer text-gray-200 hover:text-purple-300 duration-200'>
                        <RxEnvelopeClosed />
                        <span className='text-[15px] ml-[6px]'>Email</span>
                    </a>
                    <a
                    href='./hassan_CV.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    download
                    className='cursor-pointer flex flex-row items-center my-[15px] text-gray-200 hover:text-purple-300 duration-200'>
                    <RxDownload />
                    <span className='text-[15px] ml-[6px]'>Download CV</span>
                    </a>
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
