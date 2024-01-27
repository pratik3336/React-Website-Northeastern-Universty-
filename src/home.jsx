import React from 'react';
import './home.css';

function Introduction() {
  const cards = [
    {
      title: 'Under Graduate Programs',
      content: 'An undergraduate degree is an academic program of study leading to a qualification, such as an associate degree, diploma or bachelor degree. Honours degrees are also considered to be undergraduate degrees.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1663099240679-34b7d3a6fa1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZSUyMHJlZHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Top-Notch Graduate Programs',
      content: 'Graduate education is characterized by in-depth training and specialized instruction. Study and learning are more self-directed at the graduate level than at the undergraduate level.',
      imageUrl: 'https://images.unsplash.com/photo-1519664699825-ddb2c64076bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGxlZ2UlMjByZWR8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Top-Notch Business Programs',
      content: 'Business Studies typically combines elements of accountancy, finance, marketing, organizational studies, human resource management and economics. The range of topics is designed to give the student a general overview of running a business.',
      imageUrl: 'https://media.istockphoto.com/id/1353025886/photo/highschool-students-on-a-break-in-the-hallway.webp?b=1&s=170667a&w=0&k=20&c=CoI87_sqW2m3OMWPt7yVKGVxiSWwqbPNErVckMFJXYs=',
    },
  ];

  return (
    <div className="intro">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.imageUrl} alt={card.title} className="card-image" />
          <h3>{card.title}</h3>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Introduction;
