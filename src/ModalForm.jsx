/* ModalForm.jsx */
import React, { useState } from 'react';
import ModalDialog from './Modal';
import Button from './Button';

function ModalForm({ isOpen, onClose, onSubmit }) {
  const [newName, setNewName] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    if (!newName.trim()) {
      setError('Please enter a name.');
      return;
    }

    
    setError('');

   
    onSubmit(newName);

    
    onClose();
  };

  return (
    <ModalDialog isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="newName">New Name:</label>
        <input
          id="newName"
          type="text"
          placeholder="Enter new name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button type="submit">Update</Button>
      </form>
    </ModalDialog>
  );
}

export default ModalForm;
