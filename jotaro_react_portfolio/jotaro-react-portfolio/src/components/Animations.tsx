import React from 'react'
import { useEffect, useState } from 'react';
import { animationsLinks } from '../assets/Imageurls';
import {imgSpawner} from '../assets/Imageurls';
import Modal from './Modal';


export default function Animations() {

  const [modalstate, setModalState] = useState(false)

    useEffect(()=> {
      const container = document.getElementById('AnimationCont')
      imgSpawner(animationsLinks, container)

      if(container) {
        for (const child of container?.children) {
          child.addEventListener('click', ()=> setModalState(!modalstate))
        }
      } else {
        console.warn('container not found')
      }
  }, []);

  return (
  <>
    <Modal state={modalstate} setState={setModalState}/>
    <button></button>
    <div className='h-full w-full flex flex-row flex-wrap justify-center' id='AnimationCont'>
    </div>
  </>
  )
}
