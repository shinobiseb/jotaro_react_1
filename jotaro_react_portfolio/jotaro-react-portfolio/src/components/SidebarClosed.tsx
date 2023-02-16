import React from 'react'

type stateprops = {
    state : any
}

export default function SidebarClosed( state : stateprops ) {

  return (
    <div className='bg-dark-pink'>
        <button 
        onClick={state.state} 
        className='p-2 bg-dark-pink'>
          =
        </button>
    </div>
  )
}
