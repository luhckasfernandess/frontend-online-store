import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../img/Cart.svg';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={ styles.header }>
        <Link to="/">
          <h1 className={ styles.logo }>
            <span>F</span>
            ront Online Store
          </h1>
        </Link>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ Icon } alt="icon" className={ styles.cart } />
        </Link>
      </header>
    );
  }
}

export default Header;
