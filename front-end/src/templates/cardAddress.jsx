import React, { useState, useEffect } from 'react';
import Select from '../components/select';
import { getData } from '../helpers/api';

export default function CardAddress() {
  const [sellers, setSellers] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const [seller, setSeller] = useState('');

  useEffect(() => {
    getData('/seller', userData.token)
      .then(({ data }) => setSellers([data.name]));
  }, [userData.token]);

  console.log(sellers);
  return (
    <section>
      <Select
        name="select_sellers"
        value={ seller }
        options={ sellers }
        dataTestId="customer_checkout__select-seller"
        onChange={ ({ target }) => setSeller(target.value) }
        className="select_sellers"
        labelText="Vendedores"
        defaultValue="Selecione"
      />
    </section>
  );
}
