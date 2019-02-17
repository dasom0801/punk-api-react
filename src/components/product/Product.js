import React from 'react';

const Product = (props) => {
  const {productList} = props;
  const productId = Number(props.match.params.productId);
  const filteredProduct = productList.filter(item => {
    return item.id === productId;
  })[0]
  
  return (
  <div>
      <p>{filteredProduct.name}</p>
      <img src={filteredProduct.image_url} alt={filteredProduct.name + "product image"}/>
  </div>
  )

}

export default Product;