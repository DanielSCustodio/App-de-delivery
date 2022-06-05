import React, { useState, useEffect } from 'react';
import Select from '../components/select';
import { getData } from '../helpers/api';

export default function CardAddress() {
  const [sellers, setSellers] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const [seller, setSeller] = useState('');

  useEffect(() => {
    getData('/seller', userData.token)
      .then(({ data }) => setSellers(data));
  }, [userData.token]);

  return (
    <section>
      <Select
        name="select_sellers"
        value={ seller || sellers[0].name }
        options={ sellers.map(({ name }) => name) }
        dataTestId="customer_checkout__select-seller"
        onChange={ ({ target }) => setSeller(target.value) }
        className="select_sellers"
        labelText="Vendedores"
        defaultValue="Selecione"
      />
    </section>
  );
}
