import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { arrayProduct } = this.props;
    return (
      <div>
        {arrayProduct.map((item) => (
          <section key={ item.id } data-testid="product">
            <Link to={ `/CardDetails/${item.id}` } data-testid="product-detail-link">
              <img src={ item.thumbnail } alt={ item.title } />
            </Link>
            <p>{ item.title }</p>
            <span>{ item.price }</span>
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
