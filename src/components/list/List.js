import React from 'react';
import ListItem from './ListItem';
import Button from './ListButton'
import './List.css';

const List = ({productList, moreList, page, filter}) => {
  return (
    <div className="product-list">
      <ul className="columns is-multiline">
        <ListItem productList={productList} filter={filter}/>
      </ul>
      <Button onClick={moreList} page={page}/>
    </div>
      
  )
}
export default List