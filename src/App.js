import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CardDetails from './pages/Detalhes';
import Header from './components/Header';
import styles from './App.module.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      itemProduct: [],
    };
    this.addCart = this.addCart.bind(this);
  }

  saveLocalStorage = () => {
    const { itemProduct } = this.state;
    const json = JSON.stringify(itemProduct);
    localStorage.setItem('itemProduct', json);
  }

  removeTotal = (childData) => {
    const { itemProduct } = this.state;
    const data = [];
    itemProduct.forEach((item) => {
      if (item.id !== childData.id) data.push(item);
    });
    this.setState({ itemProduct: data });
    this.saveLocalStorage();
  }

  removeCart = (childData) => {
    const { itemProduct } = this.state;
    const size = itemProduct.filter((item) => item.id === childData.id).length;
    if (size > 1) {
      const data = itemProduct.indexOf(childData);
      itemProduct.splice(data, 1);
      const data3 = itemProduct;
      this.setState(() => ({
        itemProduct: data3,
      }));
    }
    this.saveLocalStorage();
  }

  async addCart(childData) {
    // Estamos atualizando e devemos fazer o somatorio dos valores
    await this.setState(({ itemProduct }) => ({ // atualiza o itemProduct
      itemProduct: [...itemProduct, childData], // soma com o childData
    }));
    this.saveLocalStorage();
  }

  render() {
    const { itemProduct } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <main className={ styles.main }>
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
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
