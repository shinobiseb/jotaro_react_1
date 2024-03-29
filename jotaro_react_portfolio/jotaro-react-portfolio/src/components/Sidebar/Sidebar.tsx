import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion' 
import { useMediaQuery } from 'react-responsive'

type sidebarprops = {
  props : React.Dispatch<React.SetStateAction<any>>;
}

export default function Sidebar( {props} : sidebarprops ) {

  const isBigScreen = useMediaQuery({ minWidth: 640 })

  const sidebarAnimation = {
    initial: { 
      y: isBigScreen ? 0 : -700,  
      x: isBigScreen ? -250 : 0}
      ,
    animate: { 
      y: isBigScreen ? 0 : 0 ,
      x: isBigScreen ? 0 : 0
    },
    transition: { ease: 'easeOut' }
  }

  return (
      <motion.div 
      initial={sidebarAnimation.initial}
      animate={sidebarAnimation.animate}
      transition={sidebarAnimation.transition}
      className='flex flex-col-reverse items-center justify-center sm:flex-col h-3/4 w-full sm:w-1/3 sm:h-full bg-light-pink sidebar-bg z-10 border-b-[1px] sm:border-r-[1px] fixed sm:max-w-sm'>
        <div className='flex sm:flex-end sm:items-end justify-center w-full sm:justify-end p-4 sm:pt-3 sm:pr-3'>
          <i className="gg-close close-button" 
          onClick={()=> {
          props(!open)
          }}>
          </i>
        </div>
        
        {/*---------- SIDEBAR ----------*/}
        
        <div className='flex flex-col h-full bg-light-pink font-sans px-4 sm:px-10 sm:py-5'>
          
          <h1 className='text-center mt-10 text-2xl sm:text-left text-pink'>
            Mika Ervin
          </h1>


          {/*---------- SIDEBAR LIST ----------*/}

          <ul className='flex flex-col text-center justify-evenly sm:justify-start sm:text-left text-xl h-full sm:h-1/2 w-full sm:mt-10'>

            <li className='sidebar-link'>
              <Link to='/animations'
               onClick={()=> {
                props(!open)
              }}>Animations</Link>
            </li>

            <li className='sidebar-link'>
              <Link to='/modeling'
               onClick={()=> {
                props(!open)
              }}>3D Modeling</Link>
            </li>

            {/* <li className='sidebar-link'>
              <Link to='/storyboards'
               onClick={()=> {
                props(!open)
              }}>Storyboards</Link>
            </li> */}
            
            <li className='sidebar-link'>
              <Link to='/conceptart'
               onClick={()=> {
                props(!open)
              }}>Concept Art</Link>
            </li>

            <li className='sidebar-link'>
              <Link to='/seniorthesis'
               onClick={()=> {
                props(!open)
              }}>Senior Thesis</Link>
            </li>

            <li className='sidebar-link'>
              <Link to='/about'
               onClick={()=> {
                props(!open)
              }}>About</Link>
            </li>

            <li className='sidebar-link'>
              <Link to='/commission'
               onClick={()=> {
                props(!open)
              }}>Commission</Link>
            </li>

            <li className='sidebar-link'>
              <Link to='/contact'
               onClick={()=> {
                props(!open)
              }}>Contact</Link>
            </li>

          </ul>

          <p className='sm:flex hidden text-xs md:text-sm '>mikaervin@gmail.com</p>
        </div>
    </motion.div>
  )
}
