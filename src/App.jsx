import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Comp from './pages/Comp';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Process from './pages/Process';
import Research from './pages/Research';
import Business from './pages/Business';
import Controls from './pages/Controls';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Comp" element={<Comp />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Process" element={<Process />} />
            <Route path="/Research" element={<Research />} />
            <Route path="/Business" element={<Business />} />
            <Route path="/Controls" element={<Controls />} />
        </Routes>
    );
};

export default App;
