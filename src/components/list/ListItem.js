import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({productList, filter, keyword}) => {
  let min = 0, max = 60;
  switch (filter) {
    case 0:
      min = 0;
      max = 4.5;
      break;
    case 1: 
      min = 4.6;
      max = 7.5;
      break;
    case 2:
      min = 7.6;
      max = 60;
      break;
    default:
      min = 0;
      max = 60;
      break;
  }
  return productList.length
  ? productList.filter(item => (item.abv >= min) && (item.abv <= max) && (item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1))
  .map(item =>
    <li className="column box is-3" key={item.id}>
      <Link to={"/product/" + item.id}>
        <p>{item.name}</p>
        <img src={item.image_url} alt={item.name + "product image"} />
      </Link>
    </li>)
  : <p>Loading...</p>;
}

export default ListItem;