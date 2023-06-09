import React from "react";

function Header() {
  return ( 
    <div className="header">
        <a href="#home" id="logo">Pixel Paris</a>
        <div className="nav-bar">
          <a className="nav-item" href="#about">Projet</a>
          <a className="nav-item" href="#services">Services</a>
          <a className="nav-item" href="#demo">Démo</a>
          <a className="nav-item" href="#team">L'équipe</a>
          <a className="nav-item" href="mailto:jehanne-dussert@hotmail.fr, nobila.tr@gmail.com">Contact</a>
        </div>
    </div>
  );
}

export default Header;
