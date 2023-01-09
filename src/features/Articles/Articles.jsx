import React from 'react'
import Card from './components/Card'
import Article from './components/Article'
import Button from '@mui/material/Button';

function Articles() {
  const [article, setArticle] = React.useState(null)

  const handleClick = () => {
    setArticle(null)
  }

  return (
    <div className='mt-3'>
      { !article && (
        <div className='bg-white w-fit rounded-lg'>
          <div className='rounded-lg p-3 shadow-sm w-fit dark:bg-neutral-900 '>
            <h1 className='text-3xl font-semibold dark:text-gray-200 mb-3'>Articles</h1>
            <p className=' dark:text-gray-200'> Read latest articles and learn new things. </p>
          </div>
        </div>
      )}
      { article && (
        <Button variant="contained" className="bg-black" onClick={handleClick}>
          Back
        </Button>
      )}

      <div className='mt-3'>
        { article && <Article title={'Create your first app with modern React'}/> }
        { !article && <Card id={1} key={1} title={'Create your first app with modern React'} setArticle={setArticle}/> }
      </div>
    </div>
  )
}

export default Articles
