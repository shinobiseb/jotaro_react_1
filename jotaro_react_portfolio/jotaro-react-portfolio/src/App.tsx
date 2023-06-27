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

function App() {

  const [open, setOpen] = useState(false);

  // const [windowSize, setWindowSize] = useState([
  //   window.innerWidth,
  //   window.innerHeight,
  // ]);

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize([window.innerWidth, window.innerHeight]);
  //   };

  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);

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
      <Route path="/" element={<Animations/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/modeling" element={<Modeling/>}/>
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
