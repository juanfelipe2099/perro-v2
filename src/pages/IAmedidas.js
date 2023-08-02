
import React from 'react';
import '../styles/IAmedidas.scss'; // Importa el archivo .scss para aplicar los estilos
import Titulo from '../components/Titulo';
import VideoYT from '../components/VideoYT';
import Tarjetas from '../components/Tarjetas';

const IAmedidas = () => {
  return (
    <div className="app">
      <Titulo />
      <div className="content">
        <VideoYT />
        <Tarjetas />
      </div>
    </div>
  );
}

export default IAmedidas;
