import React, { useState } from 'react';
import Popup from '../components/PopUp';
import '../styles/IAGorras.scss';

const MedidaGorra = () => {
  const [headCircumference, setHeadCircumference] = useState('');
  const [tallaGorra, setTallaGorra] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    setHeadCircumference(e.target.value);
  };

  const handleCalculateClick = () => {
    const circumference = parseFloat(headCircumference);

    if (circumference < 12) {
      setTallaGorra('S');
      setShowPopup(true);
    } else if (circumference >= 12 && circumference <= 36) {
      setTallaGorra('M');
      setShowPopup(true);
    } else if (circumference > 36) {
      setTallaGorra('L');
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="medidagorra-container">
        <div className="image-container">
        <img
          src="https://www.simonaspetspeople.com/wp-content/uploads/2023/01/Logo-Simonas-Pets-People-Registred-Negro-PNG.png"
          alt="Imagen de una gorra"
          className="gorra-image"
        />
      </div>
      <h1 className="title-gorra">Calcula la talla de la gorra</h1>
      <div className="content-gorra">
        <img
          src="https://www.simonaspetspeople.com/wp-content/uploads/2021/07/Sitio-web-Simonas-2.jpg"
          alt="Imagen de una gorra"
          className="gorra-image"
        />
        <div className="card-gorra">
          <h2> Ingresa la edad de tu peludito (meses)</h2>
          <input
            type="number"
            value={headCircumference}
            onChange={handleInputChange}
          />
          <button className="calculate-button-gorra" onClick={handleCalculateClick}>
            Calcular
          </button>
        </div>
      </div>
      {showPopup && (
        <Popup
          message={`Talla de la gorra: ${tallaGorra}`}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default MedidaGorra;
