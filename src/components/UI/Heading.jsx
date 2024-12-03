import React from 'react'

const Heading = ({h1Text,classes}) => {
  return (
    <h2 className={`text-5xl leading-[1.2] font-semibold ${classes}`}>
      {h1Text}
    </h2>
  )
}

export default Heading
