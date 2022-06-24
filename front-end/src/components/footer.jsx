import React from 'react';
import logo from '../pages/stylePages/App-Delivery.png';

import './styleComponents';

export default function Footer() {
  return (
    <footer className="container-footer">
      <section className="container-footer__card-logo">
        <img className="footer__logo" src={ logo } alt="logo" />
        <p>Delivey App</p>
        <p>Projeto Final</p>
      </section>
      <section>
        <p className="container-footer__title">Desenvolvedores</p>
        <section className="container-footer__devs">
          <a href="https://www.linkedin.com/in/adriana-ms/">Adriana</a>
          <a href="https://www.linkedin.com/in/camilla-del-guerso/">Camilla</a>
          <a href="https://www.linkedin.com/in/danielscustodio/">Daniel</a>
          <a href="www.google.com" alt="gitHub">Emmanuel</a>
          <a href="https://www.linkedin.com/in/joaovictorpaduam/">João Victor</a>
        </section>
      </section>
    </footer>
  );
}
