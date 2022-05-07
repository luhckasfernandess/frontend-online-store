import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardItem from '../components/CardItem';
import styles from './styles/Cart.module.css';

class Cart extends Component {
  finishButtonCart = () => {
    const { history } = this.props;
    history.push('/checkout');
  }

  render() {
    const { addCart, removeCart, removeTotal, itemProduct, arrayProduct } = this.props;
    const frase = (
      <div className={ styles.message }>
        <span
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio...
        </span>
      </div>
    );

    return (
      <>
        {arrayProduct.length === 0 || itemProduct.length === 0
          ? frase : !frase }
        <div className={ styles.container }>
          <div className={ styles.productCart }>
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
          <footer className={ styles.finishCart }>
            <h2>
              Total R$:
              <span>
                {
                  itemProduct.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)
                }
              </span>
            </h2>
            <button
              type="button"
              onClick={ this.finishButtonCart }
              data-testid="checkout-products"
              disabled={ arrayProduct.length === 0 || itemProduct.length === 0 }
            >
              Finalizar Compra
            </button>
          </footer>
        </div>
      </>
    );
  }
}

Cart.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  arrayProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
  removeTotal: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Cart;
