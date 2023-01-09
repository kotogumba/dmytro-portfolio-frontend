import React from 'react'
import './css/footer.css'

function Footer() {
  return (
    <footer className="footer bg-neutral-900" id="footer">
      <div className='text-3xl p-3'>
        <a href="https://www.linkedin.com/in/dmytroplechun" > <i className="fab fa-linkedin hover:text-sky-300"></i> </a>
        <a href="https://github.com/kotogumba"> <i className="fab fa-github hover:text-sky-300"></i> </a>
      </div>
      <p className='text-center text-sm text-gray-400'>Made with <i className="fa-solid fa-heart text-red-500"></i> by Dmytro Plechun</p>
      <p>Copyright 2023 | All rights reserved</p>
    </footer>
  )
}

export default Footer
