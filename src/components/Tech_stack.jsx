import React from 'react'
import tech_img from '../assets/tech.png'

function Tech_stack() {
  return (
    <div className='tech-stack rounded-xl p-3 mt-3 dark:bg-neutral-800'>
      <p className='text-2xl dark:text-gray-400 mb-3'>Tech Stack</p>
      <img src={tech_img} alt='tech stack' className='tech-img'/>
    </div>
  )
}

export default Tech_stack
