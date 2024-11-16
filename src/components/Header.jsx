import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';
import './Header.css'

const Header = () => {
  return (
    <div className='warp  h-28'>
      <div className='wrapper flex items-center justify-between mt-0 w-full'>
        <nav className='flex items-center ml-10'>
          <img src={icon} alt="icon" className='w-24 h-24 mr-5' />
          <Link to='/'><div className='text-4xl tracking-wide text-slate-100'>ChemEca</div></Link>
        </nav>
        <nav className='flex space-x-8 mr-14'>
          <Link to="/Home" className='MY text-gray-500 text-xl'>Home</Link>
          <Link to="/Sub" className='MY text-gray-500 text-xl'>Subdivision</Link>
          <Link to="/Team" className='MY text-gray-500 text-xl'>Team</Link>
          <Link to="/Comp" className='MY text-gray-500 text-xl'>Competitions</Link>
          <Link to="/Contact" className='MY text-gray-500 text-xl'>Contact Us</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
