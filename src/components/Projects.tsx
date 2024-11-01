// @ts-nocheck
import React from 'react'
import ProjectCard from './sub/ProjectCard'

const Projects = () => {
  return (
    <div
        id='projects' 
        className='flex flex-col justify-center items-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
        <div className='flex flex-col md:flex-row gap-10 px-10 h-full w-full '>
            <ProjectCard 
            src='/NextWebsite.png'
            title='Modern Portfolio'
            description = "Digital footprint matters."
            />
            <ProjectCard 
            src='/CardImage.png'
            title='Interactive Cards'
            description = "Data Science Related."
            />
            <ProjectCard 
            src='/CardImage.png'
            title='Interactive Cards'
            description = "Data Science Related."
            />
        </div>
    </div>
  )
}

export default Projects
