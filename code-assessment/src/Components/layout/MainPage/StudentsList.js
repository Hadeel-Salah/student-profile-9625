import React, { Component } from 'react';
import axios from 'axios';
import Students from '../Students/Students';
import './mainPage.css';
import Search from '../SearchBox/Search';

class StudentsList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            students: [],
            searchInput:''
        }

    }

  
    componentDidMount() {

        axios.get('https://hatchways.io/api/assessment/students')
        .then(response=>{
            this.setState({students:response.data.students});
       
        });
    }
    onSearchChange = event =>{
        this.setState({searchInput: event.target.value});
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
                    <Search onSearchChange={this.onSearchChange} />
                    <Students students={filteredStudents} />
                </div>

            </div>
        );
    }
}



export default StudentsList;