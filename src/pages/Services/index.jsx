import React from 'react';
import { faHome, faLeaf, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card'
import CircleArrow from '../../components/CircleArrow';
import Footer from '../../components/Footer'

function Services() {

    const urbanismDescription = [ 
        "Planification d'aménagements", 
        "Outil de visualisation et communication des projets urbains", 
        "Flux de piétons et véhicules"
    ]

    const risksDescription = [ 
        "Simulation d’événements, de conditions météorologiques et anticipation de situations d'urgence",
        "Visualisation et évaluation rapide des dégâts causés par les catastrophes naturelles"
    ]

    const ecologyDescription = [ 
        "Optimisation des ressources",
        "Identification des facteurs impactants",
        "Simulation et planification de politiques en faveur d'une meilleure transition écologique"
    ]
    
    return (
        <div className="container" id="services">
            <h2 class="question-title left-text">Vous êtes une <span class="purple-text">collectivité</span>, un <span class="purple-text">établissement public</span>, une <span class="purple-text">entreprise</span> ?</h2>
            <h1 class="main-title left-text">Nos services</h1>
            <div class="project">
            <Card
                img={null}
                icon={faHome}
                title="Urbanisme"
                description= {urbanismDescription}
            />
            <Card
                img={null}
                icon={faTriangleExclamation}
                title="Gestion des risques"
                description= {risksDescription}
            />
            <Card
                img={null}
                icon={faLeaf}
                title="Ecologie"
                description= {ecologyDescription}
            />
            </div>
            <CircleArrow 
                redirection={"#demo"}
            />
            <Footer />
        </div>
    )
}
  
export default Services
