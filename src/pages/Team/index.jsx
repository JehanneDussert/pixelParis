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
            <h1 class="main-title">L'équipe</h1>
            <div class="project">
              <h2 className="team-member card team-page">Jehanne <span class="purple-text">Dussert</span></h2>
              <h2 className="team-member card team-page">Nobila <span class="purple-text">Traore</span></h2>
            </div>
            <div class="project">
              <div class="circle-wrapper card team-page"><CircleColor img={Jehanne}/></div>
              <div class="circle-wrapper card team-page"><CircleColor img={Nobila}/></div>
            </div>
            <div class="project">
            <Card
              className="team-page"
              title="Développeuse & Juriste"
              subtitle={"C++ | UE 5 | Droit des NTIC"}
              description={jehanneDescription}
            >
            </Card>
            <Card
                className="team-page"
                title="Développeur Senior"
                subtitle={"C++ | UE 5"}
                description={nobilaDescription}
            />
            </div>
        </div>
    )
}
  
export default Team