import React from 'react';

function ExpandableList(props) {
    return (
        <div>
            <ul>
                {props.grades.map(index =>
                    <li key={index}>Test {index}%</li>
                )}
            </ul>
        </div>
    );
}

export default ExpandableList;