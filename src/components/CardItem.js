import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './CardItem.module.css';

class CardItem extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 0,
    };
  }

  componentDidMount = () => {
    this.countAmountInitial();
  }

  // onTriggerAdd = () => {
  //   const { addCart, teste } = this.props;
  //   addCart(teste);
  // }

  // onTriggerRemove = () => {
  //   const { removeCart, teste } = this.props;
  //   removeCart(teste);
  // }

  // onTriggerRemoveTotal = () => {
  //   const { removeTotal, teste } = this.props;
  //   removeTotal(teste);
  // }

  onTriggerFunction = (teste, callback) => {
    callback(teste);
  }

  onTrigger = () => {
    const { addCart, teste } = this.props;
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
    this.onTriggerFunction(teste, addCart);
  }

  onTrigger2 = () => {
    const { removeCart, teste } = this.props;
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
      this.onTriggerFunction(teste, removeCart);
    }
  }

  onTrigger3 = (event) => {
    const { removeTotal, teste } = this.props;
    this.setState({
      quantity: 0,
    });
    event.target.parentElement.remove();
    this.onTriggerFunction(teste, removeTotal);
  }

  countAmountInitial = () => {
    const { itemProduct, teste } = this.props;
    const data = itemProduct.filter((item) => item.id === teste.id).length;
    this.setState({ quantity: data });
  }

  render() {
    const { teste: { title, thumbnail, price } } = this.props;
    const { quantity } = this.state;

    return (
      <div className={ styles.container }>
        <button
          className={ styles.button }
          type="button"
          onClick={ this.onTrigger3 }
        >
          x
        </button>
        <img src={ thumbnail } alt={ title } />
        <p
          className={ styles.title }
          data-testid="shopping-cart-product-name"
        >
          { title }
        </p>
        <button
          type="button"
          data-testid=" product-decrease-quantity"
          onClick={ this.onTrigger2 }
          className={ styles.button }
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
          className={ styles.quantity }
        >
          {quantity}
        </span>
        <button
          type="button"
          data-testid=" product-increase-quantity"
          onClick={ this.onTrigger }
          className={ styles.button }
        >
          +
        </button>
        <p>{ `R$ ${price * quantity}`}</p>
      </div>
    );
  }
}

CardItem.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  teste: PropTypes.objectOf(PropTypes.any).isRequired,
  addCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
  removeTotal: PropTypes.func.isRequired,
};

export default CardItem;
