import React from 'react'
import { useEffect } from 'react'

export default function Modeling() {

  useEffect(() => {
  
  const modeling = document.getElementById("modeling")

  function spawnDummies() {

    for(let i = 0; i < 10; i++) {
        //create a div
        let newDiv = document.createElement('div')
        //give div id of i
        newDiv.setAttribute("id", `div${i}`)
        newDiv.setAttribute("class", `dummyDiv`)
        //append div to modeling
        modeling?.appendChild(newDiv)
    }
  }

    // spawnDummies()
  }, []);

  

  return (
    
    <div id='Modeling' className='flex flex-wrap flex-row h-screen w-full border-solid justify-around p-6'>
    </div>
  )
}
