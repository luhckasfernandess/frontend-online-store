import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './styles/CardItem.module.css';
import Bin from '../assets/bin.svg';

class CardItem extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 0,
    };
    this.myRef = createRef();
  }

  componentDidMount = () => {
    this.countAmountInitial();
  }

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

  onTrigger3 = () => {
    const { removeTotal, teste } = this.props;
    this.setState({
      quantity: 0,
    });
    const { current } = this.myRef;
    current.remove();
    this.onTriggerFunction(teste, removeTotal);
  }

  countAmountInitial = () => {
    const { itemProduct, teste } = this.props;
    const data = itemProduct.filter((item) => item.id === teste.id).length;
    this.setState({ quantity: data });
  }

  render() {
    const { teste, itemProduct } = this.props;
    const { quantity } = this.state;
    const priceQuantity = teste.price;
    const data = itemProduct.filter((item) => item.id === teste.id);
    return (
      <div className={ styles.container } ref={ this.myRef }>
        <div className={ styles.div1 }>
          <img src={ teste.thumbnail } alt={ teste.title } />
          <div>
            <button
              type="button"
              data-testid=" product-increase-quantity"
              onClick={ this.onTrigger }
              className={ styles.buttonAdd }
              disabled={ data.length >= teste.available_quantity }
            >
              +
            </button>
            <span
              data-testid="shopping-cart-product-quantity"
              className={ styles.quantity }
            >
              {quantity}
            </span>
            <button
              type="button"
              data-testid=" product-decrease-quantity"
              onClick={ this.onTrigger2 }
              className={ styles.buttonMin }
            >
              -
            </button>
          </div>
        </div>
        <div className={ styles.div2 }>
          <button
            className={ styles.button }
            type="button"
            onClick={ this.onTrigger3 }
          >
            <img src={ Bin } alt="remover" />
          </button>

          <span>{ `R$ ${parseFloat(priceQuantity.toFixed(2)) * quantity}`}</span>
          <p
            className={ styles.title }
            data-testid="shopping-cart-product-name"
          >
            { teste.title }
          </p>
        </div>
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
