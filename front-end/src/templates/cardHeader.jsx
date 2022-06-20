import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../components/button';

import './styleTemplates';
import '../components/styleComponents';

export default function CardHeader({ userName }) {
  // const [showProduts, setShowProduts] = useState(true);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <Link
          to="/customer/products"
          data-testid="customer_products__element-navbar-link-products"
          className="header-nav__items header-nav__link  header-nav__link--products"
        >
          Produtos
        </Link>
        <Link
          to="/customer/orders"
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
    </header>
  );
}

CardHeader.propTypes = {
  userName: PropTypes.string.isRequired,
};
