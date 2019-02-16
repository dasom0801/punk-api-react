import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (productList) => {
  return Object.keys(productList) &&  Object.keys(productList).map(objKey =>
    <li key={productList[objKey].id}>
      <Link to={"/product/" + productList[objKey].id}>
        <p>{productList[objKey].name}</p>
        <img src={productList[objKey].image_url} alt={productList[objKey].name + "product image"} />
      </Link>
    </li>);
}

export default ListItem;