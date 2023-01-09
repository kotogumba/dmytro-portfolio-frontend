import React from 'react'
import CourseMenu from './CourseMenu'
import Lesson from './Lesson'
import '../css/course.css'
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';



function Course(props) {
  const [lessonId, setLessonId] = React.useState('1')
  const data = props.courseData
  const isMobile = useMediaQuery('(max-width:600px)');
  console.log(isMobile)

  const handleClick = () => {
    console.log('click')
  }

  return (
    <div className='mt-3' >
      <div className='flex justify-between'>
        <Button variant="contained" className="bg-black" onClick={() => props.setCourse('')}>
          Back
        </Button>
        {isMobile ? (<IconButton aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton> ) : null}
      </div>
      <div className='flex flex-row gap-3'>
        {isMobile ? null : <CourseMenu setLessonId={setLessonId} data={data} />}
        <Lesson data={data.lessons[lessonId-1]}/>
      </div>
    </div>
  )
}

export default Course
