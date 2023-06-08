import React from 'react'
import { useEffect } from 'react'
import imgSpawner, { galleryLinks } from '../assets/Imageurls';

export default function Gallery() {

  useEffect(()=> {

    const galleryC = document.getElementById('Gallery')
    imgSpawner(galleryLinks, galleryC)

  }, []);

  return (
    
    <div id='Gallery' className='flex flex-wrap flex-row h-screen w-full border-solid justify-around p-4'>
    </div>
  )
}