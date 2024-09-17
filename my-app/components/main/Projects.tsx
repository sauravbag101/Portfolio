
import React from 'react'
import ProjectCard from './sub/ProjectCard'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Project
        </h1>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            <ProjectCard
            src='/NextWebsite.png'
            title='Modern Next.js Portfolio'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.'
            />
             <ProjectCard
            src='/SpaceWebsite.png'
            title='Modern Next.js Portfolio'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.'
            />
             <ProjectCard
            src='/CardImage.png'
            title='Modern Next.js Portfolio'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti.'
            />
        </div>
      
    </div>
  )
}

export default Projects
