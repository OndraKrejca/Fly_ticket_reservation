import React from 'react'
import Home from './pages/home'
import Errorpage from './pages/errorpage'
import Oneticket from './pages/oneticket'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='oneticket/:id' element={<Oneticket />}></Route>
        <Route path='*' element={<Errorpage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
