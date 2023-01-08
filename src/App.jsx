import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Portfolio from './components/Portfolio'
import React, { useRef, createContext } from "react";
import Learn from './features/learn/components/Learn'

export const ThemeContext = createContext('light');

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  const mainRef = useRef(null)
  const portfolioRef = useRef(null)
  const [page, setPage] = React.useState('main')

  const changePage = (page) => {
    setPage(page)
  }

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  if (darkMode) {
    document.body.style.backgroundColor = "black"
  } else {
    document.body.style.backgroundColor = "white"
  }

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <div className="dark:bg-gray-600">
          <Navbar changePage={changePage} activePage={page} darkMode={darkMode} toggleTheme={toggleTheme}/>
          <div className="container">

            {page === 'main' && <Main mainRef={mainRef} />}
            {page === 'portfolio' && <Portfolio portfolioRef={portfolioRef}/>}
            {page === 'learn' && <Learn />}

          </div>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
