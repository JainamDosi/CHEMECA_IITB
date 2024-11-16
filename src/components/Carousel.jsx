import React from 'react';
import './Carousel.css'; // Assuming the CSS is saved in Carousel.css

const Carousel = ({ images, reverse = false, width = 500, height =200, quantity = 10,className='' }) => {
  return (
    <div
    className={`slider ${className}`}
      style={{
        '--width': `${width}px`,
        '--height': `${height}px`,
        '--quantity': quantity,
      }}
      reverse={reverse ? 'true' : undefined}
    >
      <div className="list">
        {images.map((image, index) => (
          <div
            className="item"
            key={index}
            style={{
              '--position': index + 1,
            }}
          >
            <img src={image} alt={`slider-item-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
