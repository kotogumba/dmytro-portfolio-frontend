import React from 'react'
import juniorhub from '../assets/juniorhub.png'
import juniorhub_blogs from '../assets/juniorhub/juniorhub_blogs.png'
import juniorhub_chat from '../assets/juniorhub/juniorhub_chat.png'
import juniorhub_job_apps from '../assets/juniorhub/juniorhub_job_apps.png'
import juniorhub_jobs from '../assets/juniorhub/juniorhub_jobs.png'
import juniorhub_profile from '../assets/juniorhub/juniorhub_profile.png'
import juniorhub_profiles from '../assets/juniorhub/juniorhub_profiles.png'
import pet1 from '../assets/rent_a_pet/rent_a_pet_index.png'
import pet2 from '../assets/rent_a_pet/rent_a_pet_all_pets.png'
import pet3 from '../assets/rent_a_pet/rent_a_pet_booking.png'
import pet4 from '../assets/rent_a_pet/rent_a_pet_dashboard.png'
import pet5 from '../assets/rent_a_pet/rent_a_pet_dashboard1.png'
import pets from '../assets/rent_a_pet.jpeg'
import quizz from '../assets/quizz.jpeg'
import quiz1 from '../assets/quiz1.png'
import quiz2 from '../assets/quiz2.png'
import quiz3 from '../assets/quiz3.png'
import './css/portfolio.css'
import ProjectModal from './ProjectModal'
import {data} from './projects_data'

const quizArray = [quiz1, quiz2, quiz3]
const rent_a_petArray = [pet1, pet2, pet3, pet4, pet5]
const juniorhubArray = [juniorhub, juniorhub_blogs, juniorhub_chat, juniorhub_job_apps, juniorhub_jobs, juniorhub_profile, juniorhub_profiles]
function Projects() {
  const project =
    <div className="project rounded shadow-lg transform transition duration-500 hover:scale-105">
      <img src={quizz} alt="project 1" className='rounded'/>
      <p className='p-1 dark:text-gray-400'> Quizzical</p>
    </div>

  const project1 =
         <div className="project mb-3 rounded shadow-lg transform transition duration-500 hover:scale-105">
          <img src={juniorhub} alt="project 1" className='rounded'/>
          <p className='p-1 dark:text-gray-400'> Juniorhub</p>
        </div>

  const project2 =
  <div className="project mb-3 shadow-lg rounded transform transition duration-500 hover:scale-105">
    <img src={pets} alt="project 1" className='rounded'/>
    <p className='p-1 dark:text-gray-400'> Rent a Pet</p>
  </div>

  return (
    <div className="portfolio-card dark:bg-neutral-900">
      <p className="text-3xl dark:text-gray-400 mb-3">Projects</p>
      <div className="row justify-content-center">
        <ProjectModal project={project1} projectInfo={data[0]} img={juniorhub} imgArray={juniorhubArray}/>
        <ProjectModal project={project2} projectInfo={data[1]} img={pets} imgArray={rent_a_petArray}/>
        <ProjectModal project={project} projectInfo={data[2]} img={quizz} imgArray={quizArray}/>
      </div>
    </div>

  )
}

export default Projects
