// @ts-nocheck
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsMenu from './sub/ProjectsMenu';
import ProjectCard from './sub/ProjectCard';
import { projects} from "./utils/projects";



const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("Data Visualization");





  return (
    
    <div 
    id='projects'
    className='flex flex-col gap-6 my-6 py-6 h-[full] w-[full]'>
      <h1 className='relative text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500  to-teal-500 text-center mb-12 pb-10'>
        Projects
      </h1>

      <div className='flex flex-row'>

        <div className="h-full flex flex-col justify-center items-center w-[20%]">
            <button
            className= {`flex z-20 justify-center border border-4 border-indigo-500 rounded-full text-xs text-transparent items-center relative bg-clip-text bg-cyan-500 backdrop-blur-lg hover:opacity-70  mx-2 mb-[2] p-7 w-[20px] h-[25px] transition-transfrom duration-200 ${
              isOpen ? "translate-y-0" : "translate-y-10"
            } `}
            onClick={() => setIsOpen(!isOpen)}
            >
              Projects
            </button>

            {/* Side Bar */}
          <div
            className={`relative z-10 left-0  bg-clip-text text-transparent bg-gradient-to-r from-purple-100  to-cyan-100 text-white mt-3 transition-transform duration-500 py-6`
          }
            style={{ width: "80%" }}
          >
            {isOpen && (
            <AnimatePresence>
              <ProjectsMenu isActive={isActive} setIsActive={setIsActive}/>
            </AnimatePresence> )}
          </div>

        </div>
        
        <div className=' flex flex-row justify-around text-white w-[75%]'>
          <AnimatePresence>
            {
              projects[isActive]?.map((project: any, index: number) => (
                <ProjectCard key={index} src={project.src} title={project.title} description={project.description} />
              ))
            }
          </AnimatePresence>
          </div>
          
      </div>
    </div>
  );
};

export default Projects;

