import React from 'react';
import Card from '../../components/Card'
import Jehanne from '../../imgs/jehanne.png'
import Nobila from '../../imgs/nobila.png'
import Cynthia from '../../imgs/cynthia.png'
import CircleColor from '../../components/CircleColor'
import { faLinkedin, faGithub, faArtstation } from '@fortawesome/free-brands-svg-icons';
function Team() {

  const teamMembers = [
    {
      name: "Jehanne",
      surname: "Dussert",
      img: Jehanne,
      title: "Développeuse & Juriste",
      subtitle: "C++ | Unreal Engine 5 | Droit des NTIC",
      description: [
        "Expériences multiples dans le service public (Ministère de la Justice, Ministère de l'Intérieur et des Outre-mer)",
        "Juriste en droit des nouvelles technologies et IA",
      ],
      socialMedia: [
        "https://www.linkedin.com/in/jehanne-dussert/",
        "https://github.com/JehanneDussert/",
      ],
      icons: [faLinkedin, faGithub],
    },
    {
      name: "Nobila",
      surname: "Traore",
      img: Nobila,
      title: "Développeur Senior",
      subtitle: "C++ | Unreal Engine 5",
      description: [
        "Passionné d'infographie",
        "8 ans d'expérience",
        "Freelance en développement de jeux, d'applications et d'environnements 3D immersifs",
      ],
      socialMedia: [
        "https://www.linkedin.com/in/nobila/",
        "https://github.com/notraore/",
      ],
      icons: [faLinkedin, faGithub],
    },
    {
      name: "Cynthia",
      surname: "Le Friec",
      img: Cynthia,
      title: "Environment Artist",
      subtitle: "Unreal Engine 5",
      description: [
        "Freelance en modélisation d'environnement 3D, level art et lighting UE5",
        "3 ans d'expérience sur plusieurs productions de jeux vidéo et d'architecture en rendu temps réel",
      ],
      socialMedia: [
        "https://www.linkedin.com/in/lf-cynthia/",
        "https://www.artstation.com/lfcynthia",
      ],
      icons: [faLinkedin, faArtstation],
    }
  ];

    return (
    <div className="container" id="team">
      <h1 className="main-title">L'équipe</h1>
      <div className="team-member-container">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <h2 className="team-member">{member.name} <span className="purple-text">{member.surname}</span></h2>
            <CircleColor img={member.img} />
            <Card
              className="team-page"
              icons={member.icons}
              title={member.title}
              subtitle={member.subtitle}
              description={member.description}
              iconClassName="team-icon"
              socialMedia={member.socialMedia}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
  
export default Team