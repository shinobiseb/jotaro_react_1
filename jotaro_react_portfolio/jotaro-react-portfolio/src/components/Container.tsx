import React from 'react'
import Gallery from './Gallery'
import { useState } from 'react'
import Other from './Other'
import Info from './Info'
import Contact from './Contact'

type compProps = {
  comp : string
}

export default function Container( comp : compProps) {

  console.log(comp)

  function renderComp() {
    if (typeof comp.comp !== "string") {
      console.error("Comp was not a string!");
      console.log(comp)
      return;
    }

    if (comp.comp === 'Gallery') {
      return <Gallery/>
    } else if (comp.comp === 'Info') {
      return <Info/>
    } else if (comp.comp === 'Other') {
      return <Other/>
    } else if (comp.comp === 'Contact') {
      return <Contact/>
    } else {
      return <h1>No comp found</h1>
    }
  }

  return (
    <div className='flex flex-col w-screen'>
      {renderComp()}
    </div>
  )
}
