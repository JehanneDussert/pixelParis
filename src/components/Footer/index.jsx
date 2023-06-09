import React from 'react';
import CircleArrow from '../../components/CircleArrow';

const Footer = ( { redirection } ) => {
  return (
    <div className="footer">
      <CircleArrow redirection={redirection} />
    </div>
  );
};

export default Footer;