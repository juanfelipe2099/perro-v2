import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/IA.scss';

const IA = () => {
	return (
  <div>
  <title>Calculadora</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <div className="container">
    <h1 className="logo">¿Que peludito tienes?</h1>
    <div className="card-container">
      <Link to="/iasize" className="card">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2022/04/Buzo-Pola-001-Simonas-Pets-People-1-600x600.jpg" />
        <h2>Perros</h2>
      </Link>
      <div className="card">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2022/04/Camisilla-Lilo-004-Simona%C2%B4s-Pets-People-4.jpg" />
        <h2>Gatos</h2>
      </div>
      <div className="card">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2021/07/Vestido-para-Mascotas-Milu-003-Amarillo-y-conejos-Simonas-Pets-People-5.jpg" />
        <h2>Otros</h2>
      </div>
    </div>
  </div>
</div>
    
	);
}

export default IA;