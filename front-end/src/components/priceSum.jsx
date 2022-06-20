import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import ContextGeneral from '../context/contextGeneral';

export default function PriceSum({ dataTestId }) {
  const { cart, total, setTotal } = useContext(ContextGeneral);

  useEffect(() => {
    const SumPrice = () => cart.reduce((acc, { price, quantity }) => {
      acc += (price * quantity);
      return acc;
    }, 0);
    setTotal(SumPrice());
  }, [cart, setTotal]);

  if (total <= 0) return null;
  return (
    <span data-testid={ dataTestId }>
      { ` R$ ${total.toFixed(2)}`.replace('.', ',') }
    </span>
  );
}

PriceSum.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};
