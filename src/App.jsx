import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Login from './pages/Login'
import NewChamp from './pages/NewChamp'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/home' element={<Home />} />
        <Route path='/novo' element={<NewChamp />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
