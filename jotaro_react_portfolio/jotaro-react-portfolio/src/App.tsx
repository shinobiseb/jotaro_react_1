import { useState } from 'react'
import Gallery from './components/Gallery'
import Sidebar from './components/Sidebar'
import SidebarClosed from './components/SidebarClosed'
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
    </div>
  )
}

export default App
