import React from 'react'
import juniorhub from '../assets/juniorhub.png'
import pets from '../assets/rent_a_pet.jpeg'
import quizz from '../assets/quizz.jpeg'
import './css/portfolio.css'
import ProjectModal from './ProjectModal'
import {data} from './projects_data'

function Projects() {
  const project =
    <div className="project">
      <img src={quizz} alt="project 1" className='rounded'/>
      <p className='dark:text-gray-400'> Quizzical</p>
    </div>

  const project1 =
         <div className="project mb-3">
          <img src={juniorhub} alt="project 1" className='rounded'/>
          <p className='dark:text-gray-400'> Juniorhub</p>
        </div>

  const project2 =
  <div className="project mb-3">
    <img src={pets} alt="project 1" className='rounded'/>
    <p className='dark:text-gray-400'> Rent a Pet</p>
  </div>

  return (
    <div className="portfolio-card dark:bg-neutral-900">
      <p className="text-3xl dark:text-gray-400 mb-3">Projects</p>
      <div className="row justify-content-center">
        <ProjectModal project={project1} projectInfo={data[0]} img={juniorhub}/>
        <ProjectModal project={project2} projectInfo={data[1]} img={pets}/>
        <ProjectModal project={project} projectInfo={data[2]} img={quizz}/>
      </div>
    </div>

  )
}

export default Projects
