import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleColor from '../CircleColor'

function Card({ img, icon, title, description }) {
  return (
    <div className="card">
      { img !== null ? <CircleColor img={img}/> : <span></span> }
      <FontAwesomeIcon icon={icon} className="card-icon" />
      <h3 className="card-title">{title}</h3>
      <ul className="card-description">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;