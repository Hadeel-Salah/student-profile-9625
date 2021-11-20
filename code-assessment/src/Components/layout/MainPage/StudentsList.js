import React, { Component } from 'react';
import axios from 'axios';
import Students from '../Students/Students';
import './mainPage.css';
import SearchInput from '../Inputs/SearchInput';
import TagInput from '../Inputs/TagInput';

class StudentsList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            students: [],
            searchInput:'',
            searchTags:[],
        }

    }

  
    componentDidMount() {

        axios.get('https://hatchways.io/api/assessment/students')
        .then(response=>{
            this.setState({students:response.data.students});
       
        });
    }
    NameSearchHandler = event =>{
        this.setState({searchInput: event.target.value});
    }

    TagSearchHandler = event =>{
        this.setState({searchTags: event.target.value});
    }

    

    render() {
        const {searchInput, students} = this.state;
        const filteredStudents= students.filter(student => 
            student.firstName.toLowerCase().includes(searchInput.toLowerCase())
            ||
            student.lastName.toLowerCase().includes(searchInput.toLowerCase())
            || 
            !searchInput
        );

        return (
            <div className="mainPage__container">
                <div className="students__container">
                    <SearchInput NameSearchHandler={this.NameSearchHandler} />
                    <TagInput TagSearchHandler={this.TagSearchHandler} />
                    <Students students={filteredStudents} />
                </div>

            </div>
        );
    }
}



export default StudentsList;