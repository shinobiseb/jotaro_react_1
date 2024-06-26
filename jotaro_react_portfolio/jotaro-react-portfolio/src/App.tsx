import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import SidebarClosed from './components/Sidebar/SidebarClosed'
import { Route, Routes } from 'react-router-dom'

import "./index.css"
import About from './components/About'
import Contact from './components/Contact'
import Animations from './components/Animations'
import SeniorThesis from './components/SeniorThesis'
import Storyboards from './components/Storyboards'
import Conceptart from './components/Conceptart'
import Modeling from './components/Modeling'
import Commission from './components/Commission'

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className='flex w-screen h-screen flex-col sm:flex-row'>
      {
        open
        ? <Sidebar 
        props={setOpen}
        />
        : <SidebarClosed 
        state={setOpen} 
        />
      }

      <Routes>
      <Route path="/" element={<Modeling/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/modeling" element={<Modeling/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/seniorthesis" element={<SeniorThesis/>}/>
        <Route path="/animations" element={<Animations/>}/>
        <Route path="/storyboards" element={<Storyboards/>}/>
        <Route path="/conceptart" element={<Conceptart/>}/>
        {/* <Route path="/commission" element={<Commission/>}/> */}
      </Routes>

      
    </div>
  )
}

export default App
