import React from 'react'
import '../css/course_card.css'

function Course(props) {
  return (
    <div className='course-card' onClick={() => props.setCourse(props.name)}>
      <h2>
        {props.icon}
        {props.name}
      </h2>
    </div>
  )
}

export default Course
