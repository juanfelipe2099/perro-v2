import React from 'react';

const VideoYT = () => {
  return (
    <div className="video-section">
      <div className="video-title">
        <h2>¿Cómo lo mido?</h2>
      </div>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/watch?v=6PRqTahF-CE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoYT;
