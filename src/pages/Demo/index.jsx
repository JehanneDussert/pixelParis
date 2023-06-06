import React from 'react';
import zoneGraphs from "../../imgs/zoneGraphs.gif";
import droneView from "../../imgs/droneView.gif";
import streetView from "../../imgs/streetView.gif";
import streetByDay from "../../imgs/streetByDay.png";
import streetByNight from "../../imgs/streetByNight.png";
import busStop from "../../imgs/busStop.png";
import Footer from '../../components/Footer'

function Demo() {
  const illustrations = [
    { image: streetByDay, alt: 'Street By Day' },
    { image: busStop, alt: 'Bus Stop' },
    { image: streetByNight, alt: 'Street By Night' },
    { image: zoneGraphs, alt: 'Zone Graphs' },
    { image: droneView, alt: 'Drone View' },
    { image: streetView, alt: 'Street View' }
  ];

  return (
    <div className="container" id="demo">
      <h1 className="separator main-title">Démo</h1>
      <div className="project grid-illustrations">
        {illustrations.map((illustration, index) => (
          <div key={index}>
            <img
              src={illustration.image}
              className="demo-illustration"
              alt={`Illustration ${index + 1}: ${illustration.alt}`}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Demo;