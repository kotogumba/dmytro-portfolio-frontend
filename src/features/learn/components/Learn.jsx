import React from 'react'
import CourseCard from './CourseCard'
import Course from './Course'
import '../css/learn.css'
import data from '../data/react.json'


function Learn() {
  const [course, setCourse] = React.useState('')
  const [courseData, setCourseData] = React.useState(data)

  // select course from course data by course name
  const selectCourse = (courseName) => {
    const selectedCourseData = courseData.find((element) => element.title === courseName)
    
    return selectedCourseData
  }

  return (
    <div className='learn container'>
      {course != '' && <Course name={course} courseData={selectCourse(course)}/>}
      {course === '' && (
      <>
        <h1> Learn Courses </h1>
        <div className="courses">
          <CourseCard name="React" setCourse={setCourse} icon={<i className="fa-brands fa-react"></i>}/>
          <CourseCard name="Blockchain" setCourse={setCourse} icon={<i className="fa-brands fa-bitcoin"></i>}/>
        </div>
      </>
      )}
    </div>
  )
}

export default Learn
