import React from 'react'
import '../styles/IA.scss';

const Home = () => {
	return (
  <div>
  <title>Calculadora</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <div className="container">
    <h1 className="logo">Marca de Ropa para Perros</h1>
    <div className="card-container">
      <div className="card">
        <img src="dog1.jpg" />
        <h2>Tamaño pequeño</h2>
      </div>
      <div className="card">
        <img src="dog2.jpg" />
        <h2>Tamaño mediano</h2>
      </div>
      <div className="card">
        <img src="dog3.jpg" />
        <h2>Tamaño grande</h2>
      </div>
    </div>
  </div>
</div>
    
	);
}

export default Home;