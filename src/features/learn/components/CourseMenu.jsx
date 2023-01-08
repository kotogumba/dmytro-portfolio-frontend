import React from 'react'
import '../css/course_menu.css'

function CourseMenu(props) {
  const elements = props.data.lessons.map((lesson) => {
    return <li ><a onClick={() => props.setLessonId(lesson.id)}>{lesson.title}</a></li>
  })
  return (
    <div className='course-menu'>
      <h2>{props.data.title}</h2>
      <ol>
        {elements}
      </ol>
    </div>
  )
}

export default CourseMenu
