import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { itemProduct, arrayProduct } = this.props;
    console.log(itemProduct);
    console.log(arrayProduct);
    return (
      <h1>ola</h1>
    );
  }
}

Card.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  arrayProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Card;
