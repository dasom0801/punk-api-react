import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({productList}) => {
  return productList.length
  ? productList.map(item =>
    <li key={item.id}>
      <Link to={"/product/" + item.id}>
        <p>{item.name}</p>
        <img src={item.image_url} alt={item.name + "product image"} />
      </Link>
    </li>)
  : <p>Loading...</p>;
}

export default ListItem;