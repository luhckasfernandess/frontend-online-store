import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import CardItem from '../components/CardItem';
import './Cart.css';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
      arrayProduct: [],
    };
  }

  componentDidMount = async () => {
    this.fetchProducts();
  }

  removeDuplicate = () => {
    const { itemProduct } = this.props;
    const data = itemProduct
      .filter((item, i, array) => array.indexOf(item) === i);
    this.setState({ arrayProduct: data });
  }

  fetchProducts = async () => {
    await this.removeDuplicate();
    const { arrayProduct } = this.state;
    arrayProduct.map(async (id) => {
      const x = await getProductDetails(id);
      this.setState(({ cartProducts }) => ({ // atualiza o itemProduct
        cartProducts: [...cartProducts, x], // soma com o childData
      }));
    });
  }

  render() {
    const { cartProducts } = this.state;
    const { addCart, removeCart, removeTotal, itemProduct } = this.props;
    const quantity = cartProducts.length;
    const frase = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );

    return (
      <div>
        {cartProducts.length === 0 ? frase : !frase }
        {cartProducts.map((element, index) => (
          <div key={ index }>
            <CardItem
              { ...element }
              addCart={ addCart }
              removeCart={ removeCart }
              removeTotal={ removeTotal }
              itemProduct={ itemProduct }
            />
          </div>
        ))}
        <p
          className="quantity"
          data-testid="shopping-cart-product-quantity"
        >
          {quantity}
        </p>
      </div>
    );
  }
}

Cart.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.string).isRequired,
  addCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
  removeTotal: PropTypes.func.isRequired,
};

export default Cart;
