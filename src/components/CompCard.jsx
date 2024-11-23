import React from 'react';
import './CompCard.css';

const CompCard = ({ title, about, image, customClass }) => {
  return (
    <div className={`p-7 flex bg-gray-700 mt-4 rounded-xl w-fit`}>
      <div className='w-2/3'>
        <h1 className='font-medium text-2xl uppercase'>{title}</h1>
        <p className='mt-6 '>{about}</p>
      </div>
      <div className='w-1/3 flex align-middle justify-center self-center'>
        <img src={image} alt={title} className='imgs' />
      </div>
    </div>
  );
};

export default CompCard;
