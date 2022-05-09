import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardFinishingCart from '../components/CardFinishingCart';
import styles from './styles/Checkout.module.css';
import FormFinishCart from '../components/FormFinishCart';
import PaymentMethod from '../components/ PaymentMethod';

class Checkout extends Component {
  render() {
    const { arrayProduct, itemProduct } = this.props;
    return (
      <section className={ styles.section }>
        <div className={ styles.container }>
          <h1>Revise seus Produtos</h1>
          <table className={ styles.cards }>
            <thead>
              <th>Produtos</th>
              <th>Valor</th>
              <th>Qtde</th>
            </thead>
            <tbody className={ styles.cards }>
              {arrayProduct.map((item, index) => (
                <CardFinishingCart
                  key={ index }
                  { ...item }
                  itemProduct={ itemProduct }
                />
              ))}
            </tbody>
          </table>
          <h2>
            Total R$:
            <span>
              {
                itemProduct.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)
              }
            </span>
          </h2>
          <FormFinishCart />
          <PaymentMethod />

          <button type="button">Finalizar Compra</button>
        </div>
      </section>
    );
  }
}

Checkout.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  arrayProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Checkout;
