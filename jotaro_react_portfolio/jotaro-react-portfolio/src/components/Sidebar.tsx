import React from 'react'

type sidebarprops = {
  props : React.Dispatch<React.SetStateAction<any>>;
  setState : React.Dispatch<React.SetStateAction<any>>;
}

export default function Sidebar( {props, setState} : sidebarprops ) {

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
            Jotaro Kujo
          </h1>

          <ul className='flex flex-col text-xl h-1/3 justify-evenly w-full'>
            <li className='sidebar-link'>
              <a onClick={()=> setState('Gallery')} href="#gallery">Gallery</a>
            </li>
            <li className='sidebar-link'>
              <a onClick={()=> setState('Other')} href="#other">Other</a>
            </li>
            
            <li className='sidebar-link'>
              <a onClick={()=> setState('About')} href="#about">About</a>
            </li>

            <li className='sidebar-link'>
              <a onClick={()=> setState('Contact')} href="#contact">Contact</a>
            </li>
            

            {/* <p className='text-sm mt-5'>
              jotarokujo@cummingmail.net
            </p> */}

          </ul>
        </div>
    </div>
  )
}
