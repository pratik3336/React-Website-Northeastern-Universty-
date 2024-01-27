import React, { useState } from 'react';
import './mainarea.css';
import Button from './Button'; 

function MainArea() {

  const cards = [
    {
      title: 'Academic Calender',
      content: 'ACADEMIC CALENDAR- Term start and end dates, holidays and breaks, registration deadlines and more',
      imageUrl: 'https://media.istockphoto.com/id/1413483209/photo/calendar-with-marked-date.webp?b=1&s=170667a&w=0&k=20&c=pgDHvdAIs1nr3YCUo5NqKeBizIE7j8DOB5AMgS1Dk3g=',
      alt: 'Image of a Calender'

    },
    {
      title: 'Exhibits and Performances',
      content: 'Join our team of dedicated volunteers who help hundreds of Students each year.EXHIBITS AND PERFORMANCES Arts events such as concerts, plays, readings, exhibits and performances',
      imageUrl: 'https://images.unsplash.com/photo-1558970439-add78fc68990?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3RhZ2VzfGVufDB8fDB8fHww', 
      alt: 'Image of Stage'
    },
    {
      title: 'Varsity',
      content: 'Varsity in University. At many schools, sports are a big deal. Thousands of people flock to college football and basketball games, plus other sports. The members of the starting team are varsity players.',
      imageUrl: 'https://images.unsplash.com/photo-1629238721118-6dce16338843?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmFyc2l0eXxlbnwwfHwwfHx8MA%3D%3D', 
      alt: 'Image of Varsity Sports'
    }

  ];

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleFosterClick = () => {
    setButtonClicked(true); 
    window.location.href = '/'; 
  };

  return (
    <div className="mainarea">
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imageUrl} alt={card.title} className="card-image" />
            {card.title === 'Varsity' ? (
              <>
                <h3>{card.title}</h3>
                <Button type="button" visual="link" onClick={handleFosterClick} disabled={buttonClicked}>
                  {buttonClicked ? "Clicked" : "GO TO HOME TO EXPLORE MORE"}
                </Button>
              </>
            ) : (
              <h3>{card.title}</h3>
            )}
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainArea;
