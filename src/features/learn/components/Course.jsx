import React from 'react'
import CourseMenu from './CourseMenu'
import Lesson from './Lesson'
import '../css/course.css'

function Course(props) {
  const [lessonId, setLessonId] = React.useState('1')
  const data = props.courseData

  return (
    <div className='course' >
      <CourseMenu setLessonId={setLessonId} data={data}/>
      <Lesson data={data.lessons[lessonId-1]}/>
    </div>
  )
}

export default Course
