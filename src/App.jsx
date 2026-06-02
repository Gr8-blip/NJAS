import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Editorial_Board from './Pages/Editorial_Board'
import Article from './Pages/Article'
import Issues from './Pages/Issues'
import './App.css'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/editorial" element={<Editorial_Board />} />
        <Route path="/article" element={<Article />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

    </>
  )
}

export default App

