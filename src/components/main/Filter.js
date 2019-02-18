import React from 'react';

const Filter = (props) => {
  const { abvFilter, handleResetList } = props;
  return (
    <div className="filter">
      <button onClick={() => abvFilter(0)}> 0 ~ 4.5</button>
      <button onClick={() => abvFilter(1)}> 4.6 ~7.5</button>
      <button onClick={() => abvFilter(2)}> 7.5 ~ 60</button>
      <button onClick={() => handleResetList()}> reset </button>
    </div>
  )
}

export default Filter;