import React, { useState } from 'react';
import './footer.css';
import ModalDialog from './Modal';
import Button from './Button';

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="footer">
      <div className="logo-and-description">
        <img
          src="https://images.unsplash.com/photo-1578069862702-3f345d2cdf11?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9ydGhlYXN0ZXJuJTIwdW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D"
          alt="University Logo"
          className="footer-logo"
        />
        <p>Where Passion meets Excellence!!!</p>
      </div>
      <div className="contact-us">
        <Button onClick={openModal}>Contact Us</Button>
      </div>

      {/* Modal for Contact Information */}
      <ModalDialog isOpen={isModalOpen} onClose={closeModal}>
        <h2>Contact Information</h2>
        <p>Email: Northeastern@google.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Location- Stetson East, Boston, MA</p>   
        {modalContent && <p>{modalContent}</p>}
      </ModalDialog>
    </footer>
  );
}

export default Footer;
