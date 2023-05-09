import React from 'react';
import { DivContainer, BoxContainer, DivPage, Separator } from "../../styles/Atom";

function About() {
    return (
        <DivPage id="about">
            <DivContainer>
                <BoxContainer>
                        <h1 className="project">Le projet</h1>
                        <Separator/>
                        <p class="subtitle"> Découvrez <strong>Pixel Paris</strong>, un programme 3D développé sur Unreal Engine 5 permettant une <strong>visualisation de la ville de Paris</strong> et la <strong>simulation d'événements</strong> tels que la cérémonie d'ouverture des Jeux Olympiques de Paris 2024.</p>
                        <p class="subtitle">Plongez dans l'univers de <strong>la ville lumière</strong> comme jamais auparavant.</p>
                </BoxContainer>
            </DivContainer>
            {/* <DivContainer className="wrapper">
                <BoxContainer className="keywords">
                    <h2 class="description">Simuler</h2>
                </BoxContainer>
                <BoxContainer className="keywords">
                    <h2 class="description">Visualiser</h2>
                </BoxContainer>
                <BoxContainer className="keywords">
                    <h2 class="description">Créer</h2>
                </BoxContainer>
            </DivContainer> */}
        </DivPage>
    )
}
  
export default About
