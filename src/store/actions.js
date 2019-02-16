import axios from 'axios';
import * as types from './actionTypes';

export const callPunkAPI = dispatch =>{
  return axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=9')
    .then(result => dispatch(setProductList(result.data)))
    .catch(error => console.log(error))
}

export const setProductList = productList => ({
  type: types.CALL_PUNK_API,
  productList: { ...productList }
})