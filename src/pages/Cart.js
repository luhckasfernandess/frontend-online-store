import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardItem from '../components/CardItem';
import styles from './Cart.module.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      arrayProduct: [],
    };
  }

  componentDidMount = () => {
    // this.getSavedStorage();
    this.removeDuplicate();
  }

  // getSavedStorage = () => {
  //   const x = localStorage.getItem('itemProduct');
  //   const data = JSON.parse(x);
  //   if (data) {
  //     this.setState({
  //       itemProduct2: data,
  //     });
  //   }
  // }

  // saveLocalStorage = () => {
  //   const { cartProducts } = this.state;
  //   const json = JSON.stringify(cartProducts);
  //   localStorage.setItem('cartProducts', json);
  // }

  removeDuplicate = () => {
    const { itemProduct } = this.props;
    const data = itemProduct
      .filter((v, i, a) => a.findIndex((v2) => (v2.id === v.id)) === i);
    this.setState({ arrayProduct: data });
    // this.saveLocalStorage();
  }

  render() {
    const { arrayProduct } = this.state;
    const { addCart, removeCart, removeTotal, itemProduct } = this.props;
    const frase = (
      <span
        data-testid="shopping-cart-empty-message"
        className={ styles.message }
      >
        Seu carrinho está vazio...
      </span>
    );
    const botao = (
      <button type="button">Finalizar Compra</button>
    );

    return (
      <div className={ styles.container }>
        {arrayProduct.length === 0 ? frase : !frase }
        <div>
          {arrayProduct.map((element, index) => (
            <CardItem
              teste={ element }
              addCart={ addCart }
              removeCart={ removeCart }
              removeTotal={ removeTotal }
              itemProduct={ itemProduct }
              key={ index }
            />
          ))}
        </div>
        <div className={ styles.finishCart }>
          {arrayProduct.length === 0 ? !botao : botao }
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
  removeTotal: PropTypes.func.isRequired,
};

export default Cart;
