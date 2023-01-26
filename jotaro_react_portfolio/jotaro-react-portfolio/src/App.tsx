import { useState } from 'react'
import Gallery from './components/Gallery'
import Sidebar from './components/Sidebar'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex-row w-full h-full'>
      <Sidebar/>
      <Gallery/>
    </div>
  )
}

export default App
