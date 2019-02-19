import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
  const {productList} = props;
  const productId = Number(props.match.params.productId);
  const filteredProduct = productList.filter(item => {
    return item.id === productId;
  })[0]
  
  return (
  <div className="product">
      <Link className="back" to="/">&#60; Back</Link>
      <p className="product-name">{filteredProduct.name}</p>
      <div className="degree">
        <p>abv <span>{filteredProduct.abv}</span></p>
        <p>ibu <span>{filteredProduct.ibu}</span></p>
        <p>ebc <span>{filteredProduct.ebc}</span></p>
      </div>
      <img src={filteredProduct.image_url} alt={filteredProduct.name + "product image"}/>
      <p className="tagline">{filteredProduct.tagline}</p>
      <p className="description">{filteredProduct.description}</p>
      <p className="tips">{filteredProduct.brewers_tips}</p>
  </div>
  )

}

export default Product;