import React from 'react'
import '../styles/DogSize.scss';

const Home = () => {
	return (
    <div>
      <div className='logo'>
      <img src="https://www.simonaspetspeople.com/wp-content/uploads/2023/01/Logo-Simonas-Pets-People-Registred-Negro-PNG.png" />
      </div>
      <div className='logo'> 
          <h1>¿Cual es el tamaño de tu perrito?</h1>
      </div>
      <div className="container">
      <div className="image">
        <img src="http://www.tucachorroideal.com.co/wp-content/uploads/2014/04/pomerania-2.jpg" />
        <div className="text">Mini</div>
      </div>
      <div className="image">
       <img src="http://www.tucachorroideal.com.co/wp-content/uploads/2016/03/pug-4.jpg" />
      <div className="text">Pequeño</div>
     </div>
     <div className="image">
       <img src="http://www.tucachorroideal.com.co/wp-content/uploads/2016/03/border-collie-2.jpg" />
      <div className="text">Mediano</div>
     </div>
     <div className="image">
       <img src="http://www.tucachorroideal.com.co/wp-content/uploads/2016/03/golden-4.jpg" />
      <div className="text">Grande</div>
     </div>
     <div className="image">
       <img src="https://kukay.es/wp-content/uploads/2020/05/Hope_de_Terras-Ato%CC%81mun-kukay-560x560.jpeg" />
      <div className="text">Gigante</div>
     </div>
    </div>
    </div>
    
    


  
    
	);
}

export default Home;