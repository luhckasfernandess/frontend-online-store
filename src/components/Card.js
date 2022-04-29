import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();
    this.onTrigger = this.onTrigger.bind(this);
  }

  onTrigger() {
    const { addCart, item } = this.props;
    addCart(item);
  }

  render() {
    const { item } = this.props;
    return (
      <section data-testid="product">
        <Link
          to={ `/CardDetails/${item.id}` }
          data-testid="product-detail-link"
        >
          <img src={ item.thumbnail } alt={ item.title } />
        </Link>
        <p>{ item.title }</p>
        <span>{ item.price }</span>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.onTrigger }
        >
          Adicionar ao Carrinho
        </button>
      </section>
    );
  }
}

Card.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  addCart: PropTypes.func.isRequired,
};
export default Card;
