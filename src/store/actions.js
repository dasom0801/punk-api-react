import axios from 'axios';
import * as types from './actionTypes';

// api call 
export const callPunkAPI = page => dispatch =>{
  return axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=9`)
    .then(result => dispatch(setProductList(result.data, page)))
    .catch(error => console.log(error))
}

// 불러온 리스트 저장
export const setProductList = (productList, page) => ({
  type: types.CALL_PUNK_API,
  productList: [...productList ],
  page: page
})

// 추가 api call 
export const morePage = page => dispatch => {
  page++;
  dispatch(callPunkAPI(page)) // api call
}

// 현재 호출한 api 페이지 기록
export const setPage = page => {
  return {
    type: types.MORE_LIST,
    page: page
  }
}

// input value에 바인딩
export const searchInput= keyword => {
  return {
    type: types.SEARCH_INPUT,
    searchInput: keyword
  }
}

// 검색 submit할 때 사용할 키워드 값
export const searchKeyword = keyword => {
  return {
    type: types.SEARCH_KEYWORD,
    searchKeyword: keyword
  }
}

// 도수 값으로 필터링
export const abvFilter = filter => {
  return {
    type: types.ABV_FILTER,
    filter: filter
  }
}

// 검색 내용과 필터 초기화
export const resetList = () => {
  return {
    type: types.RESET_LIST
  }
}

// Home Link 눌렀을 때 초기화
export const homeLink = () => {
  console.log('homeLink');
  
  return {
    type: types.HOME_LINK
  }
}