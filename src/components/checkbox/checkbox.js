
import style from '../../style.scss';
import Photo from '../../img/profil.svg';
import React, { useState, useEffect } from 'react';  // Ajoutez cette ligne
import ServiceComponent from '../service';  // Assurez-vous d'ajuster le chemin selon

  const CheckboxComponents = ({ isOpen }) => {  // Ajoutez isOpen comme une prop
    const [localIsOpen, setLocalIsOpen] = useState(false);
  
    useEffect(() => {
      const checkbox_containerElement = document.querySelector('.checkbox-container');
      const menuButton = document.querySelector('.hamburger-menu');

      const handleClick = () => {
          checkbox_containerElement.classList.toggle('open', isOpen);
      };

      menuButton.addEventListener('click', handleClick);

      return () => {
          menuButton.removeEventListener('click', handleClick);
      };
  }, [isOpen]);

  return (
    <div className={`checkbox-container ${isOpen ? 'open' : ''}`}>

      <ul>
        <li><img src={Photo} alt="Aaron James" /><p>Aaron James</p><input type="checkbox" /></li>
        <li><img src={Photo} alt="Amanda Wallace" /><p>Amanda Wallace</p><input type="checkbox" /></li>
        <li><img src={Photo} alt="Angela Danger" /><p>Angela Danger</p><input type="checkbox" /></li>
        <li><img src={Photo} alt="Abella white" /><p>Abella white</p><input type="checkbox" /></li>
        <li><img src={Photo} alt="Darlene Robertsone" /><p>Darlene Robertsone</p><input type="checkbox" /></li>
        <li><img src={Photo} alt="Fred Davis" /><p>Fred Davis</p><input type="checkbox" /></li>
        <li><img src={Photo} alt="Aaron Smith" /><p>Aaron Smith</p><input type="checkbox" /></li>
        <li><img src={Photo} alt="Aaron Smith" /><p>Aaron Smith</p><input type="checkbox" /></li>
      </ul>

      <ServiceComponent /> {/* Inclure le composant ServiceComponent ici */}
    </div>
  );
}

export default CheckboxComponents;
