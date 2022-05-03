import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/CardFinishingCart';
import Estados from '../services/Estate';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      number: '',
      city: '',
      state: '',
    };
  }

  handlerChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const {
      fullName,
      email,
      cpf,
      phone,
      cep,
      address,
      complement,
      number,
      city,
      state,
    } = this.state;

    const { itemProduct, arrayProduct } = this.props;
    return (
      <section>
        <Card arrayProduct={ arrayProduct } itemProduct={ itemProduct } />

        <form>
          <div className="informationPessoal">
            <label htmlFor="input-name">
              <input
                type="text"
                id="input-name"
                name="fullName"
                value={ fullName }
                data-testid="checkout-fullname"
                onChange={ this.handlerChange }
              />
            </label>
            <label htmlFor="input-email">
              <input
                type="email"
                name="email"
                value={ email }
                data-testid="checkout-email"
                onChange={ this.handlerChange }
              />
            </label>
            <label htmlFor="input-cpf">
              <input
                type="text"
                name="cpf"
                value={ cpf }
                data-testid="checkout-cpf"
                onChange={ this.handlerChange }
              />
            </label>
            <label htmlFor="input-phone">
              <input
                type="text"
                name="phone"
                value={ phone }
                data-testid="checkout-phone"
                onChange={ this.handlerChange }
              />
            </label>
          </div>
          <div className="endereco">
            <label htmlFor="input-cep">
              <input
                type="text"
                name="cep"
                value={ cep }
                data-testid="checkout-cep"
                onChange={ this.handlerChange }
              />
            </label>
            <label htmlFor="input-address">
              <input
                type="text"
                name="address"
                value={ address }
                data-testid="checkout-address"
                onChange={ this.handlerChange }
              />
            </label>
            <label htmlFor="input-complement">
              <input
                type="text"
                name="complement"
                value={ complement }
                data-testid="checkout-complement"
                onChange={ this.handlerChange }
              />
            </label>
            <label htmlFor="input-number">
              <input
                type="text"
                name="number"
                value={ number }
                data-testid="checkout-number"
                onChange={ this.handlerChange }
              />
            </label>
            <label htmlFor="input-city">
              <input
                type="text"
                name="city"
                value={ city }
                data-testid="checkout-city"
                onChange={ this.handlerChange }
              />
            </label>
            <label htmlFor="input-city">
              <select name="state" value={ state } onChange={ this.handlerChange }>
                { Estados.map((item, index) => (
                  <option value={ item.nome } key={ index }>{item.name}</option>
                )) }
              </select>
            </label>
          </div>
        </form>
      </section>
    );
  }
}

Checkout.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  arrayProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Checkout;
