// Reviews.jsx
import React, { useState } from 'react';
import './Reviews.css';
import Panel from './Panels';
import ModalForm from './ModalForm';

const panelsData = [
  {
    name: 'Reviews from our Professors',
    description: 'The strength of a Northeastern education is our experiential learning model—it enables you to explore your path, find your passion, and acquire the skills and knowledge that prepare you for a lifetime of success. Experiential education is centered around your success.A world leader in experiential-learning education, Northeastern emphasizes educational programs that link course work with a variety of practical experiences, including global opportunities, service-learning, research and our signature co-op program.',
    imageUrl: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvZmVzc29yfGVufDB8fDB8fHww', // Replace with your image URL
  },
  {
    name: 'Reviews from our Students',
    description: 'A large research university that doesnt feel large due to the co-op cycle. Great for Science/Engineering, Health fields, Business, not necessarily arts and humanities, but they are definitely here. A huge variety of clubs and organizations to join. Boston! The MFA is literally right off campus and its completely free! Also, its a 15 minute walk to the Pru, Newbury Street, and more, and the trains at Ruggles will connect you to the rest of the city.I never feel unsafe here. Even walking to my dorm from the library at 3am, or walking through Ruggles at 2 am.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1683841528606-c51a3d7002ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmllbGQlMjB0cmlwfGVufDB8fDB8fHww', // Replace with your image URL
  },
  {
    name: 'Reviews from our Alumni',
    description: 'Powered by our signature co-op program (real world experience, often paid, and deeper than an internship) and fueled by your inclination for exploration-driven excellence, experiential learning at Northeastern gives you an edge that will set you apart. There’s no other university experience quite like it. Our graduates prove day. Whether you’re walking the grassy quad en route to class, traversing unfamiliar roads halfway across the globe, or moments away from a breakthroughit’s your experiences here that give you a leg up.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1663089053386-5f8ffc503ea4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWx1bW5pfGVufDB8fDB8fHww', // Replace with your image URL
  },
];

function Reviews({ enteredName, onFormSubmit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState(null);

  const openModal = (panelName) => {
    setSelectedPanel(panelName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPanel(null);
    setIsModalOpen(false);
  };

  const handleButtonClick = (panelName) => {
    openModal(panelName);
  };

  const handleFormSubmit = (newName) => {
    onFormSubmit(newName);
    alert(`Put you Review For ${selectedPanel}: Your Name - ${newName}`);
    closeModal();
  };

  return (
    <div className="Reviews">
      <h1>Reviews from our Distinguished Members!!!</h1>
      {enteredName && <h3>Hello!!! {enteredName} Thank you for entering for Review </h3>}

      <div className="panels-container">
        {panelsData.map((panel, index) => (
          <Panel
            key={index}
            name={panel.name}
            description={panel.description}
            imageUrl={panel.imageUrl}
            alt={`Image for ${panel.name}`}
            onButtonClick={() => handleButtonClick(panel.name)}
          />
        ))}
      </div>

      <ModalForm isOpen={isModalOpen} onClose={closeModal} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default Reviews;
