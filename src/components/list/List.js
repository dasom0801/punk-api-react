import React from 'react';
import ListItem from './ListItem';
import Button from './ListButton'
import './List.css';

const List = ({productList}) => {
  return (
    <div>
      <ListItem {...productList}/>
      <Button />
    </div>
      
  )
}
export default List