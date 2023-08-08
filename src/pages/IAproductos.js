import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/IAproductos.scss';

const Home = () => {
	return (
  <div>
  <title>Calculadora</title>
  <link rel="stylesheet" type="text/css" href="styles.css" />
  <div className="container-iaproductos">
  <img src="https://www.simonaspetspeople.com/wp-content/uploads/2023/01/Logo-Simonas-Pets-People-Registred-Negro-PNG.png" alt="Logo de la marca" className="brand-logo-iaproductos" />
    <h1 className="logo-iaproductos">¿Qué deseas comprar?</h1>
    <div className="card-container-iaproductos">
      <Link className="card-iaproductos">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2022/04/Gorra-basica-para-mascotas-Pepe-014-Simona%C2%B4s-Pets-People-1.jpg" />
        <h2>Gorras</h2>
      </Link>
      <Link to="/iamedidas" className="card-iaproductos">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2021/11/Buzo-Lola-007-Simonas-Pets-People-2.jpg" />
        <h2>Prendas de vestir</h2>
      </Link>
      <Link to="/iamedidas" className="card-iaproductos">
        <img src="https://www.simonaspetspeople.com/wp-content/uploads/2023/02/Arnes-Arnes-003-Simonas-Pets-People-2-600x600.jpg" />
        <h2>Arnes</h2>
      </Link>
    </div>
  </div>
</div>
    
	);
}

export default Home;