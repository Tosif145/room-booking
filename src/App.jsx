import { useState } from 'react'
import './App.css'
import Home from './Components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-container">
        <Home/>
      </div>
    </>
  )
}

export default App
