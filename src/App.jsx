import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Logo from './components/Logo'




const App = () => {
  return (
    <>

    <Header 
    title="Header"/>
    <Home />
    <Footer />
    
    
    </>
  )
}

export default App