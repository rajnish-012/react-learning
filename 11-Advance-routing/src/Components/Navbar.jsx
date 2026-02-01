import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='absolute left-0 right-0 px-8 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 flex items-center justify-between py-4 shadow-inner'>
      <h2 className='text-2xl font-bold'>Rajnish.</h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
