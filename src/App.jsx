import React from 'react'
import  './App.css'
import Header from './components/Header'
import CustomCursor from './components/CustomCursor'
import { Route, Routes } from 'react-router-dom';
import Team  from './pages/Team'
import Comp from './pages/Comp'
import Sub from './pages/Sub'
import Contact from './pages/Contact'
import Home from './pages/Home'




const App = () => {
  
  return (
    <div >
    <Header/>
    <CustomCursor/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Comp' element={<Comp/>} /> 
        <Route path='/Team' element={<Team/>}/>
        <Route path='/Sub' element={<Sub/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        
    </Routes>
    </ div>
  )
}

export default App