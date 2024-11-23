import React from 'react';
import Header from '../components/Header';
import CompCard from '../components/CompCard';
import OCC from '../assets/Occ.png';
import CC from '../assets/CC.png'
import IC from '../assets/IC.png'

const Comp = () => {
  const aboutText = `
    Carbon removal is far from where it needs to be in the near future to avert 
    the worst effects of climate change. The OpenAir Carbon Removal Challenge 
    provides students from colleges and universities around the world an 
    opportunity to work towards safeguarding their future. They will not only 
    design and build solutions that remove excess carbon from the environment, 
    which will help accelerate carbon tech innovation, but also build connections 
    that will bring the next generation of talented engineers, thinkers, and 
    designers into this important sector. The very best approaches will be selected 
    as finalists for an in-person showcase in New York City in May 2025.
  `;
  const aboutText2=
  `
    Launched in 2020 by the RAPID Manufacturing Institute®, ChemE Cube is an annual student competition
     where undergraduate university teams design, build, and demonstrate a 1 cubic foot plant to produce a
    chemistry defined in the annual 
     problem statement.
    Teams compete on cube performance via a head-to-head duel and promote their technology through a 1-minute ad,
    poster, and 20-minute 'shark tank' style pitch to a panel of mock investors.

`;
const aboutText3=`
Recognising new and emerging talent is hugely important. The IChemE Young
 Engineers Awards for Innovation and Sustainability (YEAIS) celebrates the ideas 
 and innovation emerging in the chemical engineering profession, as well as those 
 innovative ideas being shared by young people who could become our future chemical 
 engineers, supporting IChemE’s vision of engineering a more sustainable world.

`;
  return (
    <div>
      <Header />
      <div className='mt-28 p-5 flex gap-6 flex-col'>
        <CompCard
          title="Open-air carbon removal challenge"
          about={aboutText}
          image={OCC}
        />
        <CompCard 
          title="ChemEcube"
          about={aboutText2}
          image={CC}

        />
        <CompCard 
          title="IChemE Young Engineers Awards for Innovation and Sustainability "
          about={aboutText3}
          image={IC}
        />
        
      </div>
    </div>
  );
};

export default Comp;
