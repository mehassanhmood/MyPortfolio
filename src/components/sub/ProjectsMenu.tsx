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
    <motion.nav className='menu'
    initial={{ opacity: 0 }}
    animate ={{opacity: 1}}
    exit={{opacity:0 , x:-20}}
    transition={{staggerChildren:0.3, duration:0.5}}
    >
       <motion.ul>
            {
              menuItems.map((item, index) => (
                <li key={index}
                onClick={()=>setIsActive(item)}
                className={`cursor-pointer p-3 mx-2 my-1 rounded-md 
                  ${isActive === item 
                    ? "bg-purple-700/50" 
                    : "bg-transparent hover:bg-purple-300/50 hover:bg-opacity-50 hover:text-white text-xs md:text-md overflow-hidden"
                  }`}>
                  {item}
                </li>
              ))
            }
        </motion.ul>
    </motion.nav>
  )
}

export default ProjectsMenu
