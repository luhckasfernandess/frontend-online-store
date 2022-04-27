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
            />
          ) }
        />
        <Route path="/CardDetails/:id" component={ CardDetails } />
      </BrowserRouter>
    );
  }
}

export default App;
