import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from '../components/select';
import TextInput from '../components/textInput';
import Button from '../components/button';
import { getData, postRequestToken } from '../helpers/api';
import ContextGeneral from '../context/contextGeneral';

export default function CardAddress() {
  const [sellers, setSellers] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
  const [seller, setSeller] = useState('Selecione');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState(0);
  const { total, cart } = useContext(ContextGeneral);

  const navigate = useNavigate();

  const getId = () => sellers.map(({ name, id }) => name === seller && id)[0];

  useEffect(() => {
    getData('/seller', userData.token)
      .then(({ data }) => setSellers(data));
  }, [userData.token]);

  const requestPost = async () => {
    const body = {
      userId: userData.id,
      sellerId: getId(),
      totalPrice: total,
      deliveryAddress,
      deliveryNumber,
      cart: cart.map((c) => ({ id: c.id, quantity: c.quantity })),
    };
    console.log(body);
    const test = await postRequestToken('/sale', body, userData.token);
    console.log(test);

    navigate(`/customer/orders/${test.data.id}`);
  };
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
