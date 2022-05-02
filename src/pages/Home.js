import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import styles from './Home.module.css';
import Search from '../img/Search.svg';
import Categories from '../img/Categories.svg';

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

  componentDidMount = async () => {
    await this.getApiCategoria();
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

  handlerRadio = (event) => {
    this.handlerChange(event);
    setTimeout(() => {
      this.handlerClick();
    }, 1);
  }

  render() {
    const { arrayCategoria, fraseIncial, arrayProduct, product, loading } = this.state;
    const { name, addCart } = this.props;
    const frase = <span data-testid="home-initial-message">{name}</span>;
    const loadingElement = <span>Loading...</span>;
    return (
      <section className={ styles.main }>
        <aside className={ styles.aside }>
          <h2 className={ styles.title }>
            <img src={ Categories } alt="Categories" />
            Categories
          </h2>
          {arrayCategoria.map((item) => (
            <label
              htmlFor="input-radio"
              key={ item.id }
              data-testid="category"
            >
              <input
                type="radio"
                onChange={ this.handlerRadio }
                value={ item.id }
                name="categoria"
              />
              <span>{item.name}</span>
            </label>
          ))}
        </aside>

        <div className={ styles.form }>
          <div className={ styles.input }>
            <button
              type="button"
              data-testid="query-button"
              onClick={ this.handlerClick }
              value="Search"
            >
              <img src={ Search } alt="pesquisar" />
            </button>
            <input
              type="text"
              onChange={ this.handlerChange }
              name="product"
              value={ product }
              data-testid="query-input"
              placeholder="Search"
            />
          </div>
          { fraseIncial ? frase : !frase }
          { loading ? loadingElement : !loadingElement }
          <div className={ styles.cards }>
            { arrayProduct.map((item, index) => (
              <Card item={ item } addCart={ addCart } key={ index } />
            )) }
          </div>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  addCart: PropTypes.func.isRequired,
};

export default Home;
