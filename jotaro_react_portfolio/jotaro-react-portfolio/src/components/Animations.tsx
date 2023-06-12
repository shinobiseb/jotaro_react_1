import React from 'react'
import { useEffect } from 'react';
import { animationsLinks } from '../assets/Imageurls';
import { imgSpawner } from '../assets/Imageurls';
import Modal from './Modal';


export default function Animations() {

    useEffect(()=> {
      const container = document.getElementById('AnimationCont')
      // imgSpawner(animationImgLinks, container)
  }, []);

  return (
  <>
    <Modal/>
    <button></button>
    <div className='h-full w-full flex flex-row flex-wrap justify-center' id='AnimationCont'>
    </div>
  </>
  )
}
