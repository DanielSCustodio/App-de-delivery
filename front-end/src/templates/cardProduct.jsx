import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/button';
import TextInput from '../components/textInput';

export default function CardProduct({ name, imageURL, price, id }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <section>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
        className="product-card__price"
      >
        { `R$ ${price.toFixed(2)}`.replace('.', ',') }
      </p>

      <img
        alt={ `Imagem do produto ${name}.` }
        src={ imageURL }
        className="product-card__image"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        with="50px"
        height="150px"
      />

      <p
        className="product-card__name"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </p>

      <Button
        name="-"
        handleClick={ () => setQuantity(quantity - 1) }
        className=" button"
        dataTestId={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        disabled={ quantity <= 0 }
      />
      <TextInput
        className=" text-input"
        name="quantity"
        onChange={ ({ target }) => setQuantity(target.value) }
        type="number"
        value={ quantity }
        dataTestId={ `customer_products__input-card-quantity-${id}` }
      />
      <Button
        name="+"
        handleClick={ () => setQuantity(quantity + 1) }
        className=" button"
        dataTestId={ `customer_products__button-card-add-item-${id}` }
        type="button"
      />

    </section>
  );
}

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
