import React from 'react';

const Search = (props) => {
  const { searchInput, handleSearchInput, handleSearchKeyword} = props;
  
  return (
    <form className="search" onSubmit={(event) => {
      event.preventDefault();
      handleSearchKeyword(searchInput);
      }}>
      <input 
        type="text" 
        placeholder="search by name" 
        value={searchInput} 
        onChange={(event) => handleSearchInput(event.target.value) }
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search;