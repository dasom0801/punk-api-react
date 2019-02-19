import React from 'react';

const Filter = (props) => {
  const { abvFilter, filter} = props;
  return (
    <div className="filter">
      <button className={filter === 0 ? "selected" : ""} onClick={() => abvFilter(0)}> 0 ~ 4.5</button>
      <button className={filter === 1 ? "selected" : ""} onClick={() => abvFilter(1)}> 4.6 ~7.5</button>
      <button className={filter === 2 ? "selected" : ""} onClick={() => abvFilter(2)}> 7.5 ~ 60</button>
    </div>
  )
}

export default Filter;