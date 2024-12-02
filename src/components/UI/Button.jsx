import React from 'react'

const Button = ({classes,text,onClick}) => {
  return (
    <button className={`p-4 border-2 uppercase tracking-[0.15em] px-10 cursor-pointer transition-all dura ${classes}`} onClick={onClick}>{text}</button>
  )
}

export default Button
