import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CardItem.module.css';

class CardItem extends Component {
  constructor() {
    super();

    this.state = {
      quantity: '',
    };
  }

  componentDidMount = () => {
    this.countAmount();
  }

  onTrigger = async (event) => {
    const { addCart } = this.props;
    await addCart(event.target.parentElement.firstChild.innerText);
    this.countAmount();
  }

  onTrigger2 = async (event) => {
    const { removeCart } = this.props;
    const data = event.target.parentElement.firstChild.innerText;
    await removeCart(data);
    this.countAmount();
  }

  onTrigger3 = (event) => {
    const { removeTotal } = this.props;
    removeTotal(event.target.parentElement.firstChild.innerText);
    event.target.parentElement.remove();
  }

  countAmount = () => {
    const { itemProduct, id } = this.props;
    const data = itemProduct.filter((item) => item === id).length;
    this.setState({ quantity: data });
  }

  render() {
    const { title, id, thumbnail, price } = this.props;
    const { quantity } = this.state;

    return (
      <div className={ styles.container }>
        <span>{id}</span>
        <button type="button" onClick={ this.onTrigger3 }>x</button>
        <img src={ thumbnail } alt={ title } />
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <button
          type="button"
          data-testid=" product-decrease-quantity"
          onClick={ this.onTrigger2 }
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          data-testid=" product-increase-quantity"
          onClick={ this.onTrigger }
        >
          +
        </button>
        <p>{ price * quantity}</p>
      </div>
    );
  }
}

CardItem.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
  removeTotal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default CardItem;
