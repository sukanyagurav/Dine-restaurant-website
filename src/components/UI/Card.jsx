import React from 'react'

const Card = ({children,classes=""}) => {
  return (
    <div className={`max-w-[1100px] mx-auto card ${classes}`}>
      {children}
    </div>
  )
}

export default Card
