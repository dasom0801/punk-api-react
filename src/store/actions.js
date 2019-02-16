import axios from 'axios';
import * as types from './actionTypes';

export const callPunkAPI = page => dispatch =>{
  return axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`)
    .then(result => dispatch(setProductList(result.data)))
    .catch(error => console.log(error))
}

export const setProductList = productList => ({
  type: types.CALL_PUNK_API,
  productList: [...productList ]
})

export const morePage = page => dispatch => {
  dispatch(setPage(page))
  dispatch(callPunkAPI(page+1))
}

export const setPage = page => {
  return {
    type: types.MORE_LIST,
    page: page + 1
  }
}

export const searchKeyword = keyword => {
  return {
    type: types.SEARCH_KEYWORD,
    inputKeyword: keyword
  }
}

export const abvFilter = filter => {
  return {
    type: types.ABV_FILTER,
    filter: filter
  }
}