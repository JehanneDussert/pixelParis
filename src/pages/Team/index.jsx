import React from 'react';
// import { DivContainer, BoxContainer, DivPage, Separator, Photo } from "../../styles/Atom";
// import Image from "../../assets/building.jpg"
import jehanned from "../../imgs/jehanned.jpg"
import nobilat from "../../imgs/nobilat.jpg"

function Team() {
    const team = [
      { name: "Nobila Traore", role: "Développeur C++ | Unreal Engine 5"},
      { name: "Jehanne Dussert", role: "Développeuse C++ | Unreal Engine 5"},
    ];
  
    const Title = ({ children }) => (
      <h1 className="title">{children}</h1>
    );
    
    const Subtitle = ({ children }) => (
      <p className="role">{children}</p>
    );
  
    return (
      <div></div>
      // <DivPage id="team">
      //   <DivContainer className="wrapper">
      //     <BoxContainer>
      //       <Title>L'équipe</Title>
      //     </BoxContainer>
      //   </DivContainer>
      //   <Separator />
      //   <DivContainer className="wrapper">
      //     {team.map((person) => (
      //       <BoxContainer key={person.name}>
      //         <h2 className="description">{person.name}</h2>
      //         {person.name === "Nobila Traore" ?
      //         <Photo src={nobilat} /> :
      //         <Photo src={jehanned} />}
      //         <Subtitle>{person.role}</Subtitle>
      //       </BoxContainer>
      //     ))}
      //   </DivContainer>
      // </DivPage>
    );
  }
  
export default Team