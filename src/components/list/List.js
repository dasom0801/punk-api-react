import React from 'react';
import ListItem from './ListItem';
import Button from './ListButton'
import './List.css';

const List = ({productList, moreList, page}) => {
  return (
    <div>
      <ListItem productList={productList} />
      <Button onClick={moreList} page={page}/>
    </div>
      
  )
}
export default List