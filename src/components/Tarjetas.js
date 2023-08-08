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
    } else if (
      cuello >= 26 && cuello <= 29 &&
      pecho >= 39 && pecho <= 44 &&
      lomo >= 25 && lomo <= 29
    ) {
      setTallaPerro('S');
    } else if (
      cuello >= 30 && cuello <= 33 &&
      pecho >= 45 && pecho <= 52 &&
      lomo >= 30 && lomo <= 34
    ) {
      setTallaPerro('M');
    } else if (
      cuello >= 34 && cuello <= 37 &&
      pecho >= 53 && pecho <= 58 &&
      lomo >= 35 && lomo <= 39
    ) {
      setTallaPerro('L');
    } else if (
      cuello >= 38 && cuello <= 42 &&
      pecho >= 59 && pecho <= 66 &&
      lomo >= 40 && lomo <= 44
    ) {
      setTallaPerro('XL');
    } else if (
      cuello >= 43 && cuello <= 49 &&
      pecho >= 67 && pecho <= 74 &&
      lomo >= 45 && lomo <= 54
    ) {
      setTallaPerro('2XL');
    } else if (
      cuello >= 50 && cuello <= 54 &&
      pecho >= 75 && pecho <= 82 &&
      lomo >= 55 && lomo <= 64
    ) {
      setTallaPerro('3XL');
    } else if (
      cuello >= 55 && cuello <= 59 &&
      pecho >= 83 && pecho <= 89 &&
      lomo >= 65 && lomo <= 69
    ) {
      setTallaPerro('4XL');
    } else if (cuello >= 60 && pecho >= 90 && lomo >= 70) {
      setTallaPerro('5XL');
    } else {
      setTallaPerro('No sabemos');
    }
    setShowPopup(true); // Mostramos el PopUp después de calcular la talla
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Cerrar el PopUp cuando se haga clic en "Cerrar"
  };

  return (
    <div className="card-section">
      <h1>Ahora ingresa los datos</h1> 
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
          message={`La talla de tu peludo es: ${tallaPerro}`}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}

export default CardSection;

