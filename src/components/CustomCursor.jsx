import React, { useEffect, useState } from 'react';
import 'ldrs/jellyTriangle';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    pointerEvents: 'none', // Make sure the cursor doesn't block interactions
    transform: 'translate(-50%, -50%)', // Center the cursor on the mouse pointer
  };

  return (
    <div style={cursorStyle}>
      <l-jelly-triangle size="20" speed="1.75" color="white"></l-jelly-triangle>
    </div>
  );
};

export default CustomCursor;
