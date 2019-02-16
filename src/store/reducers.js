import * as actions from './actionTypes';

export const product =  (state ={ productList: [], page: 1}, action) => {
  
  switch (action.type) {
    case actions.CALL_PUNK_API:
      return {
        ...state,
        productList: [...state.productList, ...action.productList]
      }
    case actions.MORE_LIST: 
      return {
        ...state,
        page: action.page
      }
    default:
      return state;
  }
}
