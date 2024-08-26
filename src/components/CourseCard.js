

import React from 'react';

const CourseCard = ({ image, name, price, duration, certificates }) => {
  return (
    <div className="course-card">
      <div className="course-card-header">
        <img src={image} alt="Course" className="course-image" />
      </div>
      <div className="course-info">
        <h2 className="course-name">{name}</h2>
        
      </div>
      <div className='course-lower'>
      <p className="course-price">{price}</p>

      <p className="course-duration"> 🕝 {duration}</p>

      <p className="course-certificates"> 🎓 {certificates}</p>
      </div>
      
    </div>
  );
};

export default CourseCard;
