import React from 'react'

function Project(props) {

  return (
    <div>
      <div className="links">
        <a className="text-sm text-blue-300" href={props.projectInfo.url}><i className="fa-solid fa-globe"></i> - {props.projectInfo.url}</a>
        <a className="text-sm text-blue-300" href={props.projectInfo.github}><i className="fa-brands fa-github"></i> - {props.projectInfo.github}</a>
      </div>
      <p className="mt-3 text-base font-light indent-8 dark:text-gray-400">{props.projectInfo.description}</p>
    </div>
  )
}

export default Project
