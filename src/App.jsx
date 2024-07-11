import { useState } from 'react'
import './App.css'
import Home from './Components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="border-container">
      <div className="main-container">
        <Home/>
      </div>
      </div>
      
    </>
  )
}

export default App
