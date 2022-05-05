import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CardDetails from './pages/Detalhes';
import Header from './components/Header';
import Checkout from './pages/Checkout';
import styles from './App.module.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      itemProduct: [],
      arrayProduct: [],
    };
    this.addCart = this.addCart.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
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
    this.setState({ itemProduct: data }, () => { this.saveLocalStorage(); });
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
      }), () => { this.saveLocalStorage(); });
    }
  }

  removeDuplicate = () => {
    const { itemProduct } = this.state;
    const data = itemProduct
      .filter((v, i, a) => a.findIndex((v2) => (v2.id === v.id)) === i);
    this.setState({ arrayProduct: data });
  }

  addCart = async (childData) => {
    // Estamos atualizando e devemos fazer o somatorio dos valores
    await this.setState(({ itemProduct }) => ({ // atualiza o itemProduct
      itemProduct: [...itemProduct, childData], // soma com o childData
    }), async () => {
      await this.removeDuplicate();
    });
    this.saveLocalStorage();
  }

  getLocalStorage = () => {
    const x = localStorage.getItem('itemProduct');
    const data = JSON.parse(x);
    if (data) {
      this.setState({
        itemProduct: data,
      }, () => { this.removeDuplicate(); });
    } else {
      this.setState({
        itemProduct: [],
      });
    }
  }

  render() {
    const { itemProduct, arrayProduct } = this.state;
    return (
      <BrowserRouter>
        <Header itemProduct={ itemProduct } />
        <main className={ styles.main }>
          <Switch>
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
              render={ (props) => (
                <Cart
                  { ...props }
                  itemProduct={ itemProduct }
                  arrayProduct={ arrayProduct }
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
            <Route
              path="/checkout"
              render={ () => (
                <Checkout
                  itemProduct={ itemProduct }
                  arrayProduct={ arrayProduct }
                />
              ) }
            />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
