import React, { useState } from 'react';
import Popup from '../components/PopUp';

const CardSection = () => {
  const [inputValues, setInputValues] = useState({
    cuello: '',
    pecho: '',
    lomo: '',
  });

  const [tallaPerro, setTallaPerro] = useState('');

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleSaveClick = () => {
    const { cuello, pecho, lomo } = inputValues;
    if (
      cuello >= 20 && cuello <= 25 &&
      pecho >= 30 && pecho <= 38 &&
      lomo >= 20 && lomo <= 24
    ) {
      setTallaPerro('XS');
      setShowPopup(true);
    } else {
      setTallaPerro('No sabemos');
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Cerrar el PopUp cuando se haga clic en "Cerrar"
  };

  return (
    <div className="card-section">
      <div className="card">
        <h2>Contorno del cuello (cm)</h2>
        <input
          type="number"
          name="cuello"
          value={inputValues.cuello}
          onChange={handleInputChange}
        />
      </div>
      <div className="card">
        <h2>Contorno del pecho (cm)</h2>
        <input
          type="number"
          name="pecho"
          value={inputValues.pecho}
          onChange={handleInputChange}
        />
      </div>
      <div className="card">
        <h2>Largo del Lomo (cm)</h2>
        <input
          type="number"
          name="lomo"
          value={inputValues.lomo}
          onChange={handleInputChange}
        />
      </div>
      <button className="send-button" onClick={handleSaveClick}>Enviar</button>
      {showPopup && (
        <Popup
          message={`Talla del perro: ${tallaPerro}`}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default CardSection;

