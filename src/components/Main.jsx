import React from 'react'
import './css/main.css'
import Personal_card from './Personal_card'
import Tech_stack from './Tech_stack'


function Main({mainRef}) {
  return (
    <div className="main-wrapper">
      <Personal_card mainRef={mainRef}/>
      <Tech_stack />
    </div>
  )
}

export default Main
