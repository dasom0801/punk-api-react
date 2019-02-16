import React from 'react';
import Filter from './Filter';
import List from '../list/List'

const Main = (props) => {
  
  return (
    <main>
      <Filter {...props} />
      <List {...props} />
    </main>
  )
}

export default Main