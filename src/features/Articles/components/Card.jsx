import React from 'react'

function card(props) {
  const handleClick = () => {
      props.setArticle(props.id)
  }

  return (
    <div className='bg-white px-3 py-2 w-full h-16 md:w-2/3 rounded shadow-sm mb-3 dark:bg-black' onClick={handleClick}>
      <p className='text-lg font-normal text-sky-500 hover:text-sky-800 cursor-pointer'>{props.title}</p>
      <p className='text-xs font-light dark:text-gray-400'> Author: Dmytro</p>
    </div>
  )
}

export default card
