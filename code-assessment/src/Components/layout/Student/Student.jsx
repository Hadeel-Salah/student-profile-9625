import React, { Component } from 'react';
import './student.css';

class Student extends Component {
    constructor(props){
        super(props);
    }

    getAverage = (array)=>{
        let sum=0,
        average =0,
        i = 0;

        for(i; i < array.length;i++){
            array[i] = parseInt(array[i]);
            sum += array[i];
            average = sum / 8;
        }
        return average;
    }
    render(){
        return (
            <div className="student">
                <div className="student__container">
                    <img className="student__img" src={this.props.pic} alt="photo"></img>      
                    <ul>
                        <li className="student__name">
                            {this.props.firstName}{" "}{this.props.lastName}
                        </li>

                        <li>
                            Email:{this.props.email}
                        </li>

                        <li>
                            Company:{this.props.company}
                        </li>

                        <li>
                            Skill: {this.props.skill}
                        </li>

                        <li>
                            Average:{ this.getAverage(this.props.grades)}%
                        </li>
                    </ul>
                    <hr></hr>
            </div>
        </div>
        );

    }
}
export default Student;
