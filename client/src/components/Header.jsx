import React from 'react'

const Header = () => {
  return (
    <div className='border-gray-100 w-full h-14 border-b flex justify-between items-center px-5 '>
      <a href="#" className='text-2xl font-medium inline-flex items-center text-blue-800'>
        ./prototurk
      </a>
      <form action="" className='w-1/3'>
        <input type="text" placeholder='Search..' className='w-full bg-gray-100 h-10 px-3 rounded placeholder-gray-500 focus:outline focus:outline-1'/>
      </form>
      <a href="#" className='bg-blue-800 text-white h-10 inline-flex items-center px-5 rounded hover:bg-blue-900'>Login</a>
    </div>
  )
}

export default Header
