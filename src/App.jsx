import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DiagonalSplitImages from './components/DiagonalSplitImages'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import './App.css'
import TiltCard from './components/TiltCard.jsx'
import Projects from './components/Projects.jsx'

function App() {

  return (
    <>
    <div className='bg-[#f8f9fa] '>
      <Navbar/>
      <DiagonalSplitImages />
      <Intro />
      <Projects/>
      {/* <TiltCard/> */}
    </div>
    </>
  )
}

export default App
