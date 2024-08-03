import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './stylings/App.css'
import Car from './Car'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="name">
        <h1>This is my first text in vite application</h1>
      </div>

      <Car name = 'ford'/>
    </>
  )
}

export default App
