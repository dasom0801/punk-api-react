import React from 'react';

const Product = ({results, match}) => {
  return <div>{match.params.productId}</div>
}

export default Product;