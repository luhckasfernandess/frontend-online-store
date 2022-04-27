import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  onTrigger = (event) => {
    const { addCart } = this.props;
    addCart(event.target.parentElement.firstChild.innerText);
    event.preventDefault();
  }

  render() {
    const { arrayProduct } = this.props;
    return (
      <div>
        {arrayProduct.map((item) => (
          <section key={ item.id } data-testid="product">
            <span>{item.id}</span>
            <Link to={ `/CardDetails/${item.id}` } data-testid="product-detail-link">
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
        )) }
      </div>
    );
  }
}

Card.propTypes = {
  arrayProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCart: PropTypes.func.isRequired,
};
export default Card;
