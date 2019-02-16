import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../components/main/Main';
import List from '../components/list/List';
import * as actions from '../store/actions';

class ListContainer extends Component {
  componentDidMount() {
    this.props.callPunkAPI(this.props.page);
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
    productList: product.productList,
    page: product.page,
    inputKeyword: product.inputKeyword,
    filter: product.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    callPunkAPI: (page) => dispatch(actions.callPunkAPI(page)),
    moreList: (page) => dispatch(actions.morePage(page)),
    searchKeyword: (keyword) => dispatch(actions.searchKeyword(keyword)),
    abvFilter: (filter) => dispatch(actions.abvFilter(filter))
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
