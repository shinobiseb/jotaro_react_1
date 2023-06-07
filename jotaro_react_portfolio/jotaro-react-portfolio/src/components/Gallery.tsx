import React from 'react'
import { useEffect } from 'react'

export default function Gallery() {

  useEffect(()=> {
  const galleryImgs = [
    "https://i.imgur.com/m4nvOEU.png",
    "https://i.imgur.com/GnPQlI1.png",
    "https://i.imgur.com/zRKNJfq.jpg",
    "https://i.imgur.com/tEE80yR.png",
    "https://i.imgur.com/poeDfRV.png",
    "https://i.imgur.com/TFgDhEu.jpg",
    "https://i.imgur.com/oLdF5dA.png",
    "https://i.imgur.com/DR4CWtR.jpg",
    "https://i.imgur.com/XqQyAQo.jpg",
    "https://i.imgur.com/ILezUzh.jpg",
  ]

  const galleryS = document.getElementById('Gallery')

  function imgSpawner() {
    for(let i = 0; i < galleryImgs.length; i++) {
      let imgC = document.createElement('img')
      imgC.setAttribute('src', `${galleryImgs[i]}`)
      imgC.setAttribute('id', `img${i}`)
      imgC.setAttribute('class', `gallery-img`)
      galleryS?.appendChild(imgC)
    }
  }

  imgSpawner()
  }, [])

  return (
    
    <div id='Gallery' className='flex flex-wrap flex-row h-screen w-full border-solid justify-around p-4'>
    </div>
  )
}
