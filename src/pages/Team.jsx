import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import bgrn from '../assets/bgrnd.jpg';

const Team = () => {
  const teamMembers = [
    { "name": "Mridul Choudhary", "email": "23b3933@iitb.ac.in", "position": "Controls and Automation Engineer" },
    { "name": "Renudhruva S", "email": "renudhruvas@gmail.com", "position": "Controls and Automation Engineer" },
    { "name": "Mohith H", "email": "iammohith2004@gmail.com", "position": "Controls and Automation Engineer" },
    { "name": "Mohammad Hasaan Naurez", "email": "hasaannaurez777@gmail.com", "position": "Controls and Automation Engineer" },
    { "name": "Arush Gaur", "email": "210020022@iitb.ac.in", "position": "Senior Advisor, Research Subsystem" },
    { "name": "Maithri Suresh", "email": "210020072@iitb.ac.in", "position": "Senior Advisor" },
    { "name": "Shruti", "email": "210020132@iitb.ac.in", "position": "Senior Advisor" },
    { "name": "Riddhi Agarwal", "email": "riddhi2009@live.com", "position": "Senior Advisor Business Subsystem" },
    { "name": "Param Aghera", "email": "23b0447@iitb.ac.in", "position": "Automation Engineer" },
    { "name": "Vassu Sharma", "email": "23b0409@iitb.ac.in", "position": "Business Associate" },
    { "name": "Ishaan Srivastava", "email": "ishaan0719@gmail.com", "position": "Business Associate" },
    { "name": "Paresh Kumar Sabar", "email": "23b0328@iitb.ac.in", "position": "Business Associate Member" },
    { "name": "Mahesh Naik", "email": "23b0350@iitb.ac.in", "position": "Process and Manufacturing Engineer" },
    { "name": "A Naveen", "email": "naveeen1125@gmail.com", "position": "Process and Manufacturing Engineer" },
    { "name": "Sivakrishna Sasi", "email": "23B2237@iitb.ac.in", "position": "Process and Manufacturing Engineer" },
    { "name": "Gayatri Moghe", "email": "22b2451@iitb.ac.in", "position": "Process and Manufacturing Lead" },
    { "name": "Saransh Vottery", "email": "22B0348@iitb.ac.in", "position": "Research Lead" },
    { "name": "Bhavana", "email": "210020078@iitb.ac.in", "position": "Team Lead" },
    { "name": "Yogesh Dangi", "email": "yogesh.dangi@iitb.ac.in", "position": "Team Lead" }
  ];

  // Grouping team members by position (designation)
  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.position]) {
      acc[member.position] = [];
    }
    acc[member.position].push(member);
    return acc;
  }, {});

  return (
    <div>
      <Header />
      <div className="p-6">
        {Object.keys(groupedMembers).map((position) => (
          <div key={position} className="mb-12">
            <h1 className="text-2xl font-bold text-center text-white">{position}</h1>
            <div className="flex flex-wrap gap-6 justify-center mt-6">
              {groupedMembers[position].map((member, index) => (
                <Card
                  key={index}
                  name={member.name}
                  image={member.image}  // Make sure to set image for each member or use a placeholder
                  position={member.position}
                  email={member.email}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
