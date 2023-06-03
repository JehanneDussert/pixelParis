import React from 'react';
import { faHome, faLeaf, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card'
import Jehanne from '../../imgs/jehanne.png'
import Nobila from '../../imgs/nobila.png'

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
          <h3 class="little-title">En savoir plus sur nous</h3>
            <h1 class="main-title">L'équipe</h1>
            <div class="project">
              <h2 className="team-member card">Jehanne <span class="purple-text">Dussert</span></h2>
              <h2 className="team-member card">Nobila <span class="purple-text">Traore</span></h2>
            </div>
            <div class="project">
            {/* <h2>Jehanne <span class="purple-text">Dussert</span></h2> */}
            <Card
              img={Jehanne}
              icon={null}
              title="Développeuse & Juriste"
              description= {jehanneDescription}
            >
            </Card>
            <Card
                img={Nobila}
                icon={null}
                title="Développeur Senior"
                description= {nobilaDescription}
            />
            </div>
        </div>
    )
}
  
export default Team