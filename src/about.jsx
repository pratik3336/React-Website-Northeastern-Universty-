import React, { useState } from 'react';
import './about.css';
import ModalDialog from './Modal'; 
import Button from './Button';

function About() {
  const [modalVisible, setModalVisible] = useState(false);
  const [randomText, setRandomText] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleModalToggle = (course) => {
    setSelectedCourse(course);
    if (!modalVisible) {
      const courseInfo = {
        UndGradcourses: "Bachelor of Fine Arts (B.F.A.),Bachelor of Social Work (B.S.W.),Bachelor of Engineering (B. Eng.),Bachelor of Science in Public Affairs (B.S.P.A),Bachelor of Science in Nursing (B.S.N.),Bachelor of Philosophy (B. Phil.),Bachelor of Architecture Degree (B. Arch.)",
        Gradcourses: "Master of Accountancy,Master of Advanced Study,Master of Agricultural Economic,Master of Applied Finance,Master of Applied Science,Master of Architecture,Master of Arts,Master of Arts in Liberal Studies,Master of Arts in Special Education,Master of Arts in Teaching,Master of Bioethics",
        BusCourses: "Master of Business Administration,Master of Business, Entrepreneurship and Technology,Master of Business,Master of Business Engineering,Master of Business Informatics,Master of Commerce,Master of Computational Finance"
      };
      setRandomText(courseInfo[course]);
    }
    setModalVisible(!modalVisible);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    
    <div className="about-section">
      <h1>About Our Courses</h1>
      <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2tzfGVufDB8fDB8fHww" 
      alt="Courses of University"/>
      <p>See Our Courses!!!</p>

     
      <Button onClick={() => handleModalToggle('UndGradcourses')} type="button" visual="primary">
        UnderGraduate Degrees
      </Button>
      <Button onClick={() => handleModalToggle('Gradcourses')} type="button" visual="primary">
        Graduate Degrees
      </Button>
      <Button onClick={() => handleModalToggle('BusCourses')} type="button" visual="primary">
        Business Degrees
      </Button>

      <ModalDialog isOpen={modalVisible} onClose={handleCloseModal}>
        <h2>{selectedCourse}</h2>
        <p>{randomText}</p>
      </ModalDialog>
    </div>
  );
  
  }
export default About;