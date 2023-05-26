import React from 'react'
import { useState } from 'react'

type sidebarprops = {
  props : React.Dispatch<React.SetStateAction<any>>;
  setState : React.Dispatch<React.SetStateAction<any>>;
}

export default function Sidebar( {props, setState} : sidebarprops ) {

  return (
      <div className='flex flex-col h-screen w-1/3 bg-dark-pink sidebar-bg z-10 sidebar-box'>

        <button 
        className='close-button pr-3'
        onClick={()=> {
          props(!open)
        }}>
          X
        </button>
        
        <div className='flex flex-col h-full w-3/4 bg-dark-pink p-10 font-sans'>
          
          <h1 className='text-left text-xl text-light-pink mb-2'>Jotaro Kujo</h1>

          <ul className='flex flex-col text-xl h-1/3 justify-evenly w-full'>
            <li className='sidebar-link'>
              <a href="#gallery">Gallery</a>
            </li>
            <li className='sidebar-link'>
              <a href="#other">Other</a>
            </li>
            <li className='sidebar-link'>
              <a href="#contact">Contact</a>
            </li>
            <li className='sidebar-link'>
              <a href="#about">About</a>
            </li>

            {/* <p className='text-sm mt-5'>
              jotarokujo@cummingmail.net
            </p> */}

          </ul>
        </div>
    </div>
  )
}
