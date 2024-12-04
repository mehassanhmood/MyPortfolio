// @ts-nocheck
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsMenu from './sub/ProjectsMenu';
import ProjectCard from './sub/ProjectCard';
import { projects} from "./utils/projects";



const Projects = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isActive, setIsActive] = useState("Data Visualization");





  return (
    
    <div 
    id='projects'
    className='flex flex-col gap-6 my-14 py-14 mt-[200px]  h-[full] w-[full]'>
      <h1 className='relative text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-teal-500 text-center mb-12 pb-14'>
        Projects
      </h1>

      <div className='flex flex-row w-[full]'>

        <div className="relative h-full flex flex-col w-[30%] md:w-[20%]">
            <button
            className= {`flex z-20 justify-center border border-4 border-indigo-500 rounded-full md:text-xs text-transparent items-center relative bg-clip-text bg-cyan-500 backdrop-blur-lg hover:opacity-70  ml-10 mb-[2] p-7  w-[10px] h-[10px] md:w-[20px] md:h-[25px] transition-transfrom duration-200 ${
              isOpen ? "translate-y-0" : "translate-y-10"
            } `}
            onClick={() => setIsOpen(!isOpen)}
            >
              <span className='hidden sm:block'>Projects</span>
              <span className='block sm:hidden font-bold text-xl'>P</span>
            </button>

            {/* Side Bar */}
          <div
            className={`relative z-10 left-0 w-[45%] bg-clip-text text-transparent bg-gradient-to-r from-purple-100  to-cyan-100 text-white mt-3 transition-transform duration-500 py-6 `}
            style={{ width: "100%" }}
          >

            {isOpen && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, staggerChildren:0.3 }}
                  className="overflow-hidden"
                >
                  <ProjectsMenu isActive={isActive} setIsActive={setIsActive} />
                </motion.div>
              </AnimatePresence>
            )}

          </div>

        </div>
        
        <div  className= {`relative  ${isOpen ? "flex-shrink" : "overflow-auto"}   flex flex-wrap shrink sm:flex-row sm:transition-all sm:duration-300 z-0 justify-center text-white sm:w-[75%] md:w-[80%] w-[70%]`} >
          <AnimatePresence>
            {
              projects[isActive]?.map((project: any, index: number) => (
                <ProjectCard key={index} src={project.src} title={project.title} description={project.description} source_code={project.source_code} deployed_app={project.deployed_app}/>
              ))
            }
          </AnimatePresence>
          </div>
          
      </div>
    </div>
  );
};

export default Projects;
