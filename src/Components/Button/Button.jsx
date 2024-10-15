import React from 'react'
 import buttonCss from './button.module.css'
const Button = ({ onClick ,label}) => {
  return (
    <button className= { ` mt-3  text-black text-[1.1vw]   mx-auto my-2 ${buttonCss.mainBtn}`}   onClick={onClick}>{label}</button>

  )
}

export default Button
