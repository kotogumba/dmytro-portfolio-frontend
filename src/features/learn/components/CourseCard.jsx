import React from 'react'
import '../css/course_card.css'

function Course(props) {
  return (
    <div className='col-8 col-md-4 drop-shadow-md w-48 h-16 p-3 m-3 rounded text-center bg-white course-card' onClick={() => props.setCourse(props.name)}>
      <h2 className="text-xl">
        {props.icon}
        {props.name}
      </h2>
    </div>
  )
}

export default Course
