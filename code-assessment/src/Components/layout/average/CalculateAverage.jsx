import React from 'react';

function calculateAverage(allGrades){
    let sum=0,
    average =0,
    i = 0;
    for(i; i < allGrades.length;i++){
        allGrades[i] = parseInt(allGrades[i]);
        sum += allGrades[i];
        average = sum / 8;
    }
    return average;
}
function CalculateAverage(props) {
    return (
        <div>
           Average: {calculateAverage(props.grades)}%
        </div>
    );
}

export default CalculateAverage;