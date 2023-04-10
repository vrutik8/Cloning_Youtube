import React from 'react'
import ButtonList from './ButtonList'

const Button = ({name}) => {
  return (
    <div className='m-2 py-2 px-5 bg-gray-200 rounded-lg'>{name}</div>
  )
}

export default Button