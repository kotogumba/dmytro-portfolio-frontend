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
          <a onClick={() => props.changePage('main')} className={props.activePage === 'main' ? 'navlink active' : 'navlink'}>

              <i className="fa-solid fa-house dark:text-gray-400"></i>
              <p className="dark:text-gray-400">Home</p>

          </a>

        </li>
        <li>
           {/* Create a link to the section */}

          <a onClick={() => props.changePage('portfolio')} className={props.activePage === 'portfolio' ? 'navlink active' : 'navlink'}><i className="fa-solid fa-briefcase dark:text-gray-400"></i><p className="dark:text-gray-400">Portfolio</p></a>
          </li>
        <li><a onClick={() => props.changePage('learn')} className={props.activePage === 'learn' ? 'navlink active' : 'navlink'}><i className="fa-solid fa-graduation-cap dark:text-gray-400"></i><p className="dark:text-gray-400">Learn</p> </a></li>

      </ul>
      <button onClick={() => props.toggleTheme()} className='dark-mode-toggle border shadow-sm rounded'>
          <i className={`fa-solid text-blue-500 dark:text-blue-500 fa-${props.darkMode ? 'sun' : 'moon'}`}></i>
      </button>
    </div>
  )
}

export default Navbar
