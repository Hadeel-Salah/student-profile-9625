import React from 'react';
import "./style.css";
const TagInput = props => (
    <form>
        <input
            type="text"
            placeholder="Search by tag" 
            onChange={props.TagSearchHandler}
            />
    </form>
  
);
export default TagInput;