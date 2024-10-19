import React from 'react';
import icon from '../assets/icon.png';

const Header = () => {
  return (
    <div className='flex items-center justify-between mt-5 w-full p-4'>
      <div className='flex items-center ml-10'>
        <img src={icon} alt="icon" className='w-24 h-24 mr-5' />
        <div className='text-4xl  tracking-wide text-slate-100'>ChemeCa</div>
      </div>
      <nav className='flex space-x-8 mr-14'>
        <a href="/Sub" className='text-slate-100 text-xl hover:text-slate-300'>Subdivision</a>
        <a href="/Team" className='text-slate-100 text-xl hover:text-slate-300'>Team</a>
        <a href="/Comp" className='text-slate-100 text-xl hover:text-slate-300'>Competitions</a>
        <a href="/Contact" className='text-slate-100 text-xl hover:text-slate-300'>Contact Us</a>
      </nav>
    </div>
  );
}

export default Header;
