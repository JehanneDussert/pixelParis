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
                    <h1 class="description">Innover</h1>
                </BoxContainer>
                <BoxContainer>
                    <h1 class="description"> Modéliser</h1>
                </BoxContainer>
            </DivContainer>
        </DivPage>
    )
}
  
export default About