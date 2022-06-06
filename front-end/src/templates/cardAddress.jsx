import React, { useState, useEffect } from 'react';
import Select from '../components/select';
import TextInput from '../components/textInput';
import Button from '../components/button';

export default function CardAddress() {
  const [sellers, setSellers] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const [seller, setSeller] = useState('Selecione');

  useEffect(() => {
    getData('/seller', userData.token)
      .then(({ data }) => setSellers(data));
  }, [userData.token]);
  // || sellers[0].name
  return (
    <section>
      <Select
        name="select_sellers"
        value={ seller }
        options={ sellers.map(({ name }) => name) }
        dataTestId="customer_checkout__select-seller"
        onChange={ ({ target }) => setSeller(target.value) }
        className="select_sellers"
        labelText="Vendedores"
        // defaultValue={ seller }
      />
      <TextInput
        name="Address"
        dataTestId="customer_checkout__input-address"
        onChange={ ({ target }) => setDeliveryAddress(target.value) }
        value={ deliveryAddress }
        type="text"
        className=""
      />
      <TextInput
        name="Number"
        dataTestId="customer_checkout__input-addressNumber"
        onChange={ ({ target }) => setDeliveryNumber(target.value) }
        value={ deliveryNumber }
        type="number"
        className=""
      />
      <Button
        dataTestId="customer_checkout__button-submit-order"
        handleClick={ requestPost }
        name="Finalizar_Pedido"
        disabled={ !!(deliveryAddress === '' || deliveryNumber < 0) }
        type="button"
        className=""
      />
    </section>
  );
}
