import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Cadastro />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
