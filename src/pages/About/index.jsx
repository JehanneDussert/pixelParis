import React from 'react';
import { DivContainer, BoxContainer, DivPage, Separator } from "../../styles/Atom";

function About() {
    return (
        <DivPage id="about">
            <DivContainer>
                <BoxContainer>
                        <h1 class="title">Le projet</h1>
                        <p class="subtitle"> Découvrez Pixel Paris, un programme 3D développé sur Unreal Engine 5 permettant une visualisation de la ville de Paris et la simulation d'événements tels que la cérémonie d'ouverture des Jeux Olympiques de Paris 2024.</p>
                        <p class="subtitle">Plongez dans l'univers de la ville lumière comme jamais auparavant.</p>
                </BoxContainer>
            </DivContainer>
            <Separator/>
            <DivContainer class="keywords">
                <BoxContainer>
                    <h2 class="description">Simuler</h2>
                </BoxContainer>
                <BoxContainer>
                    <h2 class="description">Visualiser</h2>
                </BoxContainer>
                <BoxContainer>
                    <h2 class="description">Créer</h2>
                </BoxContainer>
            </DivContainer>
        </DivPage>
    )
}
  
export default About
