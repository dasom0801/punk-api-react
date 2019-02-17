import React from 'react';
import ListItem from './ListItem';
import Button from './ListButton'
import './List.css';

const List = ({productList, moreList, page, filter, searchKeyword}) => {
  console.log(searchKeyword, '11');
  
  return (
    <div className="product-list">
      <ul className="columns is-multiline">
        <ListItem productList={productList} filter={filter} keyword={searchKeyword}/>
      </ul>
      <Button onClick={moreList} page={page}/>
    </div>
      
  )
}
export default List