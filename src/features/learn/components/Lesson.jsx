import React from 'react'
import '../css/lesson.css'

function lesson(props) {
  return (
    <div className='bg-white w-fit h-fit rounded-lg mt-3'>
      <div className='w-fit rounded-lg p-4 dark:bg-black'>
        <h1 className='text-3xl font-medium dark:text-gray-400'>{props.data.title}</h1>
        <p className='indent-8 text-lg mt-3 font-light dark:text-gray-400'>{props.data.body}</p>
      </div>
    </div>
  )
}

export default lesson
