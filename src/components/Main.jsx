import React from 'react'
import './css/main.css'
import Personal_card from './Personal_card'
import Tech_stack from './Tech_stack'
import Projects from './Projects'

function Main({mainRef}) {
  return (
    <div className="main-wrapper">
      <Personal_card mainRef={mainRef}/>
      <Tech_stack />
      <Projects />
    </div>
  )
}

export default Main
