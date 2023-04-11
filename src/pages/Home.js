import React from 'react'
import '../styles/Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
    <div>
      <div className="logo-home">
        <div className='image-logo'>
        <img src='https://www.simonaspetspeople.com/wp-content/uploads/2023/01/Logo-Simonas-Pets-People-Registred-Negro-PNG.png'/>
        <h1>¿Cuál es tu peludito?</h1>
        </div>
      </div>
      <div className="container">
      <div className="image">
        <Link to="/dogsize">
         <img src="https://smylepets.com/wp-content/uploads/2022/09/miniatura-teckel.jpg.webp" />
        </Link>
        <div className="text">Perritos</div>
      </div>
      <div className="image">
       <img src="https://gatoanimal.com/wp-content/uploads/2020/04/gato-persa-silver-1-560x560.jpg" />
      <div className="text">Gaticos</div>
     </div>
     <div className="image">
       <img src="https://i.pinimg.com/1200x/6a/49/3e/6a493ec16b2b4a44bd703bc7f3d5dd4b.jpg" />
      <div className="text">Otros</div>
     </div>
    </div>
    </div>
    
    


  
    
	);
}

export default Home;