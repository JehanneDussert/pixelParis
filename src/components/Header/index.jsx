import React from "react";

function Header() {
  return ( 
    <div class="header">
        <a href="#home" id="logo">Pixel Paris</a>
        <div class="nav-bar">
          <a class="nav-item" href="#about">Projet et services</a>
          <a class="nav-item" href="#demo">Démo</a>
          <a class="nav-item" href="#team">L'équipe</a>
          <a class="nav-item" href="mailto:jehanne-dussert@hotmail.fr">Contact</a>
        </div>
    </div>
  );
}

export default Header;
