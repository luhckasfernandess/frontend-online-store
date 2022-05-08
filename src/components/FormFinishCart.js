import React, { Component } from 'react';
import Estados from '../services/Estate';
import styles from './styles/FormFinishCart.module.css';

class FormFinishCart extends Component {
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

    return (
      <form className={ styles.form }>
        <h1>Informações do Comprador</h1>
        <div className={ styles.informationPessoal }>
          <label htmlFor="input-name">
            <input
              type="text"
              id="input-name"
              name="fullName"
              value={ fullName }
              data-testid="checkout-fullname"
              onChange={ this.handlerChange }
              placeholder="Nome Completo"
            />
          </label>
          <label htmlFor="input-cpf">
            <input
              type="text"
              name="cpf"
              value={ cpf }
              data-testid="checkout-cpf"
              onChange={ this.handlerChange }
              placeholder="CPF"
            />
          </label>
        </div>
        <div>
          <label htmlFor="input-email">
            <input
              type="email"
              name="email"
              value={ email }
              data-testid="checkout-email"
              onChange={ this.handlerChange }
              placeholder="Email"
            />
          </label>
          <label htmlFor="input-phone">
            <input
              type="text"
              name="phone"
              value={ phone }
              data-testid="checkout-phone"
              onChange={ this.handlerChange }
              placeholder="Telefone"
            />
          </label>
        </div>
        <div>
          <label htmlFor="input-cep">
            <input
              type="text"
              name="cep"
              value={ cep }
              data-testid="checkout-cep"
              onChange={ this.handlerChange }
              placeholder="CEP"
            />
          </label>
          <label htmlFor="input-city">
            <input
              type="text"
              name="city"
              value={ city }
              data-testid="checkout-city"
              onChange={ this.handlerChange }
              placeholder="Cidade"
            />
          </label>
          <label htmlFor="input-city">
            <select name="state" value={ state } onChange={ this.handlerChange }>
              <option value="" selected>Selecione um Estado</option>
              { Estados.map((item, index) => (
                <option value={ item.nome } key={ index }>{item.nome}</option>
              )) }
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="input-address">
            <input
              type="text"
              name="address"
              value={ address }
              data-testid="checkout-address"
              onChange={ this.handlerChange }
              placeholder="Endereço"
            />
          </label>
          <label htmlFor="input-number">
            <input
              type="text"
              name="number"
              value={ number }
              data-testid="checkout-number"
              onChange={ this.handlerChange }
              placeholder="Número"
            />
          </label>
        </div>
        <div>
          <label htmlFor="input-complement">
            <input
              type="text"
              name="complement"
              value={ complement }
              data-testid="checkout-complement"
              onChange={ this.handlerChange }
              placeholder="Complemento"
            />
          </label>
        </div>
      </form>
    );
  }
}

export default FormFinishCart;
