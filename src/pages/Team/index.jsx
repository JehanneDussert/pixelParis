import React from 'react';
import { DivContainer, BoxContainer, DivPage } from "../../styles/Atom";
import Image from "../../assets/building.jpg"

function Team() {
    return (
        <DivPage>
            <DivContainer id="team">
                <BoxContainer>
                    <h2 class="title">Nobila Traore</h2>
                    <img class="profile" src={Image} width="300vw" alt="Nobila"/>
                    <p class="subtitle"> Développeur C++ | Unreal Engine 5</p>
                </BoxContainer>
                <BoxContainer>
                    <h2 class="title">Jehanne Dussert</h2>
                    <img class="profile" src={Image} width="300vw" alt="Jehanne"/>
                    <p class="subtitle"> Développeuse C++ | Unreal Engine 5</p>
                </BoxContainer>
            </DivContainer>
        </DivPage>
    )
}
  
export default Team