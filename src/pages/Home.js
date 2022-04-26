import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../img/Cart.svg';
import { getCategories } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      arrayCategoria: [],
    };
  }

  componentDidMount = () => {
    this.getApiCategoria();
  }

  getApiCategoria = async () => {
    const data = await getCategories();
    console.log(data);
    this.setState({ arrayCategoria: data });
  }

  render() {
    const { arrayCategoria } = this.state;
    const { name } = this.props;
    return (
      <main>

        <div>
          <label htmlFor="input-searc">
            <input type="text" />
          </label>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src={ Icon } alt="icon" />
          </Link>
          <p data-testid="home-initial-message">
            {name}
          </p>
        </div>
        <aside>
          {arrayCategoria.map((item) => (
            <label
              htmlFor="input-radio"
              key={ item.id }
              data-testid="category"
            >
              <input type="radio" />
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
