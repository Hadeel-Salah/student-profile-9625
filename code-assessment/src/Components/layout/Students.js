import React from 'react';
import Student from './Student';


const Students = props => (
  <div className="allCards">

      {props.students.map(student => (

         <Student pic={student.pic} 
                  firstName={student.firstName} 
                  lastName={student.lastName}
                  email={student.email}
                  company={student.company} 
                  skill={student.skill} 
                  grades={student.grades} />
      ))}
    </div>
  
);
export default Students;