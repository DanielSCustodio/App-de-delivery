import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CardHeader from '../templates/cardHeader';
import { getData } from '../helpers/api';
import CardProduct from '../templates/cardProduct';
import PriceSum from '../components/priceSum';
import Button from '../components/button';
import ContextGeneral from '../context/contextGeneral';

import './stylePages';
import cartShop from './stylePages/shopping-cart.png';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { total } = useContext(ContextGeneral);
  const userData = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate();

  useEffect(() => {
    getData('/customer/products', userData.token)
      .then(({ data }) => setProducts(data));
    if (userData.role !== 'customer') {
      localStorage.removeItem('user');
    }
  }, [userData.role, userData.token]);

  return (
    <main className="container-page-products">
      <CardHeader
        userName={ userData.name }
      />

      <section className="product-card-container__card">
        {products && products.map(({ name, urlImage, price, id }) => (
          <CardProduct
            name={ name }
            imageURL={ urlImage }
            price={ +price }
            id={ id }
            key={ id }
          />
        ))}
      </section>
      <div className="container-page-products__total-price">
        <img src={ cartShop } alt="Carrinho de compra" />
        <Button
          name="Ver Carrinho:"
          handleClick={ () => navigate('/customer/checkout') }
          className="total-price__button"
          dataTestId="customer_products__button-cart"
          type="button"
          price={
            <PriceSum
              dataTestId="customer_products__checkout-bottom-value"
            />
          }
          disabled={ total <= 0 }
        />
      </div>
    </main>
  );
}
