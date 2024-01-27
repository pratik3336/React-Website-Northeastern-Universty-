// Panels.jsx
import React from 'react';
import './Panels.css'; 
import Button from './Button';

function Panel({ name, description, imageUrl, onButtonClick }) {
  return (
    <div className="panel">
      <img src={imageUrl} alt={`${name} Thumbnail`} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Button className="button1" onClick={onButtonClick}>Enrol for Reviews</Button>    </div>
  );
}

export default Panel;
