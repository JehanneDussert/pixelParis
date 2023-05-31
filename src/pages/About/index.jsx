import React from 'react';
import illustration from "../../imgs/about.jpg"

function About() {
    return (
        <div className="container" id="about">
            <h3 class="little-title">Découvrez Pixel Paris</h3>
            <h1 class="main-title">Le projet</h1>
            <div class="project">
                <div class="cell">
                    <img class= "illustration" src={illustration}/>
                </div>
                <div class="cell">
                    <h1 class="title">Pixel Paris, votre solution en matière de <span class="purple-text">visualisation</span> et de <span class="purple-text">simulation</span></h1>
                    <p class="description">Pixel Paris est un programme 3D développé sur Unreal Engine 5 permettant une visualisation de la ville de Paris et la simulation d'événements tels que la cérémonie 
                        d'ouverture des Jeux Olympiques de Paris 2024.</p>
                </div>
            </div>
        </div>
    )
}
  
export default About
