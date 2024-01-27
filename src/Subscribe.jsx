//Subscribe.jsx
import React, { useState } from 'react';
import './subscribe.css';
import Button from './Button';
import ModalDialog from './Modal';

function Subscribe() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('basic');
  const [otherSubscription, setOtherSubscription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [cityError, setCityError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('**Name is required**');
      isValid = false;
    } else {
      setNameError('');
    }

    if (address.trim() === '') {
      setAddressError('**Address is required**');
      isValid = false;
    } else {
      setAddressError('');
    }

    if (city.trim() === '') {
      setCityError('**City is required**');
      isValid = false;
    } else {
      setCityError('');
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('**Invalid email format**');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (message.trim() === '') {
      setMessageError('**Message is required**');
      isValid = false;
    } else {
      setMessageError('');
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', {
        name,
        address,
        city,
        email,
        message,
        subscriptionType: subscriptionType === 'other' ? otherSubscription : subscriptionType,
      });
      setIsSubmitted(true);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (isSubmitted) {
      setName('');
      setAddress('');
      setCity('');
      setEmail('');
      setMessage('');
      setSubscriptionType('basic');
      setOtherSubscription('');
      setIsSubmitted(false);
      setNameError('');
      setAddressError('');
      setCityError('');
      setEmailError('');
      setMessageError('');
    }
  };

  return (
    <div className="subscribe">
      <h2>Subscribe to Our Newsletter</h2>
      <img
        src="https://plus.unsplash.com/premium_photo-1683865775610-26fcc118a539?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3Vic2NyaWJlfGVufDB8fDB8fHww"
        alt="Image of a Subscribe Image"
        className="subscribe-image"
      />
      <p>Stay up-to-date with the latest news about our University</p>

      <Button type="button" visual="link" onClick={() => setIsModalOpen(true)}>
        Open Subscription Form
      </Button>

      <ModalDialog isOpen={isModalOpen} onClose={closeModal} isSubmitted={isSubmitted}>
        {isSubmitted ? (
          <div>
            <p>Thank you for submitting the form!</p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Name"
              />
              {nameError && <p className="error-message">{nameError}</p>}
            </div>

            <div>
              <label htmlFor="address">Address:</label>
              <input
                id="address"
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                aria-label="Address"
              />
              {addressError && <p className="error-message">{addressError}</p>}
            </div>

            <div>
              <label htmlFor="city">City:</label>
              <input
                id="city"
                type="text"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                aria-label="City"
              />
              {cityError && <p className="error-message">{cityError}</p>}
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email"
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Message"
              />
              {messageError && <p className="error-message">{messageError}</p>}
            </div>

            <div>
              <label htmlFor="subscriptionType">Subscription Type:</label>
              <select
                id="subscriptionType"
                value={subscriptionType}
                onChange={(e) => setSubscriptionType(e.target.value)}
                aria-label="Subscription Type"
              >
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="other">Other</option>
              </select>
            </div>

            {subscriptionType === 'other' && (
              <div>
                <label htmlFor="otherSubscription">Other Subscription Type:</label>
                <input
                  id="otherSubscription"
                  type="text"
                  placeholder="Enter other subscription type"
                  value={otherSubscription}
                  onChange={(e) => setOtherSubscription(e.target.value)}
                  aria-label="Other Subscription Type"
                />
              </div>
            )}

            <Button type="submit">Submit</Button>
          </form>
        )}
      </ModalDialog>
    </div>
  );
}

export default Subscribe;
