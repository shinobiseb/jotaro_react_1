import { useState } from 'react'
import Gallery from './components/Gallery'
import Sidebar from './components/Sidebar'
import "./index.css"

function App() {
  const [state, setState] = useState(false)

  function changeState() {
    setState((e) => !e)
    console.log(`State changed to ${state}`)
  }

  return (
    <div className='flex w-screen h-screen'>
      <Sidebar setState={setState}/>
    </div>
  )
}

export default App
