import React from 'react'
import { useState } from 'react'

type modalProps = {
    state : boolean
    setState : React.Dispatch<React.SetStateAction<boolean>> 
}

export default function Modal(props : modalProps) {

    return (props.state) ? 
    (
    <div className='fixed'>
            <div className='fixed flex items-center justify-center z-3 h-screen w-screen overlay'>
                <div className='flex flex-col items-center justify-center w-5/6 h-3/4 border bg-slate drop-shadow-md z-5 fixed modal'>
                    <i className="gg-close close-button mt-3"
                    onClick={()=> props.setState(!props.state)}>
                    </i>
                </div>
            </div> 
    </div>
    ) 
    : null;
}