import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      cartProducts: [],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const { itemProduct } = this.props;
    /* const teste = await getProductDetails(itemProduct[0]);
    console.log(teste); */
    itemProduct.map(async (id) => {
      const x = await getProductDetails(id);
      this.setState(({ cartProducts }) => ({ // atualiza o itemProduct
        cartProducts: [...cartProducts, x], // soma com o childData
      }));
    });
  }

  render() {
    const { cartProducts } = this.state;
    const quantity = cartProducts.length;
    return (
      <div>
        {cartProducts.map((element, index) => (
          <p key={ index } data-testid="shopping-cart-product-name">{element.title}</p>
        ))}
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <p data-testid="shopping-cart-product-quantity ">{quantity}</p>
      </div>
    );
  }
}

Cart.propTypes = {
  itemProduct: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Cart;
