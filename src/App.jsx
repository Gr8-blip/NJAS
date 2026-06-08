import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Editorial_Board from './Pages/Editorial_Board'
import Article from './Pages/Article'
import Issues from './Pages/Issues'
import Contact_Us from './Pages/Contact_Us'
import Author_Guidelines from './Pages/Author_Guidelines'
import Editorial_Policies from './Pages/Editorial_Policies'
import Copyright from './Pages/Copyright'
import Open_Access_Policy from './Pages/Open_Access_Policy'

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
        <Route path="/contact-us" element={<Contact_Us />} />
        <Route path="/author-guidelines" element={<Author_Guidelines />} />
        <Route path="/editorial-policies" element={<Editorial_Policies />} />
        <Route path="/copyright" element={<Copyright /> } />
        <Route path="/open-access-policy" element={<Open_Access_Policy />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>

    </>
  )
}

export default App

