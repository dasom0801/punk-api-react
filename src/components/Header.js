import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">
          PUNK BEER SHOP
        </Link>
      </h1>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorite">Favorite</Link></li>
      </ul>
    </header>
  )
}

export default Header;