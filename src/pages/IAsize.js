import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/IAsize.scss';

const Home = () => {
	return (
  <div>
  <title>Calculadora</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <div className="container">
    <h1 className="logo">¿De que tamaño es tu peludito?</h1>
    <div className="card-container">
      <Link className="card">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2021/07/Vestido-para-Mascotas-Milu-003-Amarillo-y-conejos-Simonas-Pets-People-5.jpg" />
        <h2>Mini</h2>
      </Link>
      <Link className="card">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2023/03/Buzo-Lola-004-Simona%C2%B4s-Pets-People-2.jpg" />
        <h2>Pequeño</h2>
      </Link>
      <Link className="card">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2023/02/Chaleco_alaska001_simonas_pets_people_01.jpg" />
        <h2>Mediano</h2>
      </Link>
      <Link className="card">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2021/07/Buzo-para-Mascotas-Pola-001-Gris-con-corazones-rosados-Simonas-Pets-People-3.jpg" />
        <h2>Grande</h2>
      </Link>
      <Link className="card">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2021/07/Sitio-web-Simonas-2.jpg" />
        <h2>Gigante</h2>
      </Link>
    </div>
  </div>
</div>
    
	);
}

export default Home;