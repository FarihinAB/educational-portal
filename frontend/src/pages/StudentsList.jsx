import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

function StudentsList(){
    const [students, setStudents] = useState([{
        module: '',
        email: ''
    }])

    useEffect(() => {
        fetch("http://localhost:4000/students").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setStudents(jsonRes));
    })

    return <div className='container'>
        <h1 className="ml-5 my-4">List Of Students</h1>
        <Table>
        <thead>
        <tr class="text-center">
        <div className="container"> 
            <div className="row no-gutter">
                    <div className="col-sm-6">
            <th>Module:</th>
            </div>
            <div className="col-sm-6">
            <th>Email:</th>
            </div>
            </div>
            </div>
        </tr>
        </thead>
        </Table>
        {students.map(student =>
        <Table striped>

            
        <tbody>

            <tr class="text-center">
            <div className="container"> 
    <div className="row no-gutter">
            <div className="col-sm-6 mt-1">
            <td>{student.module}</td>
            </div>
            <div className="col-sm-6 mt-1">
            <td>{student.email}</td>
            </div>
            </div>
        </div>
            </tr>
         
        </tbody>

    </Table>
            )}

    </div>
}

export default StudentsList;