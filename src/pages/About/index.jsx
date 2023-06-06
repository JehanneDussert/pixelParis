import React from 'react';
import illustration from "../../imgs/about.jpg";
import CircleArrow from '../../components/CircleArrow';
import Footer from '../../components/Footer'

function About() {
  return (
    <div className="container" id="about">
      <h3 className="little-title">Découvrez Pixel Paris</h3>
      <h1 className="main-title">Le projet</h1>
      <div className="project">
        <div className="cell">
          <img className="illustration" src={illustration} alt="Illustration" />
        </div>
        <div className="cell">
          <h1 className="title">Pixel Paris, votre solution en matière de <span className="purple-text">visualisation</span> et de <span className="purple-text">simulation</span></h1>
          <p className="description">Pixel Paris est un programme 3D développé sur Unreal Engine 5 permettant une visualisation de la ville de Paris et la simulation d'événements tels que la cérémonie 
            d'ouverture des Jeux Olympiques de Paris 2024.</p>
        </div>
      </div>
      <CircleArrow redirection={"#services"} />
      <Footer />
    </div>
  )
}

export default About;