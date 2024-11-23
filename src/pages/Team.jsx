import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import bgrn from '../assets/bgrnd.jpg';
import img1 from '../assets/profiles/img1.jpg'
const Team = () => {
  const teamMembers = [
    // Faculty Advisor
  
    { "name": "Prof. Bharat Kumar Suthar", "email": "bharat.k.suthar@iitb.ac.in", "position": "Faculty Advisor", "division": "Faculty Advisor", "image": img1 },
    // Faculty Mentor
    { "name": "Prof. Sanjay Mahajani", "email": "sanjaym@che.iitb.ac.in", "position": "Faculty Mentor", "division": "Faculty Mentor" },
    { "name": "Prof. Arnab Dutta", "email": "arnab.dutta@iitb.ac.in", "position": "Faculty Mentor", "division": "Faculty Mentor" },
    { "name": "Prof. Yogendra Shastri", "email": "yshastri@iitb.ac.in", "position": "Faculty Mentor", "division": "Faculty Mentor" },
    { "name": "Prof. Mahesh", "email": "mahesh@che.iitb.ac.in", "position": "Faculty Mentor", "division": "Faculty Mentor" },
    { "name": "Prof. Sonali", "email": "sonali.das@iitb.ac.in", "position": "Faculty Mentor", "division": "Faculty Mentor" },
  
    // PhD Advisor
    { "name": "Vipul Amrutkar", "email": "23d0139@iitb.ac.in", "position": "PhD Advisor", "division": "PhD Advisor" },
  
    // Team Lead
    { "name": "Bhavana", "email": "210020078@iitb.ac.in", "position": "Team Lead", "division": "Team Lead" },
    { "name": "Yogesh Dangi", "email": "yogesh.dangi@iitb.ac.in", "position": "Team Lead", "division": "Team Lead" },
  
    // Research Subsystem
    { "name": "Saransh Vottery", "email": "22B0348@iitb.ac.in", "position": "Research Lead", "division": "Research Subsystem" },
    { "name": "Arush Gaur", "email": "210020022@iitb.ac.in", "position": "Senior Advisor", "division": "Research Subsystem" },
    { "name": "Pranav P. Kawade", "email": "23B0372@iitb.ac.in", "position": "Research Associate", "division": "Research Subsystem" },
    { "name": "Sai Tambaku", "email": "23B0351@iitb.ac.in", "position": "Research Associate", "division": "Research Subsystem" },
    { "name": "Shivam Gupta", "email": "23b0309@iitb.ac.in", "position": "Research Associate", "division": "Research Subsystem" },
    { "name": "Darppan MV", "email": "22b0436@iitb.ac.in", "position": "Research Associate", "division": "Research Subsystem" },
    { "name": "Eshika Mishra", "email": "23B0371@iitb.ac.in", "position": "Research Associate", "division": "Research Subsystem" },
    
    // Process and Manufacturing Subsystem
    { "name": "Gayatri Moghe", "email": "22b2451@iitb.ac.in", "position": "Process and Manufacturing Lead", "division": "Process and Manufacturing Subsystem" },
    { "name": "Shruti", "email": "210020132@iitb.ac.in", "position": "Senior Advisor", "division": "Process and Manufacturing Subsystem" },
    { "name": "Manas Agarwal", "email": "210020074@iitb.ac.in", "position": "Senior Advisor", "division": "Process and Manufacturing Subsystem" },
    { "name": "Mahesh Naik", "email": "23b0350@iitb.ac.in", "position": "Process and Manufacturing Engineer", "division": "Process and Manufacturing Subsystem" },
    { "name": "OJAS PATHAK", "email": "23b0428@iitb.ac.in", "position": "Process and Manufacturing Engineer", "division": "Process and Manufacturing Subsystem" },
    { "name": "A Naveen", "email": "naveeen1125@gmail.com", "position": "Process and Manufacturing Engineer", "division": "Process and Manufacturing Subsystem" },
    { "name": "Sivakrishna Sasi", "email": "23B2237@iitb.ac.in", "position": "Process and Manufacturing Engineer", "division": "Process and Manufacturing Subsystem" },
    { "name": "Arth Trivedy", "email": "23b0380@iitb.ac.in", "position": "Process and Manufacturing Engineer", "division": "Process and Manufacturing Subsystem" },
    
    // Control and Automation Subsystem
    { "name": "Shivani", "email": "22b0349@iitb.ac.in", "position": "Control and Automation Lead", "division": "Control and Automation Subsystem" },
    { "name": "Maithri Suresh", "email": "210020072@iitb.ac.in", "position": "Senior Advisor", "division": "Control and Automation Subsystem" },
    { "name": "Mridul Choudhary", "email": "23b3933@iitb.ac.in", "position": "Control and Automation Engineer", "division": "Control and Automation Subsystem" },
    { "name": "Renudhruva S", "email": "renudhruvas@gmail.com", "position": "Control and Automation Engineer", "division": "Control and Automation Subsystem" },
    { "name": "Mohith H", "email": "iammohith2004@gmail.com", "position": "Control and Automation Engineer", "division": "Control and Automation Subsystem" },
    { "name": "Mohammad Hasaan Naurez", "email": "hasaannaurez777@gmail.com", "position": "Control and Automation Engineer", "division": "Control and Automation Subsystem" },
    { "name": "Param Aghera", "email": "23b0447@iitb.ac.in", "position": "Control and Automation Engineer", "division": "Control and Automation Subsystem" },
    
    // Business Subsystem
    { "name": "Yogesh Dangi", "email": "yogesh.dangi@iitb.ac.in", "position": "Business Lead", "division": "Business Subsystem" },
    { "name": "Riddhi Agarwal", "email": "riddhi2009@live.com", "position": "Senior Advisor", "division": "Business Subsystem" },
    { "name": "Vassu Sharma", "email": "23b0409@iitb.ac.in", "position": "Business Associate", "division": "Business Subsystem" },
    { "name": "Paresh Kumar Sabar", "email": "23b0328@iitb.ac.in", "position": "Business Associate", "division": "Business Subsystem" },
    { "name": "Ishaan Srivastava", "email": "ishaan0719@gmail.com", "position": "Business Associate", "division": "Business Subsystem" }
  ];
  
  
  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.division]) {
      acc[member.division] = [];
    }
    acc[member.division].push(member);
    return acc;
  }, {});

  return (
    <div>
      <Header />
      <div className="p-6 mt-32">
        {Object.keys(groupedMembers).map((division) => (
          <div key={division} className="mb-12">
            <h1 className="text-2xl font-bold text-center text-white">{division}</h1>
            <div className="flex flex-wrap gap-6 justify-center mt-6">
              {groupedMembers[division].map((member, index) => (
                <Card
                  key={index}
                  name={member.name}
                  image={member.image}  // Ensure you have an image or use a placeholder
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