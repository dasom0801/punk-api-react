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
        productList: [...state.productList, ...action.productList],
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
    case actions.RESET_LIST:
      return {
        ...state,
        filter: -1,
        searchInput: '',
        searchKeyword: ''
      }
    case actions.HOME_LINK: 
      return {
        ...initialState,
        productList: [...state.productList.splice(0, 9)],
      }
    default:
      return state;
  }
}
