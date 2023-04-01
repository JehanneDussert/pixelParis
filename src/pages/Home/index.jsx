import React from 'react';
import { DivContainer, DivPage, LinkPage } from '../../styles/Atom'

function Home() {
    return (
        <DivPage id="home">
            <video id="background-video" autoPlay muted loop src="/Videos/démo.mp4" type="video/mp4"/>
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