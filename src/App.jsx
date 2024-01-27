// App.jsx
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import MainArea from './MainArea';
import Subscribe from './Subscribe';
import './App.css';
import Campus from './Campus';
import Gallery from './Gallery';
import StudentLife from './StudentLife';
import Reviews from './Reviews';


function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [enteredName, setEnteredName] = useState('');

  const handleFormSubmit = (newName) => {
    setEnteredName(newName);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  let content;
  switch (currentPage) {
    case 'home':
      content = <Home setCurrentPage={setCurrentPage} />;
      break;
    case 'about':
      content = <About setCurrentPage={setCurrentPage} />;
      break;
    case 'subscribe':
      content = <Subscribe />;
      break;
    case 'main':
      content = <MainArea setCurrentPage={setCurrentPage}/>;
      break;
    case 'campus':
      content = <Campus />;
      break;
    case 'gallery':
      content = <Gallery />;
      break;
    case 'StudentLife':
      content = <StudentLife />;
      break;
    case 'Reviews':
      content = <Reviews enteredName={enteredName} onFormSubmit={handleFormSubmit} />;
      break;
    default:
      content = <Home setCurrentPage={setCurrentPage} />;
  }

  return (
    <div className="App">
<Header />

      <NavBar setCurrentPage={setCurrentPage} />
      {content}
      <Footer />
    </div>
  );
}

export default App;
