import React from 'react';
import { DivContainer, BoxContainer, DivPage } from "../../styles/Atom";
import Image from "../../assets/building.jpg"

function Team() {
    return (
        <DivPage id="team">
            <DivContainer class="wrapper">
                <BoxContainer class="profilte">
                <h2 class="title">
                    Nobila Traore
                    <p class="subtitle"> Développeur C++ | Unreal Engine 5</p>
                    {/* <div class="profile" alt="Nobila"/> */}
                </h2>
                </BoxContainer>
                <BoxContainer>
                <h2 class="title">
                    Jehanne Dussert
                    <p class="subtitle"> Développeuse C++ | Unreal Engine 5</p>
                    {/* <div class="Jehanne" alt="Jehanne"/> */}
                </h2>
                </BoxContainer>
            </DivContainer>
        </DivPage>
    )
}
  
export default Team