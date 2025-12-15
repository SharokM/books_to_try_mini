import React, { useState } from 'react'
import './App.css'
import NewBookInput from './NewBookInput.jsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Book List!</h1>
      <NewBookInput />
    </div>
  )
}

export default App
