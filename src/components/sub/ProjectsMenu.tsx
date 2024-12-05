// @ts-nocheck
import React  from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsMenu = ({isActive, setIsActive}) => {
  
  const containerVariants ={
    initial: {y:-70, opacity:0,scale:0, borderRadius: "80%" },
    final: {y:0, opacity:0.9, scale:1 ,borderRadius: "0%",
      transition: {delay:0.1, duration:0.4, staggerChildren:0.2, when:"beforeChildren"}
    }
  }

  const itemsVariations = {
    initial: {y:-10, opacity:0},
    final: {y:0, opacity:0.9},
  }


  const menuItems = [
    "Data Visualization",
    "Data Science",
    "Data Engineering",
    "Data Analytics",
  ];

  return (
   
      <motion.div className='menu'
      variants={containerVariants}
      initial="initial"
      animate="final"
      exit="initial"
      >
              {
                menuItems.map((item, index) => (
                  <motion.li key={index}
                  onClick={()=>setIsActive(item)}
                  whileTap={{scale:0.97}}
                  variants={itemsVariations}
                  className={`cursor-pointer p-3 mx-2 my-1 rounded-md w-[140px] z-10 flex flex-wrap text-wrap bg-text-clip text-gray-100 text-xs md:text-md
                    ${isActive === item 
                      ? "bg-purple-700/50" 
                      : "bg-transparent hover:bg-purple-300/50 hover:bg-opacity-50 "
                    }`}>
                    {item}
                  </motion.li>
                ))
              }
      </motion.div>
  )
}

export default ProjectsMenu
