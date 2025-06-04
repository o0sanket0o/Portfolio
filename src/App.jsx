import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DiagonalSplitImages from './components/DiagonalSplitImages'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import './App.css'

function App() {

  return (
    <>
    <div className='bg-[rgb(240,240,242)]'>
      <Navbar/>
      <DiagonalSplitImages />
      <Intro />
    </div>
    </>
  )
}

export default App
