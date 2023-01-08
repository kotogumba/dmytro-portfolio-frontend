import React from 'react'
import { useContext } from 'react';
import './css/navbar.css'
import { ThemeContext } from '../App'

function Navbar(props) {

  const theme = useContext(ThemeContext);

  return (
    <div className="navbar dark:bg-neutral-900">
      <ul>
        <li>
          <a onClick={() => props.changePage('main')} className={props.activePage === 'main' ? 'navlink text-gray-900 dark:text-zinc-100' : 'navlink '}>
            <i className="fa-solid fa-house"></i>
            <p >Home</p>
          </a>
        </li>
        <li><a onClick={() => props.changePage('learn')} className={props.activePage === 'learn' ? 'navlink text-gray-900 dark:text-zinc-100' : 'navlink'}><i className="fa-solid fa-graduation-cap "></i><p className="">Learn</p> </a></li>

      </ul>
      <button onClick={() => props.toggleTheme()} className='dark-mode-toggle'>
          <i className={`fa-solid text-blue-500 dark:text-yellow-500 fa-${props.darkMode ? 'sun' : 'moon'}`}></i>
      </button>
    </div>
  )
}

export default Navbar
