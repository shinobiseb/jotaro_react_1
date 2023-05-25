import { useState } from 'react'
import Gallery from './components/Gallery'
import Sidebar from './components/Sidebar'
import SidebarClosed from './components/SidebarClosed'
import Container from './components/Container'
import "./index.css"

function App() {

  const [open, setOpen] = useState(false)

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
      <Container/>
    </div>
  )
}

export default App
