import React, { useState } from 'react';
import './Campus.css';

function CampusPage() {
  const [selectedCampus, setSelectedCampus] = useState('');

  const campuses = {
    campus1: {
      name: 'Boston Campus',
      info: 'Our Campus in BOSTON with High Tech Facilities',
      imageUrls: [
        'https://images.unsplash.com/photo-1565127803082-69dd82351360?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9zdG9ufGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1556079337-a837a2d11f04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9zdG9ufGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1610891068146-87e9689d0f45?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvc3RvbnxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1563840111261-8b096fb63b65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9zdG9ufGVufDB8fDB8fHww'
      ]
    },
    campus2: {
      name: 'Seattle Campus',
      info: 'Our Campus in Seattle with High Tech Facilities',
      imageUrls: [
        'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhdHRsZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1531335773500-23410807365a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2VhdHRsZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1542223616-9de9adb5e3e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNlYXR0bGV8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1572981986848-b6f1c98828e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNlYXR0bGV8ZW58MHx8MHx8fDA%3D'

      ]
    },
    campus3: {
      name: 'UK Campus',
      info: 'Our Campus in UK with High Tech Facilities',
      imageUrls: [
        'https://images.unsplash.com/photo-1464021025634-49b81a77a858?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWt8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1483971684468-c423b6a3862d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVrfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1590159233559-1410d9eaee83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVrfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1624987871857-f9a37098d028?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHVrfGVufDB8fDB8fHww'
      ]
    },
    campus4: {
      name: 'Australia Campus',
      info: 'Our Campus in Australia with High Tech Facilities',
      imageUrls: [
        'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1514294393539-47d3b28b819d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D'

      ]
    },
    campus5: {
      name: 'Florida Campus',
      info: 'Our Campus in Florida with High Tech Facilities',
      imageUrls: [
        'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmxvcmlkYXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1494112399815-f895b47a0404?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmxvcmlkYXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D'
      ]
    }
  };

  const handleCampusChange = (event) => {
    setSelectedCampus(event.target.value);
  };

  return (
    <div className="campus-container">
      <h1>Select a Campus</h1>
      <h3>We Have a set of Campuses Spread Across the World to choose from!!!</h3>
      <select value={selectedCampus} onChange={handleCampusChange}>
        <option value="">Select...</option>
        {Object.keys(campuses).map(key => (
          <option key={key} value={key}>{campuses[key].name}</option>
        ))}
      </select>

      {selectedCampus && (
        <div className="selected-campus">
          <h2>{campuses[selectedCampus].name}</h2>
          <p>{campuses[selectedCampus].info}</p>
          <div className="image-container">
            {campuses[selectedCampus].imageUrls.map((url, index) => (
              <img key={index} src={url} alt={`${campuses[selectedCampus].name} - ${index + 1}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CampusPage;