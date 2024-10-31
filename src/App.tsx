// @ts-ignore
import { useState } from 'react'
import Hero from './components/Hero'
import StarsCanvas from './components/StarBackground'
import './App.css'

function App() {


  return (
    <div className='h-full w-full'>
      <div className='flex flex-col gap-20 h-[850px]'>
        <StarsCanvas />
        <Hero />
      </div>
    </div>
  )
}

export default App
