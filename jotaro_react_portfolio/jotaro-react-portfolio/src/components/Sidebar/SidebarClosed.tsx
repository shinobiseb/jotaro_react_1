import React from 'react'

type stateprops = {
    state : any
}

export default function SidebarClosed( state : stateprops ) {

  return (
    <div className='bg-light-pink p-3 w-full sm:h-full sm:w-10 sm:p-0  flex fixed align-center items-center border-b-[1px]'>
      
        <button 
        onClick={state.state} 
        className='p-2'>
          <i className="gg-menu"></i>
        </button>
      
    </div>
  )
}
