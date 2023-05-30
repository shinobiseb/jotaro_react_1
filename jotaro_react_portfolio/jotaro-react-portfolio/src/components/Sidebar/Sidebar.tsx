import React from 'react'
import { Link } from 'react-router-dom'

type sidebarprops = {
  props : React.Dispatch<React.SetStateAction<any>>;
}

export default function Sidebar( {props} : sidebarprops ) {

  return (
      <div className='flex flex-col h-screen w-1/3 bg-light-pink sidebar-bg z-10 sidebar-box border-r-[1px]'>
        <div className='flex w-full flex-end items-end justify-end pt-3 pr-3'>
          <i className="gg-close close-button" 
          onClick={()=> {
          props(!open)
          }}>
          </i>
        </div>
        
        
        <div className='flex flex-col h-full w-full bg-light-pink font-sans px-10 py-5'>
          
          <h1 className='text-left text-3xl text-pink mb-5'>
            Mika Ervin
          </h1>

          <ul className='flex flex-col text-lg h-full w-full'>
            <li className='sidebar-link'>
              <Link to='/'>Gallery</Link>
            </li>

            <li className='sidebar-link'>
              <Link to='/about'>About</Link>
            </li>

            <li className='sidebar-link'>
              <Link to='/contact'>Contact</Link>
            </li>

            <li className='sidebar-link'>
              <Link to='/seniorthesis'>Senior Thesis</Link>
            </li>

            <li className='sidebar-link'>
              <Link to='/animations'>Animations</Link>
            </li>

            <li className='sidebar-link'>
              <Link to='/storyboards'>Storyboards</Link>
            </li>
            
            <li className='sidebar-link'>
              <Link to='/conceptart'>Concept Art</Link>
            </li>

            <p className='text-sm mt-10'>mikaervin@gmail.com</p>

          </ul>
        </div>
    </div>
  )
}
