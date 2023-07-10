import React from 'react'

type stateprops = {
    state : any
}

export default function SidebarClosed( state : stateprops ) {

  return (
    <div className='bg-light-pink z-5 p-3 w-screen sm:h-full sm:w-10 sm:p-0 fixed top-0 align-center items-center border-b-[1px] z-20'>
      
        <button 
        onClick={state.state} 
        className='p-2 sm:pt-4 flex items-center'>
          <i className="gg-menu"></i>
        </button>
      
    </div>
  )
}
