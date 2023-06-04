import React from 'react';
import Card from '../../components/Card'
import Jehanne from '../../imgs/jehanne.png'
import Nobila from '../../imgs/nobila.png'
import CircleColor from '../../components/CircleColor'
import CircleArrow from '../../components/CircleArrow';

function Team() {

    const jehanneDescription = [ 
        "Expériences multiples dans le service public (Ministère de la Justice, Ministère de l'Intérieur)",
        "Egalement juriste en droit des nouvelles technologies et IA"
    ]

    const nobilaDescription = [ 
        "Passionné d'infographie",
        "8 ans d'expérience",
        "Freelance en développement de jeux, d'applications et d'environnements 3D immersifs"
    ]
    
    return (
    <div className="container" id="team">
      <h1 className="main-title">L'équipe</h1>
      <div className="team-member-container">
        <div className="team-member-card">
          <h2 className="team-member">Jehanne <span className="purple-text">Dussert</span></h2>
          <CircleColor img={Jehanne} />
          <Card
            className="team-page"
            title="Développeuse & Juriste"
            subtitle="C++ | UE 5 | Droit des NTIC"
            description={jehanneDescription}
          />
        </div>
        <div className="team-member-card">
          <h2 className="team-member">Nobila <span className="purple-text">Traore</span></h2>
          <CircleColor img={Nobila} />
          <Card
            className="team-page"
            title="Développeur Senior"
            subtitle="C++ | UE 5"
            description={nobilaDescription}
          />
        </div>
      </div>
    </div>
  );
}
  
export default Team