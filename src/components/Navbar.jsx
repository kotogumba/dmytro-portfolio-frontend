import React from 'react'
import { useContext } from 'react';
import './css/navbar.css'
import { ThemeContext } from '../App'
import stand_with_ukraine from '../assets/stand_with_Ukraine.jpg'

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
        <li><a onClick={() => props.changePage('learn')} className={props.activePage === 'learn' ? 'navlink text-gray-900 dark:text-zinc-100' : 'navlink'}><i className="fa-solid fa-graduation-cap "></i><p className="">Learn Web3</p> </a></li>

      </ul>
      <div className='flex items-center gap-3'>
        <a href="https://standforukraine.com/" target="_blank" >
          <img src={stand_with_ukraine} alt="stand for ukraine logo" className="h-10 w-15" />
        </a>
        <button onClick={() => props.toggleTheme()} className='dark-mode-toggle'>
            <i className={`fa-solid text-blue-500 dark:text-yellow-500 fa-${props.darkMode ? 'sun' : 'moon'}`}></i>
        </button>
      </div>
    </div>
  )
}

export default Navbar
