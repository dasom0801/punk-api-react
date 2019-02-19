import React from 'react';

const ListButton = ({onClick,page}) => {
  return <button className="more-button" onClick={() => onClick(page)}>More</button>
}

export default ListButton;