import React from 'react'
import CourseMenu from './CourseMenu'
import Lesson from './Lesson'
import '../css/course.css'
import Button from '@mui/material/Button';

function Course(props) {
  const [lessonId, setLessonId] = React.useState('1')
  const data = props.courseData

  return (
    <div className='mt-3' >
      <Button variant="contained" className="bg-black" onClick={() => props.setCourse('')}>
        Back
      </Button>
      <div className='flex flex-row gap-3'>

        <CourseMenu setLessonId={setLessonId} data={data}/>
        <Lesson data={data.lessons[lessonId-1]}/>
      </div>
    </div>
  )
}

export default Course
