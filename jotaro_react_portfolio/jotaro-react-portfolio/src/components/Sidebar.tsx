import React from 'react'

export default function Sidebar() {
  return (
      <div className='flex flex-col h-screen w-3/4 p-10 bg-dark-pink '>

        <h1 className='text-center text-4xl text-light-pink'>Jotaro Kujo</h1>

        <ul className='flex flex-col h-1/4 w-full mt-5'>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#other">Other</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>

          <p className='text-xs'>
          jotarokujo@cummingmail.net
        </p>
        </ul>
    </div>
  )
}
