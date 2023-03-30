import React from 'react';
import styled from 'styled-components'
import { DivContainer, DivPage, Tab } from '../../styles/Atom'
import Header from "../../components/Header"
import Demo from "../../assets/fumee-306.mp4"

const LinkPage = styled.a `
    text-decoration: none;
    color: inherit;
`

// var video = document.getElementById("background-video");

function Home() {
    // video.play()
    return (
        <DivPage>
            {/* <video id="background-video" autoplay loop muted>
                <source src={ Demo } type="video/mp4"/>      
            </video> */}
  
            <Header/>
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