import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../components/main/Main';
import List from '../components/list/List';
import * as actions from '../store/actions';

class ListContainer extends Component {
  componentDidMount() {
    this.props.callPunkAPI();
  }
  
  render() { 
    const {path} = this.props.match;
    return ( 
      path === '/'
      ? <Main {...this.props} />
      : <List {...this.props} />
     );
  }
}

const mapStateToProps = ({product}) => {
  return {
    productList: product.productList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    callPunkAPI: () => dispatch(actions.callPunkAPI)
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
