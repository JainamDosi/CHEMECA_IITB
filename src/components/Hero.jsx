import { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './Hero.css'


export const Hero = () => {

  
    useGSAP(() => {
        const tl = gsap.timeline(); // Create a timeline for syncing animations
    
        // Animate the text elements
        tl.to(".tobe, .line", {
          y: -15,  // Move to normal position from off-screen below
          duration: 2,
           // Delay between each line
          opacity: 1
        },);
    
        // Animate the loading bar in the same timeline after a small delay
        tl.fromTo(".loading-bar", 
          { width: 0, opacity: 0 },  // Start with zero width and opacity
          { width: '50%', opacity: 1, duration: 2 },1
        );

        tl.from("#SVGRepo_bgCarrier", {
          drawSVG: "100%", // You can also use "100%" or specific ranges like "0% 100%" for more control
          duration: 2,
          delay: 1,
        });
        
      });


  return (
    <>
    <div className='wrap2'>
    <div className='pl-24 w-34 mt-24 text-8xl font-bold tracking-normal leading-normal '
    >
      {/* Outer div with overflow hidden to contain all content */}
      <div className='overflow-hidden '>
        {/* Texts are moved below initially using translate-y */}
        <div className='tobe transform translate-y-32 opacity-0'>Catalysing</div>
      </div>
      <div className='overflow-hidden'>
        <h1 className='line transform translate-y-32 opacity-0'> Reactions into </h1>    
      </div>
      <div className='overflow-hidden'>
        <h1 className='line transform translate-y-32 opacity-0'>Reality</h1>
      </div>
      <div className='overflow-hidden'>
        <div className='loading-bar bg-amber-500 h-1 rounded-md'></div>
      </div>
      
    </div>
    <svg fill="none" height="360px" width="360px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve" stroke="#ffffff" className='mt-7' stroke-width="5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="5.12"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M352.213,170.188V39.385h15.369c10.875,0,19.692-8.817,19.692-19.692C387.274,8.817,378.457,0,367.582,0 c-5.156,0-208.595,0-223.043,0c-10.875,0-19.692,8.817-19.692,19.692c0,10.875,8.817,19.692,19.692,19.692h15.369 c0,13.039,0,116.914,0,130.804C3.377,266.065,69.779,512,256.06,512C440.663,512,509.517,266.538,352.213,170.188z M208.937,394.321c-9.426,0-17.068-7.642-17.068-17.068c0-9.427,7.642-17.068,17.068-17.068s17.068,7.642,17.068,17.068 S218.363,394.321,208.937,394.321z M287.13,410.374c-18.293,0-33.123-14.83-33.123-33.123s14.83-33.123,33.123-33.123 c18.293,0,33.123,14.83,33.123,33.123C320.253,395.546,305.425,410.374,287.13,410.374z M126.658,262.038 c13.56-26.66,35.277-48.894,62.091-62.959c6.483-3.4,10.545-10.118,10.545-17.438v-24.956h26.134 c10.875,0,19.692-8.817,19.692-19.692c0-10.875-8.817-19.692-19.692-19.692h-26.134V98.035h26.134 c10.875,0,19.692-8.817,19.692-19.692c0-10.875-8.817-19.692-19.692-19.692h-26.134V39.385h113.533V181.64 c0,7.322,4.062,14.038,10.545,17.438c26.815,14.066,48.531,36.3,62.091,62.959H126.658z"></path> </g> </g> </g></svg>
    </div> 
    </>
  )
}
