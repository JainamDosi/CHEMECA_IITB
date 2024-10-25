import React from 'react';
import ime from '../assets/profiles/dangi.jpg';
import { FiMail } from "react-icons/fi";
import logo from '../assets/logo.png'

function Card() {
  return (
    <div className='ml-72 mt-5 w-56 h-72 rounded-xl backdrop-blur-3xl bg-green-50 bg-opacity-10 flex flex-col items-center shadow-xl relative group'>
      <img src={ime} alt="" className='rounded-full w-40 h-40 mt-6' />
      <h1 className='text-2xl mt-5 font-medium text-white'>Yogesh Dangi</h1>
      <h2 className='text-xl font-normal text-white'>Team Lead</h2>
      
      {/* Overlay div */}
      <div className='overlay absolute inset-0 bg-black bg-opacity-80 flex  flex-col items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <img src={logo} alt="" className='w-1/2' />
        {/* Mail icon as a link */}
        <a href="mailto:yogesh.dangi@iitb.ac.in" aria-label="EmailYogesh Dangi">
          <FiMail className='w-8 h-8 text-white' />
        </a>

      </div>

    </div>
  );
}

export default Card;
