import React from 'react'

type stateprops = {
    state : any
}

export default function SidebarClosed( state : stateprops ) {

  return (
    <div className='bg-light-pink p-3 flex align-center items-center'>
      
        <button 
        onClick={state.state} 
        className='p-2'>
          <i className="gg-menu"></i>
        </button>
      
    </div>
  )
}
