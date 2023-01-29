import React from 'react'

type stateprops = {
    state : any
}

export default function SidebarClosed( stateprops ) {

    console.log(stateprops)
  return (
    <div>
        <button onClick={stateprops.setOpen} className='rounded-lg border-solid border-2 p-2'>Open Sidebar</button>
    </div>
  )
}
