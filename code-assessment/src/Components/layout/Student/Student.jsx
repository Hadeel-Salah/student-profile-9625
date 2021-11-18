import React, { Component } from 'react';
import './student.css';
import ExpandableList from '../ExpandableList/ExpandableList'
import CalculateAverage from '../average/CalculateAverage';

class Student extends Component {
    constructor(props){
        super(props);

    this.state={
        listExpandedOn: false,
    }
}
    toggleShowList(){
        this.setState({
            listExpandedOn: !this.state.listExpandedOn,
        })
    }
    toggleHideList(){
        this.setState({
            listExpandedOn: !this.state.listExpandedOn,
        })
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
                            <CalculateAverage props={this.props.grades} />
                        </li>
                        { !this.state.listExpandedOn ?
                            <li style={{float:"right", fontSize:"30px"}} onClick={ () => this.toggleShowList()}>
                                <span>&#43;</span>
                            </li>
                            :
                             <span style={{float:"right", fontSize:"30px"}} onClick={ () => this.toggleHideList()}>
                                 &#8722;
                            </span>
                        }

                        {this.state.listExpandedOn ? 
                            <ExpandableList grades={this.props.grades} />
                            : 
                            <span>
                                &nbsp;
                            </span> }
                    </ul>
                    
                    <span>
                        &nbsp;
                    </span>

                    <hr></hr>
            </div>
        </div>
        );

    }
}
export default Student;
