import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

const Header = () => {
    const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1'>
      <img  onClick={()=>toggleMenuHandler()} className='h-8 my-4 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png" alt="hamburgerlogo" />
      <a href="/">
      <img className='h-12 px-3 my-2 cursor-pointer' src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" alt="youtube_logo" />
      </a>
    </div>
    <div className='col-span-10  ' >
    <input className='w-1/2 border-gray-600 p-2 rounded-full' type="text" />
    <button className='px-10 my-4 border-gray-600 p-2'>Search</button>
    </div>
    <div className='col-span-1'>
        <img className='h-8' src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="usericon"/>
    </div>
    </div>
  )
}

export default Header;
