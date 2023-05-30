import { useState } from 'react'
import Gallery from './components/Gallery'
import Sidebar from './components/Sidebar'
import SidebarClosed from './components/SidebarClosed'
import Container from './components/Container'
import { motion } from "framer-motion"
import "./index.css"

function App() {

  const [open, setOpen] = useState(false)

  const [comp, setComp] = useState("Gallery")



  return (
    <div className='flex w-screen h-screen'>
      {
        open
        ? <Sidebar 
        props={setOpen} 
        setState={setComp}
        />
        : <SidebarClosed 
        state={setOpen} 
        />
      }
      <Container comp={comp}/>
    </div>
  )
}

export default App
