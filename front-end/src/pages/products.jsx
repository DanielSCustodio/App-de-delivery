import React, { useState, useEffect } from 'react';
import CardHeader from '../templates/cardHeader';
import { getData } from '../helpers/api';
import CardProduct from '../templates/cardProduct';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    getData('/customer/products', userData.token)
      .then(({ data }) => setProducts(data));
  }, [userData.token]);

  return (
    <main>
      <CardHeader
        userName={ userData.name }
      />

      <section>
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
    </main>
  );
}
