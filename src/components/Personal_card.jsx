import React from 'react'
import avatar from '../assets/avatar.jpg'
import './css/main.css'

function Personal_card({mainRef}) {
  return (
    <div className='main container dark:bg-neutral-900' id='main' ref={mainRef}>
      <div className="row justify-content-center">
        <div className="col-8 col-md-4 main-left">
          <img src={avatar} alt='Plechun Dmytro' className='.img-fluid'/>
          <div className="main-links text-base font-light flex flex-column pt-3">
            <a href="https://www.linkedin.com/in/dmytroplechun" className='dark:text-gray-400'> <i className="fab fa-linkedin"></i> Linkedin</a>
            <a href="https://github.com/kotogumba" className='dark:text-gray-400'> <i className="fab fa-github"></i> Github</a>
          </div>
        </div>

        <div className='col-12 col-md-8 main-info'>
          <h1 className='text-5xl font-medium dark:text-gray-300'>Plechun Dmytro</h1>
          <h2 className='text-xl font-medium dark:text-gray-300'>Full-stack web developer</h2>
          <div className='flex flex-row mt-1 align-items-center'>
            <i className="fa-regular fa-comment dark:text-gray-300 mr-1"></i>
            <p className='text-sm font-medium dark:text-gray-300 mr-3'>English, Ukrainian, Russian</p>
            <i class="fa-solid fa-earth-americas dark:text-gray-300 mr-1"></i>
            <p className='text-sm font-medium dark:text-gray-300'>Remote</p>
          </div>
          <p className='mt-3 indent-8 dark:text-gray-300'>
            With a strong foundation in both front-end and back-end development,
            I have the skills and knowledge to create dynamic, visually appealing websites
            that are also highly functional and efficient. Whether you need a simple landing
              page or a complex web application, I have the experience and expertise to deliver
              high-quality results.
          </p>
          <p className='indent-8 dark:text-gray-300'>
            My proficiency in Figma allows me to create stunning design mockups that accurately capture the look and feel of your vision. And with my strong command of HTML, CSS, and JavaScript, I can turn those designs into pixel-perfect, responsive web pages that look great on all devices.
          </p>
          <p className='indent-8 dark:text-gray-300'>
            On the back-end, my expertise in Ruby and Ruby on Rails allows me to build robust, scalable applications that can handle even the most demanding workloads. And with my experience in React, I can create fast, dynamic user interfaces that provide a seamless experience for your users.
          </p>
          <p className='indent-8 dark:text-gray-300'>
            Overall, my diverse tech stack and proven track record make me the perfect choice for all your web development needs. Contact me today to see how I can help bring your project to life.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Personal_card
