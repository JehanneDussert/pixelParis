import React from "react";
import { NavBar, LinkPage, Contact, Logo, HomeLink } from "../../styles/Atom";
import Image from "../../assets/enveloppe.png"

function Header() {
  return ( 
    <NavBar>
      <HomeLink>Pixel Paris</HomeLink>
      <Contact href="mailto:jehanne-dussert@hotmail.fr"><Logo src={Image}/></Contact>
    </NavBar>
  );
}

export default Header;
