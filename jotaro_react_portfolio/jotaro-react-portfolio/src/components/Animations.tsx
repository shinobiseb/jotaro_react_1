import React from 'react'
import { useEffect } from 'react';
import { animationsLinks } from '../assets/Imageurls';
import { vidSpawner } from '../assets/Imageurls';
export default function Animations() {

    useEffect(()=> {
      const container = document.getElementById('AnimationCont')
      vidSpawner(animationsLinks, container)
  }, []);

  return (
    <div className='h-full w-full flex flex-row flex-wrap justify-center' id='AnimationCont'>

    </div>
  )
}
