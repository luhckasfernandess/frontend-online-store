import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../img/Cart.svg';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import './Home.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      arrayCategoria: [],
      arrayProduct: [],
      product: '',
      categoria: '',
      fraseIncial: true,
    };
  }

  componentDidMount = () => {
    this.getApiCategoria();
  }

  handlerChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handlerClick = async () => {
    const { product, categoria } = this.state;
    console.log(categoria);
    this.setState({ fraseIncial: true }, async () => {
      const data = await getProductsFromCategoryAndQuery(categoria, product);
      this.setState({ fraseIncial: false, arrayProduct: data.results });
    });
  }

  getApiCategoria = async () => {
    const data = await getCategories();
    this.setState({ arrayCategoria: data });
  }

  render() {
    const { arrayCategoria, fraseIncial, arrayProduct, product } = this.state;
    const { name } = this.props;
    const frase = <span data-testid="home-initial-message">{name}</span>;
    return (
      <main className="main">
        <form>
          <div>
            <label htmlFor="input-search">
              <input
                type="text"
                onChange={ this.handlerChange }
                name="product"
                value={ product }
                data-testid="query-input"
              />
            </label>
            <label htmlFor="input-button">
              <button
                type="button"
                data-testid="query-button"
                onClick={ this.handlerClick }
                value={ product }
                id="input-button"
              >
                Search
              </button>
            </label>
            <Link to="/cart" data-testid="shopping-cart-button">
              <img src={ Icon } alt="icon" />
            </Link>
          </div>
          {fraseIncial ? frase : <Card arrayProduct={ arrayProduct } /> }
        </form>
        <aside>
          {arrayCategoria.map((item) => (
            <label
              htmlFor="input-radio"
              key={ item.id }
              data-testid="category"
            >
              <input
                type="checkbox"
                onChange={ this.handlerClick }
                value={ item.id }
                name="categoria"
                data-testid=""
              />
              <span>{item.name}</span>
            </label>
          ))}
        </aside>
      </main>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
