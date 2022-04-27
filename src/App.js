import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import CardDetails from './components/CardDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ () => (
            <Home
              name="Digite algum termo de pesquisa ou escolha uma categoria."
            />
          ) }
        />
        <Route path="/cart" component={ Cart } />
        <Route path="/CardDetails/:id" component={ CardDetails } />
      </BrowserRouter>
    );
  }
}

export default App;
