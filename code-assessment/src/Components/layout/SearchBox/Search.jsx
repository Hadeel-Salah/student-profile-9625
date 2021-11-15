import React from 'react';
import "./style.css";
const Search = props => (
    <form>
        <input
            type="text"
            placeholder="Search by name" 
            onChange={props.onSearchChange}
            />
    </form>
  
);
export default Search;