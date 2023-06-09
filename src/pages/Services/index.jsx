import React from 'react';
import { faHome, faLeaf, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/Card'
import Footer from '../../components/Footer'

function Services() {

    const fields = [
        {
          title: "Urbanisme",
          icons: [faHome],
          description: [
            "Planification d'aménagements", 
            "Outil de visualisation et communication des projets urbains", 
            "Flux de piétons et véhicules",
          ],
        },
        {
          title: "Gestion des risques",
          icons: [faTriangleExclamation],
          description: [
            "Simulation d’événements, de conditions météorologiques et anticipation de situations d'urgence",
            "Visualisation et évaluation rapide des dégâts causés par les catastrophes naturelles",
          ],
        },
        {
          title: "Ecologie",
          icons: [faLeaf],
          description: [
            "Optimisation des ressources",
            "Identification des facteurs impactants",
            "Simulation et planification de politiques en faveur d'une meilleure transition écologique",
          ],
        },
      ];

    return (
        <div className="container" id="services">
            <h2 className="question-title left-text">Vous êtes une <span className="purple-text">collectivité</span>, un <span className="purple-text">établissement public</span>, une <span className="purple-text">entreprise</span> ?</h2>
            <h1 className="main-title left-text">Nos services</h1>
            <div className="project">
                {fields.map((field, index) => (
                    <Card
                        key={index}
                        icons={field.icons}
                        title={field.title}
                        description={field.description}
                        iconClassName="card-icon"
                    />
                ))}
            </div>
            <Footer redirection={"#demo"} />
        </div>
    )
}
  
export default Services
