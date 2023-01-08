import React from 'react'
import juniorhub from '../assets/juniorhub.png'

function Projects() {
  return (
    <div className="portfolio-card dark:bg-neutral-900">
      <p className="text-3xl dark:text-white">Projects</p>
      <div>
        <div className="portfolio-card-item">
          <img src={juniorhub} alt="project 1" className='rounded'/>
          <div className="links">
            <a className="dark:text-white" href="www.juniorhub.me">URL - www.juniorhub.me</a>
            <a className="dark:text-white" href="https://github.com/kotogumba/juniorhub">Github - https://github.com/kotogumba/juniorhub</a>
          </div>
          <p className="dark:text-white">"Juniorhub is a web-based platform built using the Ruby on Rails framework. It was developed by a team of four and serves as a hub for junior developers. The platform features a chat function, notification system, and a blog with comment and like functionality. It also includes a job posting section with the ability to favorite posts and apply filters and search functions. The platform also includes a dashboard for users to keep track of their activity on the site. Overall, Juniorhub aims to provide a centralized location for junior developers to connect, share knowledge, and find job opportunities."</p>

        </div>
      </div>
    </div>

  )
}

export default Projects
