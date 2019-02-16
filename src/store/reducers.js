import * as actions from './actionTypes';

export const product =  (state ={ productList: null, apiPage: 1}, action) => {
  switch (action.type) {
    case actions.CALL_PUNK_API:
      return {
        productList: action.productList
      }
    default:
      return state;
  }
}
