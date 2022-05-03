import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

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
      <div data-testid="product" className={ styles.card }>
        <Link
          to={ `/CardDetails/${item.id}` }
          data-testid="product-detail-link"
        >
          <img src={ item.thumbnail } alt={ item.title } />
        </Link>
        <p>{ item.title }</p>
        <span>{ `R$ ${item.price}` }</span>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.onTrigger }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  addCart: PropTypes.func.isRequired,
};
export default Card;
