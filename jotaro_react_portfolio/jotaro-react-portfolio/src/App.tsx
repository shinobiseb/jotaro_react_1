import { useState } from 'react'
import Gallery from './components/Gallery'
import Sidebar from './components/Sidebar/Sidebar'
import SidebarClosed from './components/Sidebar/SidebarClosed'
import { motion } from "framer-motion"
import { Route, Routes } from 'react-router-dom'

import "./index.css"
import About from './components/About'
import Contact from './components/Contact'
import Animations from './components/Animations'
import SeniorThesis from './components/SeniorThesis'
import Storyboards from './components/Storyboards'
import Conceptart from './components/Conceptart'

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className='flex w-screen h-screen'>
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
        <Route path="/" element={<Gallery/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/seniorthesis" element={<SeniorThesis/>}/>
        <Route path="/animations" element={<Animations/>}/>
        <Route path="/storyboards" element={<Storyboards/>}/>
        <Route path="/conceptart" element={<Conceptart/>}/>
      </Routes>

      
    </div>
  )
}

export default App
