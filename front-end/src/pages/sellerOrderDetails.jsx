import React from 'react';
import Footer from '../components/footer';
import CardHeader from '../templates/cardHeader';
import CardSellerOrdersDetails from '../templates/cardSellerOrdersDetails';

export default function SellerOrderDetailsPage() {
  return (
    <>
      <CardHeader
        userName={ userData.name }
      />
      <CardSellerOrdersDetails />
      <Footer />
    </>
  );
}
