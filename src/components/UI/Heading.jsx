import React from 'react'

const Heading = ({h1Text,classes}) => {
  return (
    <h2 className={`text-5xl leading-[1.2] pt-[2rem] font-semibold relative heading ${classes}`}>
      {h1Text}
    </h2>
  )
}

export default Heading
