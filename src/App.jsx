import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'
import Generations from './components/Generations'
import GenSatu from './components/Generations/Gen1'
import GenDua from './components/Generations/Gen2'
import GenTiga from './components/Generations/Gen3'
import GenEmpat from './components/Generations/Gen4'
import Home from './components/Home'
import Search from './components/Home/Search'
import CardInfo from './components/Home/Card-info'


const App = () => {
  return (
    <>

    <Header/>
    <Logo/>
    <Generations/>
    <GenSatu/>
    <GenDua/>
    <GenTiga/>
    <GenEmpat/>
    <Home/>
    <Search/>
    <CardInfo/>
    
    
    </>
  )
}

export default App