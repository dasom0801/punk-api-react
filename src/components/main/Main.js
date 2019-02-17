import React from 'react';
import Search from './Search';
import Filter from './Filter';
import List from '../list/List'

const Main = (props) => {
  return (
    <main>
      <Search {...props} />
      <Filter {...props} />
      <List {...props} />
    </main>
  )
}

export default Main