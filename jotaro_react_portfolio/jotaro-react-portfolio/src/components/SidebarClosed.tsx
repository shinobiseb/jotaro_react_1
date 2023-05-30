import React from 'react'

type stateprops = {
    state : any
}

export default function SidebarClosed( state : stateprops ) {

  return (
    <div className='bg-light-pink border-r-[1px]'>
        <button 
        onClick={state.state} 
        className='p-2 bg-light-pink'>
          =
        </button>
    </div>
  )
}
