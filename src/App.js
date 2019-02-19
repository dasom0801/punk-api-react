import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListContainer from './containers/ListContainer';
import ProductContainer from './containers/ProductContainer';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Header />
          <Route exact path="/" component={ListContainer} />
          <Route exact path="/product/:productId" component={ProductContainer} />
        </div> 
      </Router>
    );
  }
}

export default App;
