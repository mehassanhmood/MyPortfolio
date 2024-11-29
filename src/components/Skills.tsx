// @ts-nocheck
import React, {useState} from 'react'
import SkillText from './sub/SkillText'
import { Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill } from '../constants'
import SkillDataProvider from './sub/SkillDataProvider'

const Skills = () => {
    const [count, setCounter] = useState(0)

  return (
    <div
    id='skills'
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 pb-80'
    style={{ transform: "scale(0.9" }}
    >
        <SkillText />

        <div className='flex flex-row justify-around flex-wrap mt-4 items-center gap-5'>
            {Skill_data.map((image, index)=>(
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                 />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 items-center gap-5'>
            {Frontend_skill.map((image, index)=>(
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                 />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 items-center gap-5'>
            {Backend_skill.map((image, index)=>(
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                 />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 items-center gap-5'>
            {Full_stack.map((image, index)=>(
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                 />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 items-center gap-5'>
            {Other_skill.map((image, index)=>(
                <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
                 />
            ))}
        </div>
    </div>
  )
}

export default Skills
