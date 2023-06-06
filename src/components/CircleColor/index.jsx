import React from 'react';

const CircleColor = ({ img }) => {
  return (
    <div className="circle-color">
      <img src={img} alt="Circle" className="circle-image" />
    </div>
  );
};

export default CircleColor;