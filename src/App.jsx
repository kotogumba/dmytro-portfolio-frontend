import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import React, { useRef, createContext } from "react";
import Learn from './features/learn/components/Learn'
import Button from '@mui/material/Button';
import Articles from './features/Articles/Articles'

export const ThemeContext = createContext('light');

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  const mainRef = useRef(null)
  const [page, setPage] = React.useState('main')

  const changePage = (page) => {
    setPage(page)
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  // Change the background color of the body based on the theme for mobile devices on top and bottom
  // because in darkmode we see white notch and white bottom bar
  if (darkMode) {
    document.body.style.backgroundColor = "black"
    document.body.classList.add('dark')
  } else {
    document.body.style.backgroundColor = "white"
    document.body.classList.remove('dark')
  }

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className="App ">
        <div className="dark:bg-gray-600">
          <Navbar changePage={changePage} activePage={page} darkMode={darkMode} toggleTheme={toggleTheme}/>
          <div className="container min-h-screen">
            {page === 'main' && <Main mainRef={mainRef} />}
            {page === 'learn' && <Learn />}
            {page === 'articles' && <Articles />}
          </div>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
