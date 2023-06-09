import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ icons, title, subtitle, description, className, iconClassName, socialMedia }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-icons">
        {icons && icons.length > 0 && socialMedia ? (
          icons.map((icon, index) => {
            const link = socialMedia[index];
            return (
              <a href={link} key={index}>
                <FontAwesomeIcon icon={icon} className={`${iconClassName} ${!link ? 'no-link' : ''}`} />
              </a>
            );
          })
        ) : (
          icons.map((icon, index) => (
            <FontAwesomeIcon icon={icon} className={`${iconClassName} no-link`} key={index} />
          ))
        )}
      </div>
      <div className="center-content">
        <h3 className="card-title">{title}</h3>
        <h4 className="card-subtitle">{subtitle}</h4>
        <div className="card-description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;