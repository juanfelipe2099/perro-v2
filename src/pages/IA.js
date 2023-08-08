import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/IA.scss';

const IA = () => {
	return (
  <div>
  <title>Calculadora</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <div className="container-ia">
  <img src="https://www.simonaspetspeople.com/wp-content/uploads/2023/01/Logo-Simonas-Pets-People-Registred-Negro-PNG.png" alt="Logo de la marca" className="brand-logo-ia" />
    <h1 className="logo-ia">¿Que peludito tienes?</h1>
    <div className="card-container-ia">
      <Link to="/iasize" className="card-ia">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2022/04/Buzo-Pola-001-Simonas-Pets-People-1-600x600.jpg" />
        <h2>Perros</h2>
      </Link>
      <Link to="/iamedidas" className="card-ia">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2022/04/Camisilla-Lilo-004-Simona%C2%B4s-Pets-People-4.jpg" />
        <h2>Gatos</h2>
      </Link>
      <Link to="/iamedidas" className="card-ia">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2021/07/Vestido-para-Mascotas-Milu-003-Amarillo-y-conejos-Simonas-Pets-People-5.jpg" />
        <h2>Otros</h2>
      </Link>
    </div>
  </div>
</div>
    
	);
}

export default IA;