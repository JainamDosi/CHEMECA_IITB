import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor';
import vdo from '../assets/tempvdo.mp4';
import './Home.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Carousel from '../components/Carousel';
import img1 from '../assets/gallery/img1.jpg';  // Correct path to gallery images
import img2 from '../assets/gallery/img2.jpg';
import img3 from '../assets/gallery/img3.jpg';
import img4 from '../assets/gallery/img4.png';
import img5 from '../assets/gallery/img5.jpg';
import img6 from '../assets/gallery/img6.jpg';
import img7 from '../assets/gallery/img7.jpg';
import img8 from '../assets/gallery/img8.jpg';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const images = [img1, img2, img3, img4,img5];

  useEffect(() => {
    gsap.to('.MYVDO', {
      width: '97%',
      scrollTrigger: {
        trigger: '.MYVDO',
        markers: true,
        start: 'top 89%', // Animation starts when .videotag top reaches center of viewport
        end: 'top 50%',
        scrub: 0.2,
      },
    });
  }, []);

  return (
    <div className="main">
      <Header />
      
      {/* Hero component takes full height of the viewport */}
      <Hero  />  {/* Added class for styling the Hero section */}

      {/* <div className="videotag-container mt-5 z-50">  Added container to help position video */}
        {/* <video autoPlay muted loop src={vdo} className="MYVDO w-3/4 mx-auto rounded-md"></video> */}
      {/* </div> */}
      <div className="maintext flex items-center justify-center h-lvh gap-5  flex-col">
           <h1 className='iitb text-4xl tracking-normal font-medium	uppercase	'>
      IIT Bombay’s pioneering student-led team in</h1>
      <h1 className='iitb text-4xl tracking-normal	font-medium uppercase	'>
      sustainable chemical engineering,
            </h1>
      <h1 className='iitb text-4xl tracking-normal	font-medium uppercase	'>aims to tackles challenges from carbon capture to fuel cells
      </h1>
      <h1 className='iitb text-4xl tracking-normal	font-medium uppercase	'>driving innovation for a greener future
      </h1>
      
      </div>
 
      <div className="content-container">  {/* Added content container for text */}
        <h1 className="ABOUT ml-8 text-5xl mt-11 font-semibold">ABOUT US</h1>
        <p className="ml-8 text-xl mt-8 w-5/6 text-gray-500">
          Team ChemEca is a dynamic, interdisciplinary student team that brings together innovative minds from various fields to tackle complex challenges in chemical
           engineering and beyond. Focused on hands-on projects, cutting-edge research, and industry-relevant
            competitions, ChemEca provides a platform for students to collaborate, learn, and excel in areas 
            ranging from process simulation to sustainable technology development. With a commitment to innovation
             and excellence, the team aims to bridge the gap between academic learning and real-world application,
              preparing its members for leadership roles in the chemical industry and related fields.
        </p>
      </div>

      <div className="bg-lime-300 h-1 w-full mt-3 rounded-md"></div>
      
      <div className="carousel-container mt-20">
        <Carousel images={images} width={100} quantity={5} className="mt-5" />
        <Carousel images={images} width={100} quantity={5} reverse className="mt-5" />
      </div>
    </div>
  );
};

export default Home;
