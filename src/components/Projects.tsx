// @ts-nocheck
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectsMenu from './sub/ProjectsMenu';
import ProjectCard from './sub/ProjectCard';
import { projects} from "./utils/projects";



const Projects = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDemoVisible, setIsDemoVisible] = useState(false);
  const [isActive, setIsActive] = useState("Data Visualization");





  return (
    
    <div 
      id='projects'
      className='mx-auto mt-24 flex w-full max-w-7xl flex-col gap-6 px-6 py-14 sm:px-10 lg:px-12'
    >
      <div className='mb-8 max-w-2xl'>
        <p className='section-kicker'>Selected work / 03</p>
        <h1 className='section-title mt-3 font-semibold'>Systems that make data useful.</h1>
        <p className='mt-5 text-base leading-7 text-[#9aaead]'>A selection of production-minded work across quantitative finance, visual storytelling, machine learning, and data infrastructure.</p>
      </div>
      <div className='flex w-full flex-col gap-8 lg:flex-row lg:items-start'>

        <div className="relative flex h-full w-full flex-col lg:w-[24%]">
          {!isDemoVisible && <div className='flex w-[full] justify-center'>
            <button
              aria-label={isOpen ? 'Hide project categories' : 'Show project categories'}
              className= {`z-20 mx-auto flex items-center justify-center rounded-full border border-[#9fe8dc55] bg-[#102326aa] px-5 py-3 text-xs text-[#d6e5e3] backdrop-blur-lg transition duration-200 hover:border-[#9fe8dc] ${
              isOpen ? "translate-y-0" : "translate-y-10"
              } `}
              onClick={() => setIsOpen(!isOpen)}
              >
              <span>{isOpen ? 'Hide categories' : 'Show categories'}</span>
            </button>
          </div>}

            {/* Side Bar */}
          <div
            className={`z-10 mt-3 flex w-full justify-center py-2 text-xs text-gray-100 transition-transform duration-500 lg:justify-start`}    
            >
               <AnimatePresence>
                {isOpen && (
                      <ProjectsMenu isActive={isActive} setIsActive={setIsActive} />
                )}
                </AnimatePresence>
          </div>

        </div>
        
        <div  className= {`relative ${isOpen ? "flex-shrink" : "overflow-auto"} z-0 grid w-full grid-cols-1 justify-items-center text-white transition-all duration-300 sm:grid-cols-2 lg:w-[76%]`} >
          <AnimatePresence mode='wait'>
            {
              projects[isActive]?.map((project, index) => {
                return <ProjectCard key={`${isActive}-${project.id || index}`} src={project.src} title={project.title} description={project.description} source_code={project.source_code} deployed_app={project.deployed_app} isArchitecturalDemo={project.isArchitecturalDemo} onArchitecturalDemoOpen={() => { setIsOpen(false); setIsDemoVisible(true) }} onArchitecturalDemoClose={() => setIsDemoVisible(false)}/>
                  })
              
            }            
          </AnimatePresence>
        </div>  
      </div>
    </div>
  );
};

export default Projects;
