import React from 'react'

function Article(props) {
  return (
    <div className='bg-white rounded w-full'>

      <div className="rounded p-3  w-full indent-4 dark:bg-black">
        <h1 className='text-3xl mb-3 text-center dark:text-white'>{props.title}</h1>
        <div className='text-lg font-light'>
          <p className='  dark:text-gray-200'>Welcome. Today we will create together simple app with React. Let's start.</p>
          <p className='  dark:text-gray-200'>First lets install vite. Run vite new. Choose react javascript. npm run dev </p>
          <p className='  dark:text-gray-200'> Congrats! It works! </p>
        </div>
      </div>
    </div>
  )
}

export default Article
