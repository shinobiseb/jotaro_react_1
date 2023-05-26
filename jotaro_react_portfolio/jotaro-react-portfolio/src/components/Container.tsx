import React from 'react'
import Gallery from './Gallery'
import { useState } from 'react'
import Other from './Other'
import Info from './Info'

type compProps = {
  comp : string
}

export default function Container( comp : compProps) {

  function renderComp() {
    if (typeof comp.comp !== "string") {
      console.error("Comp was not a string!");
      return;
    }

    if (comp.comp === 'Gallery') {
      return <Gallery/>
    } else if (comp.comp === 'Info') {
      return <Info/>
    } else if (comp.comp === 'Other') {
      return <Other/>
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
