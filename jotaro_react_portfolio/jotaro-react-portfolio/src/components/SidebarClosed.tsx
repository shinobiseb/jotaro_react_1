import React from 'react'

type stateprops = {
    state : any
}

export default function SidebarClosed( state : stateprops ) {

  return (
    <div>
        <button 
        onClick={state.state} 
        className='rounded-lg border-solid border-2 p-2'>Open Sidebar</button>
    </div>
  )
}
