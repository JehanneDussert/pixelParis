import React from 'react';
import { DivContainer, DivPage, LinkPage } from '../../styles/Atom'

function Home() {
    return (
        <DivPage>
            <video id="background-video">
                <source src="/Videos/fumee-306.mp4" type="video/mp4" autoPlay="true"/>      
            </video>
            <DivContainer>
                <h3 class="btn">
                    <LinkPage href="#about">Le projet</LinkPage>
                </h3>
                <h3 class="btn">
                    <LinkPage href="#team">L'équipe</LinkPage>
                </h3>
            </DivContainer>
        </DivPage>
    )
}
  
export default Home