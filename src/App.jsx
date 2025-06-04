import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DiagonalSplitImages from './components/DiagonalSplitImages'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import ProjectCard from './components/ProjectCard'
import SlideInAction from './components/SlideInAction'
import './App.css'
import AnimatedCard from './components/AnimatedCard.jsx'

function App() {

  return (
    <>
    <div className='bg-[rgb(240,240,242)]'>
      <Navbar/>
      <DiagonalSplitImages />
      <Intro />
      <ProjectCard />
      {/* <SlideInAction /> */}
      <AnimatedCard/>
    </div>
    </>
  )
}

export default App
