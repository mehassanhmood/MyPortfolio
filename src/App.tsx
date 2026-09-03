// @ts-nocheck
import { useState } from 'react'
import Hero from './components/Hero'
import StarsCanvas from './components/StarBackground'

import './App.css'

import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Experience from './components/Experience'


function App() {


  return (
    <div className='flex flex-col gap-20 h-full w-full'>
        <StarsCanvas />
        <Navbar/>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
     </div>
  )
}

export default App

