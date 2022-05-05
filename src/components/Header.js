import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '../img/Cart.svg';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    const { itemProduct } = this.props;
    return (
      <header className={ styles.header }>
        <Link to="/">
          <h1 className={ styles.logo }>
            <span>F</span>
            ront Online Store
          </h1>
        </Link>
        <Link to="/cart" data-testid="shopping-cart-button">
          <div>
            <img src={ Icon } alt="icon" className={ styles.cart } />
            <h1 data-testid="shopping-cart-size">{ itemProduct.length }</h1>
          </div>
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
