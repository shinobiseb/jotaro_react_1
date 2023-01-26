import React from 'react'

export default function Sidebar() {
  return (
    <div>
      
      <div className='flex-column h-screen w-5/6 p-10 center-center bg-dark-pink'>

        <h1 className='text-center text-4xl font-sans text-light-pink'>Jotaro Kujo</h1>

        <ul className='flex-column h-1/4 w-full mt-5'>
          <li className='sidebar-item'><a href="#gallery">Gallery</a></li>
          <li className='sidebar-item'><a href="#other">Other</a></li>
          <li className='sidebar-item'><a href="#contact">Contact</a></li>
          <li className='sidebar-item'><a href="#about">About</a></li>

          <p className='text-xs mt-10'>
          jotarokujo@cummingmail.net
        </p>
        </ul>
      </div>
    </div>
  )
}
