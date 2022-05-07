import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../img/Cart.svg';
import styles from './styles/Header.module.css';

class Header extends Component {
  render() {
    const { itemProduct } = this.props;
    return (
      <header className={ styles.header }>
        <div className={ styles.container }>
          <Link to="/">
            <h1 className={ styles.logo }>
              <span>O</span>
              nline Store
            </h1>
          </Link>
          <Link to="/cart" data-testid="shopping-cart-button">
            <div className={ styles.cart }>
              <img src={ Icon } alt="icon" />
            </div>
            <div className={ styles.quantity }>
              <span data-testid="shopping-cart-size">{ itemProduct.length }</span>
            </div>
          </Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
