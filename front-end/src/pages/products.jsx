import React from 'react';
import CardHeader from '../templates/cardHeader';

export default function ProductsPage() {
  const userData = JSON.parse(localStorage.getItem('user'));

  return (
    <main>
      <CardHeader
        userName={ userData.name }
      />
    </main>
  );
}
