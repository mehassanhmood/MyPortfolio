// @ts-ignore
import { useState } from 'react'
import Hero from './components/Hero'
import StarsCanvas from './components/StarBackground'
import './App.css'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Encryption from './components/Encryption'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {


  return (
    <div className='h-full w-full'>
      <div className='flex flex-col gap-20 '>
        <StarsCanvas />
        <Navbar/>
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
