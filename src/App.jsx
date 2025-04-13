import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Home from './components/Home'
import Background from './components/Background'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen  text-white overflow-x-hidden overflow-y-auto">
      <Background />

      <Home />
    </div>
  )
}

export default App
