import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <label htmlFor="input-searc">
          <input type="text" />
        </label>
        <Link to="/cart" data-testid="shopping-cart-button">
          <Icon icon="ant-design:shopping-cart-outlined" />
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
