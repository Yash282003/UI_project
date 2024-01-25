import React from 'react'
import NavbarBootStrap from './components/Navbar'
import HeroSection from './components/HeroSection'
import HobbyCard from './components/HobbyCard'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {
  return (
    <>
     <NavbarBootStrap/> 
     <HeroSection/>
     <HobbyCard/>
     <Testimonials/>
     <Banner/>

     <Footer/>
    </>
  )
}

export default App
