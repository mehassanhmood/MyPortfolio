// @ts-nocheck
import { motion } from 'framer-motion';

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
    "Quantitative AI",
    "Data Visualization",
    "Data Science",
    "Data Engineering",
  ];

  return (
   
      <motion.div className='menu w-full space-y-1'
      variants={containerVariants}
      initial="initial"
      animate="final"
      exit="initial"
      >
              {
                menuItems.map((item, index) => (
                  <motion.button key={index}
                  type='button'
                  onClick={()=>setIsActive(item)}
                  whileTap={{scale:0.97}}
                  variants={itemsVariations}
                  className={`mx-2 my-1 flex w-[calc(100%-1rem)] cursor-pointer flex-wrap rounded-xl border border-transparent p-3 text-left text-xs text-gray-100 transition-colors md:text-sm
                    ${isActive === item 
                      ? "border-[#9fe8dc44] bg-[#9fe8dc1c] text-[#9fe8dc]" 
                      : "bg-transparent hover:border-[#9fe8dc22] hover:bg-[#9fe8dc0d] "
                    }`}>
                    {item}
                  </motion.button>
                ))
              }
      </motion.div>
  )
}

export default ProjectsMenu
