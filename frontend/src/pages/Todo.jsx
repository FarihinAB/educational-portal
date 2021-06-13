import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

function Todo() {
    const [notes, setNotes]= useState([{
        no:'',
        assignment:'',
        duedate:'',
        url:''
    }])
    

    useEffect(() =>{
        
        
        fetch("http://localhost:4000/todo").then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes));
    })


    return <div>
        <h1 className="ml-5 my-4">To do</h1>
        <Table>
        <thead>
        <tr class="text-center">
        <div className="container"> 
            <div className="row no-gutter">
                    <div className="col-sm-3">
            <th>#</th>
            </div>
            <div className="col-sm-3">
            <th>Assignment:</th>
            </div>
            <div className="col-sm-3">
            <th>Due Date:</th>
            </div>
            <div className="col-sm-3">
            <th>Download</th>
            </div>
            </div>
            </div>
        </tr>
        </thead>
        </Table>
        {notes.map(note =>

            <Table striped>

            
                <tbody>

                    <tr class="text-center">
                    <div className="container"> 
            <div className="row no-gutter">
                    <div className="col-sm-3 mt-1">
                    <td>{note.no}</td>
                    </div>
                    <div className="col-sm-3 mt-1">
                    <td>{note.assignment}</td>
                    </div>
                    <div className="col-sm-3 mt-1">
                    <td>{note.duedate}</td>
                    </div>
                    <div className="col-sm-3">
                    <td><a href={note.url} target="_blank" rel="noreferrer"><button class="btn btn-primary btn-sm">Download</button></a></td>
                    </div>
                    </div>
                </div>
                    </tr>
                 
                </tbody>

            </Table>

        )}
    
    </div>
}

export default Todo


