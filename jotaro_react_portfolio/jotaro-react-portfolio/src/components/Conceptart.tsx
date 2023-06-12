import React from 'react'
import  imgSpawner  from '../assets/Imageurls'
import { conceptArtLinks } from '../assets/Imageurls'
import { useEffect } from 'react'

export default function Conceptart() {

  const container = document.getElementById('conceptArtContainer')
  imgSpawner(conceptArtLinks, container)

  return (
    <div id='conceptArtContainer'>

    </div>
  )
}
