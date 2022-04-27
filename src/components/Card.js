import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { arrayProduct } = this.props;
    return (
      <div>
        {arrayProduct.map(({ id, thumbnail, price, title }) => (
          <section key={ id } data-testid="product">
            <img src={ thumbnail } alt={ title } />
            <p>{ title }</p>
            <span>{ price }</span>
          </section>
        )) }
      </div>
    );
  }
}

Card.propTypes = {
  arrayProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Card;
