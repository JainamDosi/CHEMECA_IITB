import React, { useEffect } from 'react';
import Header from '../components/Header'
import Cont from '../assets/Control.jpg'
import './Controls.css'
import co2 from '../assets/co2.png'
import loop from '../assets/loop.png'
import iot from '../assets/iot.png'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import Footer from '../components/Footer';
const Controls = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useGSAP(() => {
    const tl2 = gsap.timeline(); // Create a timeline for syncing animations

    // Animate the text elements
    tl2.from(".headings", {
      y:50,// Move to normal position from off-screen below
      duration: 1,
      ease: 'power2.out',
      opacity: 0
    },);

  });
  return (
    <>
    <Header/>
    <div className='main5'>
        <h1 className='headings text-6xl font-medium uppercase'>Controls and Automation Subsystem</h1>
    </div>
    <div className='mt-12 flex flex-row p-5'>
      <div className='w-2/3 mt-14'>      
      <h1 className='text-4xl font-medium text-cyan-500'>Continuous CO₂ Monitoring Device</h1>
      <p className='mt-9 text-justify'>
      This involves the design and integration of 
      a real-time CO₂ monitoring system to track the 
      concentration of CO₂ throughout the process. 
      The monitoring device uses sensors to measure CO₂ levels and provides instant feedback to ensure the process operates within desired parameters. The data collected is used to evaluate system efficiency and detect anomalies, enabling quick corrective actions to 
      maintain optimal performance.
      </p>
      </div>
      <div className='w-1/3 flex align-middle justify-center self-center'>
      <img src={co2} alt="" className='images rounded-md'/>
      </div>
    </div>

    <div className='mt-12 flex flex-row p-5'>
      <div className='w-2/3 mt-6'>      
      <h1 className='text-4xl font-medium text-cyan-500'>Control Loops in the System</h1>
      <p className='mt-9 text-justify'>
      Control loops are implemented 
      to automate key process operations
       and maintain stability. These loops
        use sensors, controllers, and actuators 
        to regulate critical parameters such as
         pressure, temperature, and flow rates.
          By employing Proportional-Integral-Derivative (PID)
           controllers, the system ensures precise adjustments and prevents deviations that could affect performance or safety. These automated loops enhance reliability and reduce the need for manual intervention.

      </p>
      </div>
      <div className='w-1/3 flex align-middle justify-center self-center'>
      <img src={loop} alt="" className='images rounded-md'/>
      </div>
    </div>

    <div className='mt-12 flex flex-row p-5'>
      <div className='w-2/3 mt-6'>      
      <h1 className='text-4xl font-medium text-cyan-500'>Internet of Things (IoT)</h1>
      <p className='mt-9 text-justify'>
      IoT technology is integrated to enable
       remote monitoring and control of the system. 
       Sensors and devices are connected to a central 
       cloud-based platform that collects, processes,
        and visualizes data in real time. This allows 
        for predictive maintenance, process
         optimization, and remote diagnostics. 
         IoT integration also facilitates seamless
          communication between different subsystems, ensuring a
       coordinated and efficient operation.
      </p>
      </div>
      <div className='w-1/3 flex align-middle justify-center self-center'>
      <img src={iot} alt="" className='images rounded-md'/>
      </div>
    </div>







    <Footer/>
    </>
  )
}

export default Controls