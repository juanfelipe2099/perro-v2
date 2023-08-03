// components/VideoSection.js

import React from 'react';
import YouTube from 'react-youtube';

const VideoSection = () => {
  const videoId = 'jZGpkLElSu8'; // Reemplaza 'VIDEO_ID' con el ID del video de YouTube que deseas mostrar

  const opts = {
    height: '440',
    width: '100%',
    playerVars: {
      // Opciones adicionales del reproductor de YouTube (opcional)
      // Consulta la documentación de YouTube para ver más opciones: https://developers.google.com/youtube/player_parameters
    },
  };

  return (
    <div className="video-section">
      <div className="video-title">
        <h2>¿Cómo mido a mi peludo?</h2>
      </div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
}

export default VideoSection;
