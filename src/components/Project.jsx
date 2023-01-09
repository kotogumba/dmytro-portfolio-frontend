import React from 'react'

function Project(props) {

  return (
    <div>
      <div className="links">
        <a className="text-sm dark:text-gray-400" href={props.projectInfo.url}><i class="fa-solid fa-globe"></i> - {props.projectInfo.url}</a>
        <a className="text-sm dark:text-gray-400" href={props.projectInfo.github}><i class="fa-brands fa-github"></i> - {props.projectInfo.github}</a>
      </div>
      <p className="mt-3 indent-8 dark:text-gray-400">{props.projectInfo.description}</p>
    </div>
  )
}

export default Project
