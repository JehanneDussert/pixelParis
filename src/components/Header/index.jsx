import React from "react";
import { NavBar, LinkPage, Contact, Logo } from "../../styles/Atom";
import Image from "../../assets/enveloppe.png"

function Header() {
  return ( 
    <NavBar>
      <LinkPage href="#home">Pixel Paris</LinkPage>
      <Contact href="mailto:jehanne-dussert@hotmail.fr"><Logo src={Image}/></Contact>
    </NavBar>
  );
}

export default Header;
