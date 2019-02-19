import React from 'react';
import Search from './MainSearch';
import Filter from './MainFilter';
import List from '../list/List'
import './Main.css';

const Main = (props) => {
  return (
    <main>
      <div className="search-container">
        <Search {...props} />
        <Filter {...props} />
        <button className="reset-button" onClick={() => props.handleResetList()}> reset all </button>
      </div>
      <List {...props} />
    </main>
  )
}

export default Main