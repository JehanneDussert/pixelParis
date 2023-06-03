import React from 'react';

const CircleArrow = ( { redirection }) => {
  return (
    <div className="circle-container">
      <a href={redirection}>
        <div className="circle">
          <span className="arrow"></span>
        </div>
      </a>
    </div>
  );
};

export default CircleArrow;