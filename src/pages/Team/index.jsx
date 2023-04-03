import React from 'react';
import { DivContainer, BoxContainer, DivPage, Separator } from "../../styles/Atom";
import Image from "../../assets/building.jpg"

function Team() {
    return (
        <DivPage id="team">
            <DivContainer class="wrapper">
                <BoxContainer>
                        <h1 class="title">L'équipe</h1>
                </BoxContainer>
            </DivContainer>
            <Separator/>
            <DivContainer class="wrapper">
                <BoxContainer>
                    <h2 class="description">Nobila Traore</h2>
                    <p class="subtitle"> Développeur C++ | Unreal Engine 5</p>
                </BoxContainer>
                <BoxContainer>
                    <h2 class="description">Jehanne Dussert</h2>
                    <p class="subtitle"> Développeuse C++ | Unreal Engine 5</p>
                </BoxContainer>
            </DivContainer>
        </DivPage>
    )
}
  
export default Team