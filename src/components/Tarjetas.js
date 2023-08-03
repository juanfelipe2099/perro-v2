import React, { useState } from 'react';

const CardSection = () => {
  const [inputValues, setInputValues] = useState({
    card1: '',
    card2: '',
    card3: '',
  });

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClick = () => {
    // Aquí puedes realizar la lógica para guardar las variables con nombres únicos.
    // Puedes acceder a las variables ingresadas por el usuario utilizando inputValues.card1, inputValues.card2, inputValues.card3.
    // Por ejemplo, puedes enviar los valores a una API, almacenarlos en el estado global, o realizar cualquier acción que desees.
    console.log('Valores guardados:', inputValues);
  };

  return (
    <div className="card-section">
      <div className="card">
        <h2>Contorno del cuello (cm)</h2>
        <input
          type="number"
          name="card1"
          value={inputValues.card1}
          onChange={handleInputChange}
        />
      </div>
      <div className="card">
        <h2>Contorno del pecho (cm)</h2>
        <input
          type="number"
          name="card2"
          value={inputValues.card2}
          onChange={handleInputChange}
        />
      </div>
      <div className="card">
        <h2>Largo del Lomo (cm)</h2>
        <input
          type="number"
          name="card3"
          value={inputValues.card3}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleSaveClick}>Enviar</button>
    </div>
  );
}

export default CardSection;

