/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/button';

import './styleTemplates';
import '../components/styleComponents';

export default function CardHeader({ userName }) {
  const navigate = useNavigate();

  const { role } = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="header-nav">
        {
          role === 'customer' && <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
            className="header-nav__items header-nav__link  header-nav__link--products"
          >
            Produtos
          </Link>
        }

        <Link
          to={ `/${role}/orders` }
          data-testid="customer_products__element-navbar-link-orders"
          className="header-nav__items header-nav__link header-nav__link--orders"
        >
          Pedidos
        </Link>
        {/* {showProduts && } */}
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          className="header-nav__items header-nav__name"
        >
          {userName}
        </p>
        <Button
          dataTestId="customer_products__element-navbar-link-logout"
          type="button"
          name="sair"
          className="button header-nav__items header-nav__buton"
          handleClick={ () => logout() }
        />
      </nav>
      <h2 className="hedader-title">Delivery App</h2>
      <Menu>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
          className="item-hamburguer item-hamburguer__name"
        >
          {userName}
        </p>
        {
          role === 'customer' && <Link
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
            className="header-nav__link item-hamburguer"
          >
            Produtos
          </Link>
        }

        <Link
          to={ `/${role}/orders` }
          data-testid="customer_products__element-navbar-link-orders"
          className="header-nav__link item-hamburguer "
        >
          Pedidos
        </Link>

        <Button
          dataTestId="customer_products__element-navbar-link-logout"
          type="button"
          name="Sair"
          className="button item-hamburguer__button"
          handleClick={ () => logout() }
        />
      </Menu>
    </header>
  );
}

CardHeader.propTypes = {
  userName: PropTypes.string.isRequired,
};
