import React from 'react'
import CourseCard from './CourseCard'
import Course from './Course'
import data from '../data/react.json'
import Alert from '@mui/material/Alert';


function Learn() {
  const [course, setCourse] = React.useState('')
  const [courseData, setCourseData] = React.useState(data)

  // select course from course data by course name
  const selectCourse = (courseName) => {
    const selectedCourseData = courseData.find((element) => element.title === courseName)

    return selectedCourseData
  }

  return (
    <div className='learn'>
      <Alert variant="filled" severity="info">
        This section is under development. Please check back later.
      </Alert>
      {course != '' && <Course name={course} courseData={selectCourse(course)} setCourse={setCourse}/>}
      {course === '' && (
      <>
        <div className='bg-white rounded-lg w-fit mt-3'>
          <div className='rounded-lg p-3 shadow-md w-fit dark:bg-neutral-900'>
            <h1 className='text-3xl font-semibold dark:text-gray-200 mb-3'> Learn Web3 </h1>
            <p className='text-baseline font-light dark:text-gray-200'> Learn the latest web technologies and build your own projects. </p>
            <p className='text-baseline font-light dark:text-gray-200'> Choose a course below to get started. </p>
            <p className='text-baseline font-light dark:text-gray-200'> If you have any questions, feel free to reach out to me </p>
          </div>
        </div>
        <div className="">
          <CourseCard name="React" setCourse={setCourse} icon={<i className="fa-brands fa-react"></i>}/>
          <CourseCard name="Blockchain" setCourse={setCourse} icon={<i className="fa-brands fa-bitcoin"></i>}/>
        </div>
      </>
      )}
    </div>
  )
}

export default Learn
