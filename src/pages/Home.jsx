import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import Header from '../components/Header';
import CustomCursor from '../components/CustomCursor';
import vdo from '../assets/tempvdo.mp4';
import './Home.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.to('.MYVDO', {
      width: '95%',
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
    <div className="main ">
      <Header/>
      {/* <CustomCursor /> */}
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <div className="videotag flex justify-center">
        <video autoPlay muted loop src={vdo} className="MYVDO w-3/4 mx-auto rounded-md"></video>
      </div>

      <div >
        <h1 className="ABOUT  ml-8 text-5xl mt-11 font-semibold">ABOUT US</h1>
        <p className="mt-5 ml-8 text-xl mt-8 w-5/6 text-gray-500">
          Team ChemEca is a dynamic, interdisciplinary student team that brings together innovative minds from various fields to tackle complex challenges in chemical
           engineering and beyond. Focused on hands-on projects, cutting-edge research, and industry-relevant
            competitions, ChemEca provides a platform for students to collaborate, learn, and excel in areas 
            ranging from process simulation to sustainable technology development. With a commitment to innovation
             and excellence, the team aims to bridge the gap between academic learning and real-world application,
              preparing its members for leadership roles in the chemical industry and related fields.
        </p>
      </div>
    </div>
  );
};

export default Home;
