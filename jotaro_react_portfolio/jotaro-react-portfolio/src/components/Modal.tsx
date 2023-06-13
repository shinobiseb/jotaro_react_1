import React from 'react'
import { useState } from 'react'

export default function Modal() {

    const [modalstate, setModalState] = useState(true)

    return (
    <div className='fixed'>

        {
        modalstate ? 
            <div className='fixed flex items-center justify-center z-3 h-screen w-screen overlay'>

                <div className='flex flex-col items-center justify-center w-5/6 h-3/4 border bg-slate drop-shadow-md z-5 fixed modal'>
    
                    <i className="gg-close close-button mt-3"
                    onClick={()=> setModalState(!modalstate)}>
                    </i>
                </div>
            </div> :
        null
        }

    </div>
  )
}