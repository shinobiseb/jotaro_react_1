import React from 'react'
import { useEffect } from 'react'

export default function Gallery() {

  useEffect(() => {
  
  const gallery = document.getElementById("Gallery")

  function spawnDummies() {

    for(let i = 0; i < 20; i++) {
        //create a div
        let newDiv = document.createElement('div')
        //give div id of i
        newDiv.setAttribute("id", `div${i}`)
        newDiv.setAttribute("class", `dummyDiv`)
        //append div to gallery
        gallery?.appendChild(newDiv)
    }
  }

    spawnDummies()
  }, []);

  return (
    
    <div id='Gallery' className='flex w-screen border-solid border-2 border-black'>
      Gallery
    </div>
  )
}
