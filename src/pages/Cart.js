import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../services/api';
import CardItem from '../components/CardItem';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartProducts: [],
      arrayProduct: [],
    };
  }

  componentDidMount = async () => {
    await this.removeDuplicate();
    this.fetchProducts();
  }

  removeDuplicate = () => {
    const { itemProduct } = this.props;
    const data = itemProduct
      .filter((item, index, array) => array.indexOf(item) === index);
    this.setState({ arrayProduct: data });
  }

  fetchProducts = async () => {
    const { arrayProduct } = this.state;
    /* const teste = await getProductDetails(arrayProduct[0]);
    console.log(teste); */
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
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
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
