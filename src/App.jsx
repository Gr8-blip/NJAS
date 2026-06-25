import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Editorial_Board from './Pages/Editorial_Board'
import ArticlePage from './Pages/ArticlePage'
import Volume from './Pages/Volume'
import Single_Issues from './Pages/Single_Issues'
import Contact_Us from './Pages/Contact_Us'
import Single_Article from './Pages/Single_Article'
import Author_Guidelines from './Pages/Author_Guidelines'
import Editorial_Policies from './Pages/Editorial_Policies'
import Copyright from './Pages/Copyright'
import Open_Access_Policy from './Pages/Open_Access_Policy'
import Reviewer_Form from './Pages/Reviewer_Form'
import Publication_Ethics from './Pages/Publication_Ethics'
import Terms from './Pages/Terms'
import Privacy_Policy from './Pages/Privacy_Policy'
import Products_Payment from './Pages/Products_Payment'
import Advertising from './Pages/Advertising'
import Page_404 from './Pages/Page_404'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/editorial" element={<Editorial_Board />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/volume" element={<Volume />} />
        <Route path="/contact" element={<Contact_Us />} />
        <Route path="/volumes/:id" element={<Single_Issues />} />
        <Route path="/articles/:id" element={<Single_Article />} />
        <Route path="/author-guidelines" element={<Author_Guidelines />} />
        <Route path="/editorial-policies" element={<Editorial_Policies />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/open-access-policy" element={<Open_Access_Policy />} />
        <Route path="/reviewer-form" element={<Reviewer_Form />} />
        <Route path="/publication-ethics" element={<Publication_Ethics />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/products-payment" element={<Products_Payment />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="*" element={<Page_404 />} />
      </Routes>

    </>
  )
}

export default App

