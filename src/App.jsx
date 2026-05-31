import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Header from './Components/Header'
import Home from './Pages/Home'
import Article from './Pages/Article'
import About from './Pages/About'
import Issues from './Pages/Issues'
import './App.css'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

    </>
  )
}

export default App

