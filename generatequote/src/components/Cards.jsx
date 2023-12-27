import React from 'react'

function Cards({quote}) {

    
  return (
    <div className='card'>
      <p>{quote.content}</p>
      <p>{quote.author}</p>
    </div>
  )
}

export default Cards
