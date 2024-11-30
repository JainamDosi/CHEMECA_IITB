import React, { useEffect } from 'react';
import Header from '../components/Header';
import { gsap } from 'gsap';
import './Business.css';
import ttb from '../assets/ttb.png'
import tca from '../assets/tca.png'
import colab from '../assets/colab.png'
import Footer from '../components/Footer';
import { useGSAP } from '@gsap/react';
const Business = () => {
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
      <Header />
      <div className='main3'>
        <h1 className='headings text-8xl font-medium uppercase'>Business Subsystem</h1>
      </div>
      <div className='mt-12 flex flex-row p-5'>
      <div className='w-2/3 mt-6'>      
      <h1 className='text-4xl font-medium text-lime-500'>Tech to Business</h1>
      <p className='mt-9 text-justify'>
      This involves translating technological innovations into 
      viable business solutions. The subsystem identifies potential
       market opportunities for the developed technology and formulates 
       strategies to commercialize it. Key activities include defining the
        value proposition, identifying target customers, and creating business
         models that align with industry needs. By bridging the gap between technology and 
      market requirements, this phase ensures that the developed solutions
       have real-world applications and commercial potential.
      </p>
      </div>
      <div className='w-1/3 flex align-middle justify-center self-center'>
      <img src={ttb} alt="" className='images rounded-md scale-90'/>
      </div>
    </div>


      <div className='mt-12 flex flex-row p-5'>
      <div className='w-2/3 mt-14'>      
      <h1 className='text-4xl font-medium text-lime-500'>Techno-Commercial Analysis</h1>
      <p className='mt-9 text-justify'>
      A comprehensive analysis is conducted to assess
       the economic and technical feasibility of the project.
        This includes evaluating production costs, scalability, 
        market demand, and the return on investment (ROI). Technical 
        performance data is combined with financial metrics to create a 
        
        balanced view of the technology’s commercial prospects. The analysis 
        ensures that the solution is both technically viable and economically
         sustainable, guiding decision-making for further development and market entry.

      </p>
      </div>
      <div className='w-1/3 flex align-middle justify-center self-center'>
      <img src={tca} alt="" className='images rounded-md scale-75'/>
      </div>
    </div>



    <div className='mt-8 flex flex-row p-5'>
      <div className='w-2/3 mt-10'>      
      <h1 className='text-4xl font-medium text-lime-500'>Industrial Collaboration</h1>
      <p className='mt-9 text-justify'>
      This aspect emphasizes establishing partnerships with industrial stakeholders to 
      secure funding and gain mentorship for the project. Collaborations with companies, 
      venture capitalists, and government agencies provide financial support for scaling up
       prototypes, conducting pilot studies, and commercial deployment. Industrial mentorship 
       offers valuable insights into market dynamics, technical challenges, and regulatory requirements, helping refine the technology to align with industry standards. These partnerships also open avenues for joint R&D projects, access to state-of-the-art
       facilities, and co-development opportunities, ensuring both 
       financial sustainability and technological robustness.

      </p>
      </div>
      <div className='w-1/3 flex align-middle justify-center self-center'>
      <img src={colab} alt="" className='images rounded-md scale-75'/>
      </div>
    </div>



    <Footer/>
    </>
  );
};

export default Business;
