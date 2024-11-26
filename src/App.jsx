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
import Process from './pages/Process';
import Research from './pages/Research';
import Business from './pages/Business'
import Controls from './pages/Controls';

//  CHEMECA 

const App = () => {
  
  return (
    <>
    
    
    {/* <CustomCursor/> */}
    
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Comp' element={<Comp />} />
        <Route path='/Team' element={<Team />} />
        {/* <Route path='/Sub' element={<Sub />} /> */}
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Process' element={<Process />} />
        <Route path='/Research' element={<Research />} />
        <Route path='/Business' element={<Business/>} />
        <Route path='/Controls' element={<Controls />} />
        
        
        
        
      </Routes>
      
    
    </ >
  )
}

export default App