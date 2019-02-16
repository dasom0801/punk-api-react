import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Product from './components/product/Product';
import './App.css';
import ListContainer from './containers/ListContainer';
// import MainContainer from './containers/MainContainer';
 
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={ListContainer} />
          <Route exact path="/favorite" component={ListContainer} />
          <Route exact path="/product/:productId" component={Product} />
        </div> 
      </Router>
    );
  }
}

export default App;
