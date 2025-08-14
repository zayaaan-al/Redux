import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Home'
import Add from './assets/components/Add'
import Update from './assets/components/Update'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
