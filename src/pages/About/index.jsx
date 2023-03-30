import React from 'react';
import { DivContainer, BoxContainer, DivPage } from "../../styles/Atom";
import styled from 'styled-components'

const Title = styled.h1 `
    text-align: center;
`

const MyDiv = styled.div `
    padding: 5vh 5vw 5vh 5vw;
    text-align: justify-all;
`

const Description = styled.div `
    padding: 5vh 5vw 5vh 5vw;
    text-align: justify-all;
    width: 30vw;
`

const MonTrait = styled.div `
    border-top: 1px solid #EFEFEF;
    width: 30vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4vh;
`

function About() {
    return (
        <DivPage>
            <DivContainer id="projet">
            <BoxContainer>
                <MyDiv>
                    <Title>Le projet</Title>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                </MyDiv>
            </BoxContainer>
            </DivContainer>
            <MonTrait/>
            <DivContainer>
            <BoxContainer>
                <Description>
                    <Title>Innover</Title>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p> */}
                </Description>
            </BoxContainer>
            <BoxContainer>
                <Description>
                    <Title>Modéliser</Title>
                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p> */}
                </Description>
            </BoxContainer>
            </DivContainer>
        </DivPage>
    )
}
  
export default About