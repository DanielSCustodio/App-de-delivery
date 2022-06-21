import React from 'react';
import CardAddress from '../templates/cardAddress';
import CardCheckout from '../templates/cardCheckout';
import CardHeader from '../templates/cardHeader';

import './stylePages';

export default function Checkout() {
  const userData = JSON.parse(localStorage.getItem('user'));
  return (
    <main>
      <CardHeader
        userName={ userData.name }
      />
      <section className="container-page-checkout">
        <h1 className="container-page-checkout__title">Finalizar Pedido</h1>
        <CardCheckout />
        <CardAddress />
      </section>
    </main>

  );
}
