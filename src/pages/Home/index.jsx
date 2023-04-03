import React from 'react';
import { DivContainer, DivPage, LinkPage, HomeButton} from '../../styles/Atom'

function Home() {
    return (
        <DivPage id="home">
            <video id="background-video" autoPlay muted loop src="/Videos/démo.mp4" type="video/mp4"/>
            <DivContainer>
                <HomeButton href="#about">
                    <LinkPage>Le projet</LinkPage>
                </HomeButton>
                <HomeButton href="#team">
                    <LinkPage href="#team">L'équipe</LinkPage> 
                    </HomeButton>
            </DivContainer>
        </DivPage>
    )
}
  
export default Home