import React from 'react';
import { Link } from 'react-router-dom';
import { store } from './index'
import * as actions from './store/actions';

const Header = () => {
  return (
    <header className="navbar">
      <h1 className="navbar-brand">
        <Link to="/" className="navbar-item" onClick={() => store.dispatch(actions.homeLink())}> 
          PUNK BEER
        </Link>
      </h1>
    </header>
  )
}

export default Header;