import React from 'react';
import illu1 from "../../imgs/illu1.jpg"
import illu2 from "../../imgs/illu2.jpg"
import illu3 from "../../imgs/illu3.jpg"

function Demo() {

    // const illustrations = [{illu1}, {illu2}, {illu3}];
    const illustrations = [
        { illu1 },
        { illu2 },
        { illu3 }
      ];
    return (
        <div className="container" id="demo">
            <h1 class="main-title">Démo</h1>
            <div class="project">
                {illustrations.map((illustration, index) => {
                    const key = Object.keys(illustration)[0];
                    const value = Object.values(illustration)[0];

                    return (
                    <div key={key}>
                        <img src={value} class="demo-illustration" alt={`Illustration ${index + 1}`} />
                    </div>
                    );
                })}
            </div>
            <div class="project">
                {illustrations.map((illustration, index) => {
                    const key = Object.keys(illustration)[0];
                    const value = Object.values(illustration)[0];
                    
                    return (
                    <div key={key}>
                        <img src={value} class="demo-illustration" alt={`Illustration ${index + 1}`} />
                    </div>
                    );
                })}
            </div>
        </div>
    )
}
  
export default Demo