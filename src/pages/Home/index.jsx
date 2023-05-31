import React, { useState, useEffect } from 'react';

function Home() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = ['Visualiser.', 'Simuler.', 'Créer.'];
  const [currentSubtitle, setCurrentSubtitle] = useState('');

  useEffect(() => {
    let fullText = subtitles[subtitleIndex];
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentText += fullText[currentIndex];
      setCurrentSubtitle(currentText);
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [subtitleIndex]);

  return (
    <div className="container" id="home">
      <video id="background-video" autoPlay muted loop src="/Videos/Demo.mp4" type="video/mp4" />
      <h1 className="home-title">Pixel Paris</h1>
      <h2 className="subtitle">{currentSubtitle}</h2>
    </div>
  );
}

export default Home;