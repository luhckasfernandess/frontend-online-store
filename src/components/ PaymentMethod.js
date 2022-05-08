import React, { Component } from 'react';
import credito from '../assets/Credito.svg';
import styles from './styles/PaymentMethod.module.css';
import boleto from '../assets/Boleto.svg';
import pix from '../assets/Pix.svg';

class PaymentMethod extends Component {
  render() {
    return (
      <section className={ styles.section }>
        <h2>Método de Pagamentos</h2>
        <div className={ styles.paymentMethod }>
          <label htmlFor="input-boleto">
            <input type="radio" name="" id="input-boleto" />
            <img src={ boleto } alt="" />
          </label>
          <label htmlFor="input-credito">
            <input type="radio" name="" id="input-credito" />
            <img src={ credito } alt="" />
          </label>
          <label htmlFor="input-pix">
            <input type="radio" name="" id="input-pix" />
            <img src={ pix } alt="" />
          </label>
        </div>
      </section>
    );
  }
}

export default PaymentMethod;
