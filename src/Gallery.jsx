// Gallery.jsx
import React, { useState } from 'react';
import './Gallery.css';

const images = [
  { id: 1, category: 'students', src: 'https://media.istockphoto.com/id/1475870499/photo/education-high-five-and-teacher-with-children-in-classroom-for-learning-support-and.webp?b=1&s=170667a&w=0&k=20&c=ErjYjp9udLN6zL08LarwYPiOfjRHRO1cevcoqIAp9KA=' },
  { id: 2, category: 'students', src: 'https://images.unsplash.com/photo-1521312639858-5b042542f2a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D' },
  { id: 3, category: 'students', src: 'https://media.istockphoto.com/id/1487907648/photo/multiracial-group-of-businesspeople-attending-a-conference-event.webp?b=1&s=170667a&w=0&k=20&c=DvCrmwf8Of5nwb3xR5spf5Iqtj1QZpgIWqKXE8qHspc=' },
  { id: 4, category: 'students', src: 'https://plus.unsplash.com/premium_photo-1661495812242-544e7ff2ded8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D' },
  { id: 5, category: 'facilities', src: 'https://media.istockphoto.com/id/1483272796/photo/seminar-coding-talking.webp?b=1&s=170667a&w=0&k=20&c=q9iyF7cWEfJZlCQdzlbszhchyVnpkhi8t_hy65wAPPg=' },
  { id: 6, category: 'facilities', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D' },
  { id: 7, category: 'facilities', src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D' },
  {id: 8, category: 'facilities', src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D' },
  {id: 9, category: 'all', src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D' },
  {id: 10, category: 'all', src: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D' },
  {id: 11, category: 'all', src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D' },
  {id: 12, category: 'all', src: 'https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D' },
  {id: 13, category: 'all', src: 'https://plus.unsplash.com/premium_photo-1663099878335-1de0c343f3e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D' },
  {id: 14, category: 'all', src: 'https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D' },
  {id: 15, category: 'all', src: 'https://images.unsplash.com/photo-1478104718532-efe04cc3ff7f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D' },
  {id: 16, category: 'all', src: 'https://images.unsplash.com/photo-1555725305-e823b44548de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D'}

];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterImages = (category) => {
    if (category === 'all') {
      return images;
    } else {
      return images.filter((image) => image.category === category);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="gallery">
      <div className="filter-options">
        <button onClick={() => handleCategoryChange('all')} className={selectedCategory === 'all' ? 'active' : ''}>
          Experential Learning Environment
        </button>
        <button onClick={() => handleCategoryChange('students')} className={selectedCategory === 'students' ? 'active' : ''}>
          Students
        </button>
        <button onClick={() => handleCategoryChange('facilities')} className={selectedCategory === 'facilities' ? 'active' : ''}>
          Facilites
        </button>
        
      </div>

      <div className="image-grid">
        {filterImages(selectedCategory).map((image) => (
          <img key={image.id} src={image.src} alt={`Category of images according to: ${image.category}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
