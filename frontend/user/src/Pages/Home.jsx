import React from 'react'
import Article from '../Components/Article'
import Search from '../Components/Search'
import Latest_Article from '../Components/Latest_Article'
import Metrics from '../Components/Metrics'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <>
      <Article />
      <Search />
      <Latest_Article />
      <Metrics />
      <Footer />
    </>
  )
}

export default Home
