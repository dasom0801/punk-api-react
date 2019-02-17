import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="navbar">
      <h1 className="navbar-brand">
        <Link to="/" className="navbar-item"> 
          PUNK BEER SHOP
        </Link>
      </h1>
    </header>
  )
}

export default Header;