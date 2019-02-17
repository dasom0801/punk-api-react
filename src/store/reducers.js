import * as actions from './actionTypes';

const initialState = {
  productList: [], 
  page: 1,
  filter: -1,
  searchInput: '',
  searchKeyword: ''
}

export const product = (state = initialState, action) => {
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
    case actions.ABV_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    case actions.SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.searchInput
      }
    case actions.SEARCH_KEYWORD: 
      return {
        ...state,
        searchKeyword: action.searchKeyword
      }
    default:
      return state;
  }
}
