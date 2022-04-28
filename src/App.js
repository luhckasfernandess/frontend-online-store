import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CardDetails from './components/CardDetails';

class App extends Component {
  constructor() {
    super();

    this.state = {
      itemProduct: [],
    };
    this.addCart = this.addCart.bind(this);
  }

  removeTotal = (childData) => {
    const { itemProduct } = this.state;
    const data = [];
    itemProduct.forEach((item) => {
      if (item !== childData) data.push(item);
    });
    this.setState({ itemProduct: data });
  }

  removeCart = (childData) => {
    const { itemProduct } = this.state;
    const size = itemProduct.filter((item) => item === childData).length;
    if (size > 1) {
      const data = itemProduct.indexOf(childData);
      const data2 = itemProduct.splice(data, 1);
      const data3 = itemProduct;
      console.log(data2);
      this.setState(() => ({
        itemProduct: data3,
      }));
    }
  }

  addCart(childData) {
    // Estamos atualizando e devemos fazer o somatorio dos valores
    this.setState(({ itemProduct }) => ({ // atualiza o itemProduct
      itemProduct: [...itemProduct, childData], // soma com o childData
    }));
  }

  render() {
    const { itemProduct } = this.state;
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ () => (
            <Home
              name="Digite algum termo de pesquisa ou escolha uma categoria."
              addCart={ this.addCart }
            />
          ) }
        />
        <Route
          path="/cart"
          render={ () => (
            <Cart
              itemProduct={ itemProduct }
              addCart={ this.addCart }
              removeCart={ this.removeCart }
              removeTotal={ this.removeTotal }
            />
          ) }
        />
        <Route
          path="/CardDetails/:id"
          render={ (props) => (
            <CardDetails
              { ...props }
              addCart={ this.addCart }
              itemProduct={ itemProduct }
            />
          ) }
        />
      </BrowserRouter>
    );
  }
}

export default App;
