import './App.css';
import CheckboxComponents from './components/checkbox/checkbox';
import Bouton from './components/bouton';
import TipsComponents from './components/pourboire';
import ServiceComponents from './components/service';
import RecapComponents from './components/checkbox/recap';
import arrow from '../src/img/arrow.svg';
import Header from './components/header';
import ServiceComponent from './components/service';  // Assurez-vous d'ajuster le chemin selon
import React, { useState, useEffect } from 'react';  // Ajoutez cette ligne

const App = ({ isOpen }) => {

  const [localIsOpen, setLocalIsOpen] = useState(false);
  
    useEffect(() => {
      const mainElement = document.querySelector('.main');
      const menuButton = document.querySelector('.hamburger-menu');

      const handleClick = () => {
          mainElement.classList.toggle('open', isOpen);
      };

      menuButton.addEventListener('click', handleClick);

      return () => {
          menuButton.removeEventListener('click', handleClick);
      };
  }, [isOpen]);

  return (
    <div className="App">
      <Header />
      <main className='main'>
        
      <CheckboxComponents></CheckboxComponents>
      {/* Je n'ai pas réussi a mettre les liens entre les pages mon router-dom a pas marché il faut décommenter les components */}
      {/* <RecapComponents></RecapComponents> */}
      {/* <TipsComponents></TipsComponents> */}
      {/* <ServiceComponents></ServiceComponents> */}
      <Bouton text="Suivant" icon={arrow} />
      {/* <ServiceComponent /> Inclure le composant ServiceComponent ici */}
      </main>
    </div>
  );
}

export default App;
