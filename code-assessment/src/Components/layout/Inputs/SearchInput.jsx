import React from 'react';
import "./style.css";
const SearchInput = props => (
    <form>
        <input
            type="text"
            placeholder="Search by name" 
            onChange={props.NameSearchHandler}
            />
    </form>
  
);
export default SearchInput;