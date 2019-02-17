import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../components/product/Product';
// import * as actions from '../store/actions';

class ProductContainer extends Component {
  render() {
    return (
       <Product {...this.props} />
    );
  }
}

const mapStateToProps = ({ product }) => {
  return {
    productList: product.productList,
  }
}

/* const mapDispatchToProps = dispatch => {
  return {
    callPunkAPI: (page) => dispatch(actions.callPunkAPI(page)),
  }
}; */
export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(ProductContainer);
