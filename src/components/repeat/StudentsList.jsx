import React from 'react';
import students from '../../data/students';

export default _ => {
    // console.log(studentsList)
    const studentsList = students.map((student) => {
        return (
            <li key={student.id} >
                {student.name} tem a nota {student.score}
            </li>
        )
    })
    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {studentsList}
            </ul>
        </div>
    )
}