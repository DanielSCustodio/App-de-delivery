import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetail from '../components/orderDetail';
import { getData } from '../helpers/api';

export default function CardSaleDetails() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const userData = JSON.parse(localStorage.getItem('user'));
  const a = 'customer_order_details__element-order-details-label-delivery-status';

  useEffect(() => {
    async function getSale() {
      const { data } = await getData(`/sale/${id}`, userData.token);
      console.log('SALE', data);
      setOrder(data);
    }
    getSale();
    console.log('entrou no useEffect');
  }, [id, userData.token]);

  // useEffect(() => console.log('ola'), []);

  if (order) {
    return (
      <OrderDetail
        id={ order.id }
        seller={ order.seller.name }
        date={ order.saleDate.split('T')[0].split('-').reverse().join('/') }
        status={ order.status }
        products={ order.products }
        totalPrice={ order.totalPrice }
        dataTestIdStatus={ a }
      />
    );
  }

  return <h1>Loading</h1>;
}
