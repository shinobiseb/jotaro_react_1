import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion' 

type sidebarprops = {
  props : React.Dispatch<React.SetStateAction<any>>;
}

export default function Sidebar( {props} : sidebarprops ) {

  return (
      <motion.div 
      transition={{
        ease: "easeOut",
      }}
      initial={{y: -500}}
      animate={{y: 0}} 
      className='flex flex-col-reverse items-center justify-center sm:flex-col h-3/4 w-full sm:w-1/3 bg-light-pink sidebar-bg z-10 sidebar-box border-b-[1px] sm:border-r-[1px] fixed'>
        <div className='flex w-full sm:flex-end sm:items-end justify-center sm:justify-end p-4 sm:pt-3 sm:pr-3'>
          <i className="gg-close close-button" 
          onClick={()=> {
          props(!open)
          }}>
          </i>
        </div>
        
        
        <div className='flex flex-col h-full w-full bg-light-pink font-sans  px-4 sm:px-10 sm:py-5'>
          
          <h1 className='text-center mt-10 text-2xl sm:text-left lg:text-3xl text-pink'>
            Mika Ervin
          </h1>


          {/*---------- SIDEBAR LIST ----------*/}

          <ul className='flex flex-col justify-evenly text-center text-2xl lg:text-lg h-full w-full'>

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
              }}>3d Models</Link>
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
              <Link to='/contact'
               onClick={()=> {
                props(!open)
              }}>Contact</Link>
            </li>

            <p className='sm:flex hidden text-xs md:text-sm mt-10'>mikaervin@gmail.com</p>

          </ul>
        </div>
    </motion.div>
  )
}
