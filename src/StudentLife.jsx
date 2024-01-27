// StudentLife.jsx
import React, { useState } from 'react';
import './StudentLife.css';

const StudentLife = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionData = [
    {
      id: 'clubs',
      title: 'Clubs',
      content: '(Now Hiring Students for!!! - Data Clubs, Software Clubs, Arts Clubs, Computer Clubs, Sports Clubs, Books Clubs, Origamy Clubs)',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZSUyMGNsdWJzfGVufDB8fDB8fHww', // Replace with the actual image URL
    },
    {
      id: 'events',
      title: 'Events',
      content: 'Details about upcoming events and activities for students:  1- Taylor Swift Concert Upcoming in Boston, 2- James Anderson Magic Show in Campus, 3- Aditya G Software Show on 16 Jan 2023',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXZlbnRzfGVufDB8fDB8fHww', // Replace with the actual image URL
    },
    {
      id: 'sports',
      title: 'Sports',
      content: 'Updates on sports teams and athletic events: 1- NEU vs BU on 16 Jan, 2- NEU vs BC on 20 Jan,  3- NEU vs BCU on 20 Jan, 4- NEU vs HARVARD on 22 Jan',
      image: 'https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzfGVufDB8fDB8fHww', // Replace with the actual image URL
    },
    {
      id: 'field',
      title: 'FieldTrips',
      content: 'Updates on Trips and events: 1- New York on 16 Jan, 2- New Jersey on 20 Jan,  3- New Hamshire on 20 Jan, 4- California on 22 Jan',
      image: 'https://plus.unsplash.com/premium_photo-1683841528606-c51a3d7002ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmllbGQlMjB0cmlwfGVufDB8fDB8fHww', // Replace with the actual image URL
    },
  ];

  const handleAccordionClick = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  return (
    <div className="student-life">
      <h2>Explore Our Student Life !!!</h2>

      <div className="accordion-container">
        {accordionData.map((item) => (
          <div
            key={item.id}
            className={`accordion-item ${activeAccordion === item.id ? 'active' : ''}`}
            onClick={() => handleAccordionClick(item.id)}
          >
            <div className="accordion-title">{item.title}</div>
            <div className={`accordion-content ${activeAccordion === item.id ? 'visible' : ''}`}>
              <img src={item.image} alt={`${item.title} Image`} className="accordion-image" />
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentLife;
