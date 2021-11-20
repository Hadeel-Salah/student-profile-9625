import React, { Component } from 'react';
import './student.css';
import ExpandableList from '../ExpandableList/ExpandableList'
import CalculateAverage from '../average/CalculateAverage';

class Student extends Component {
    constructor(props){
        super(props);

    this.state={
        listExpandedOn: false,
        inputTags: [],
        newTag:'',
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

    onChangeTages = event =>{
        this.setState({inputTags: event.target.value});
    }
    addTagsHandler = newTag =>{
        let newTages = [...this.state.inputTags, newTag];
        this.setState({inputTags: newTages});
        
    }


    render(){
        return (
            <div className="student">
                {this.props.students.map(student => (
                <div className="student__container">
                    <img className="student__img" src={student.pic} alt="photo"></img>      
                    <ul>
                        <li className="student__name">
                            {student.firstName}{" "}{student.lastName}
                        </li>

                        <li>
                            Email:{student.email}
                        </li>

                        <li>
                            Company:{student.company}
                        </li>

                        <li>
                            Skill: {student.skill}
                        </li>

                        <li>
                            <CalculateAverage grades={student.grades} />
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
                            <ExpandableList grades={student.grades} />
                            : 
                            <span>
                                &nbsp;
                            </span> }

                        <li>
                            {this.state.inputTags &&
                                this.state.inputTags.map(tag =>
                                    <li className="new__tags">{tag}</li>
                                )}
                        </li>

                        <li>
                            <input
                             type="text"
                             placeholder="enter tag"
                             onChange={event => {this.setState({newTag: event.target.value})}}
                             onKeyPress={event => {
                                if (event.key === 'Enter') {
                                  this.addTagsHandler(this.state.newTag);
                                }
                              }}

                              />
                        </li>
                    </ul>


                    
                    <span>
                        &nbsp;
                    </span>

                    <hr></hr>
            </div>
                 ))}
        </div>
        );

    }
}
export default Student;
