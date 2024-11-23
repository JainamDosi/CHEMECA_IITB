import React from 'react';
import './HoverCard.css'; // Make sure to update the CSS file
import { Link, useLocation } from 'react-router-dom';
const HoverCard = ({ imageSrc, overlayText ,overlayText2}) => {
  return (
    <div className='ml-6 mt-12 w-56 h-96 relative'>
      <div className='IM w-full h-full'>
        <img
          src={imageSrc}
          alt=""
          className='rounded-md w-full h-full object-cover hover-zoom'
        />
        <div className='up font-semibold text-xl'>
           <Link to={`/${overlayText}`}>{overlayText}</Link> 
        </div>
        <div className='overlay'>
          <p className='overlay-text uppercase font-medium'>{overlayText2}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
