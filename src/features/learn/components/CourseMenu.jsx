import React from 'react'
import '../css/course_menu.css'


function CourseMenu(props) {

  const elements = props.data.lessons.map((lesson) => {
    return <li className='text-baseline font-light list-decimal m-2 cursor-pointer dark:text-gray-400 hover:text-sky-400'><a onClick={() => props.setLessonId(lesson.id)}>{lesson.title}</a></li>
  })
  return (
    <div className='bg-white mt-3 h-fit rounded-lg '>
      <div className=' w-fit p-4 rounded-lg dark:bg-black'>
        <h2 className='text-xl font-semibold text-center dark:text-gray-400'>{props.data.title}</h2>
        <ol>
          {elements}
        </ol>
      </div>
    </div>
  )
}

export default CourseMenu
