import React from 'react'
import '../css/lesson.css'

function lesson(props) {
  console.log('lessons', props)
  return (
    <div className='lesson'>
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
      <p>{props.data.body}</p>
    </div>
  )
}

export default lesson
