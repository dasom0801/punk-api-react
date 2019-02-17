import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../components/main/Main';
import * as actions from '../store/actions';

class ListContainer extends Component {
  componentDidMount() {
    if (!this.props.productList.length) {
      this.props.callPunkAPI(this.props.page);
    }
  }
  
  render() { 
    return ( 
      <Main {...this.props} />
     );
  }
}

const mapStateToProps = ({product}) => {
  return {
    productList: product.productList,
    page: product.page,
    searchInput: product.searchInput,
    searchKeyword: product.searchKeyword,
    filter: product.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    callPunkAPI: (page) => dispatch(actions.callPunkAPI(page)),
    moreList: (page) => dispatch(actions.morePage(page)),
    handleSearchInput: (keyword) => dispatch(actions.searchInput(keyword)),
    handleSearchKeyword: (keyword) => dispatch(actions.searchKeyword(keyword)),
    abvFilter: (filter) => dispatch(actions.abvFilter(filter))
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
