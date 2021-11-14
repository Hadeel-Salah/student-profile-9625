import React, { Component } from 'react';
import axios from 'axios';
import Students from './Students';

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
    searchHandler= event =>{
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
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search by the student name" 
                        onChange={this.searchHandler}
                        />
                </form>

                <Students students={filteredStudents} />
                    

            </div>
        );
    }
}



export default StudentsList;