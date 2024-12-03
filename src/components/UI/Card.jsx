import React from 'react'

const Card = ({children}) => {
  return (
    <div className='max-w-[1100px] mx-auto card'>
      {children}
    </div>
  )
}

export default Card
