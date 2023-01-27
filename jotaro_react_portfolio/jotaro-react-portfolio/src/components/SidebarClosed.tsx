import React from 'react'

type stateprops = {
    state : any
}

export default function SidebarClosed( stateprops ) {

    console.log(props)
  return (
    <div>
        <button onClick={props.setOpen} className='rounded-lg border-solid border-2 p-2'>Open Sidebar</button>
    </div>
  )
}
