import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Home/Hero';
import HeroBoxes from '../components/Home/HeroBoxes';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HeroBoxes />
      <Footer />
    </>
  )
}

export default Home