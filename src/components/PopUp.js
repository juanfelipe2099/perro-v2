// components/Popup.js

import React from 'react';

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
      <button className="close-button" onClick={onClose}>
          X {/* Botón para cerrar el PopUp */}
        </button>
        <img
          src="https://www.simonaspetspeople.com/wp-content/uploads/2022/04/Buzo-Pola-001-Simonas-Pets-People-1-600x600.jpg" // Reemplaza la URL con la imagen que deseas mostrar
          alt="Imagen Popup"
          className="popup-image"
        />
        <p>{message}</p>
        <div className="buttons">
          <a
            href="https://www.simonaspetspeople.com/" // Reemplaza la URL con la dirección que desees
            target="_blank"
            rel="noopener noreferrer"
            className="popup-link-button"
          >
           Volver a Simonas</a>
        </div>
      </div>
    </div>
  );
};

export default Popup;

