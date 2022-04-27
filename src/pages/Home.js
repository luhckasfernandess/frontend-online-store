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
      loading: false,
    };
  }

  componentDidMount = () => {
    this.getApiCategoria();
    this.getApiProducts();
  }

  getApiCategoria = async () => {
    const data = await getCategories();
    this.setState({ arrayCategoria: data });
  }

  getApiProducts = async () => {
    const { product, categoria } = this.state;
    const data = await getProductsFromCategoryAndQuery(categoria, product);
    this.setState({ arrayProduct: data.results, loading: false });
  }

  handlerChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handlerClick = () => {
    this.setState({ fraseIncial: false, loading: true }, () => {
      this.getApiProducts();
    });
  }

  handlerRadio = async (event) => {
    await this.handlerChange(event);
    this.handlerClick();
  }

  render() {
    const { arrayCategoria, fraseIncial, arrayProduct, product, loading } = this.state;
    const { name, addCart } = this.props;
    const frase = <span data-testid="home-initial-message">{name}</span>;
    const loadingElement = <span>Loading...</span>;
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
              <input
                type="button"
                data-testid="query-button"
                onClick={ this.handlerClick }
                value="Search"
              />
            </label>
            <Link to="/cart" data-testid="shopping-cart-button">
              <img src={ Icon } alt="icon" />
            </Link>
          </div>
          { fraseIncial ? frase : !frase }
          { loading ? loadingElement : !loadingElement }
          <Card arrayProduct={ arrayProduct } addCart={ addCart } />
        </form>
        <aside>
          {arrayCategoria.map((item) => (
            <label
              htmlFor="input-radio"
              key={ item.id }
              data-testid="category"
            >
              <input
                type="radio"
                onClick={ this.handlerRadio }
                value={ item.id }
                name="categoria"
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
  addCart: PropTypes.func.isRequired,
};

export default Home;
