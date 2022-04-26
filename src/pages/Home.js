import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../img/Cart.svg';

class Home extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <label htmlFor="input-searc">
          <input type="text" />
        </label>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src={ Icon } alt="icon" />
        </Link>
        <p data-testid="home-initial-message">
          {name}
        </p>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
