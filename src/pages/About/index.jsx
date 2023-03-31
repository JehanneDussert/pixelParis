import React from 'react';
import { DivContainer, BoxContainer, DivPage, Separator } from "../../styles/Atom";

function About() {
    return (
        <DivPage>
            <DivContainer id="about">
                <BoxContainer class="description">
                        <h1 class="title">Le projet</h1>
                        <p> Permettre la visualisation d'événements en re-créant des scènes animées sur Unreal Engine 5.</p>
                </BoxContainer>
            </DivContainer>
            <Separator/>
            <DivContainer>
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