// @ts-nocheck
import React  from 'react'
import { motion } from 'framer-motion';

const ProjectsMenu = ({isActive, setIsActive}) => {
  

  const menuItems = [
    "Data Visualization",
    "Data Science",
    "Data Engineering",
    "Data Analytics",
  ];

  return (
    <nav className='menu'
    >
       <ul
       className='w-full'
       >
            {
              menuItems.map((item, index) => (
                <li key={index}
                onClick={()=>setIsActive(item)}
                className={`cursor-pointer p-3 mx-2 my-1 rounded-md w-[140px] z-10 flex flex-wrap text-wrap
                  ${isActive === item 
                    ? "bg-purple-700/50" 
                    : "bg-transparent hover:bg-purple-300/50 hover:bg-opacity-50 hover:text-white text-xs md:text-md"
                  }`}>
                  {item}
                </li>
              ))
            }
        </ul>
    </nav>
  )
}

export default ProjectsMenu
