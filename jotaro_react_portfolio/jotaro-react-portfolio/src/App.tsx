import { useState } from 'react'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <h1 className="font-sans text-5xl">Text</h1>
      </div>
    </div>
  )
}

export default App
