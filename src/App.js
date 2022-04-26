import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={ () => <Home name="Digite algum termo de pesquisa ou escolha uma categoria." /> } />
      </BrowserRouter>
    );
  }
}

export default App;
