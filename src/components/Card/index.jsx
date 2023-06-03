import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ icon, title, subtitle, description, className }) {
  return (
    <div className={`card ${className}`}>
      <FontAwesomeIcon icon={icon} className="card-icon" />
      <h3 className="card-title">{title}</h3>
      <h4 className="card-subtitle">{subtitle}</h4>
      <ul className="card-description">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;