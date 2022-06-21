import React, { useEffect } from 'react';
import CardOrders from '../templates/cardOrders';
import CardHeader from '../templates/cardHeader';

export default function OrdersPage() {
  const userData = JSON.parse(localStorage.getItem('user'));
  const { role } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (role !== 'customer') {
      localStorage.removeItem('user');
    }
  }, [role]);

  return (
    <>
      <CardHeader
        userName={ userData.name }
      />
      <CardOrders />
    </>
  );
}
