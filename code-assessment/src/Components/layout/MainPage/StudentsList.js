import React, { Component } from 'react';
import axios from 'axios';
import Student from '../Student/Student';
import './mainPage.css';
import SearchInput from '../Inputs/SearchInput';
import TagInput from '../Inputs/TagInput';

class StudentsList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            students: [],
            searchInput:'',
            searchTags:'',
            studentTags: [],
            childrenTags: []
            
        }

    }

  
    componentDidMount() {
        axios.get('https://hatchways.io/api/assessment/students')
        .then(response=>{
            this.setState({students:response.data.students});
        })
    }

    NameSearchHandler = event =>{
        this.setState({searchInput: event.target.value});
    }

    TagSearchHandler = event =>{
        this.setState({tagInput: event.target.value});
        
    }

    TagsInputHandler = (tags, id) => {
        let student = this.state.students.filter(student => student.id === id);
        let tagArray = [];
        tagArray.push(tags);
        student[0].tags = tagArray; 
        let studentTags = [...this.state.studentTags, student[0]];
        let uniqueStudents = Array.from(new Set(studentTags));
        this.setState({
            studentTags: uniqueStudents
        });    

    }
   
    

    render() {
        const {searchInput, students, studentTags, tagInput} = this.state;
        const filteredStudents= students.filter(student => 
            student.firstName.toLowerCase().includes(searchInput.toLowerCase())
            ||
            student.lastName.toLowerCase().includes(searchInput.toLowerCase())
            || 
            !searchInput
        );

        const filteredTags =  this.state.studentTags.map (student => {
           if(student.tag)
                for (let i = 0; i < student.tags.length; i++) {
                    return student.tags[i].includes(this.state.tagInput) || !this.state.tagInput;
    }
    }
        );
    

        return (
            <div className="mainPage__container">
                <div className="students__container">
                    <SearchInput NameSearchHandler={this.NameSearchHandler} />
                    <TagInput TagSearchHandler={this.TagSearchHandler} />
                    <Student
                        students={filteredStudents}
                        sendInputHandler={this.TagsInputHandler} 
                     > 
                     </Student>
                </div>

            </div>
        );
    }
}



export default StudentsList;