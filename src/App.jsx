import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import HeroSection from './components/HeroSection.jsx'
import ProfileProjectsSection from './components/ProfileProjectsSection.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
    
      <Navbar/>

      <HeroSection/>
      
      <ProfileProjectsSection/>

      <Skills/>

      <Contact/>

      <Footer/>
    </>
  )
}

export default App
