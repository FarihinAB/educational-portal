import React, {useState} from 'react'
import axios from "axios";

function Files() {
    const [input,setInput] =useState ({
        no: '',
        assignment: '',
        duedate: '',
        url: ''
    })

    function handleChange(event) {
       const {name, value} = event.target;

       setInput(prevInput => {
           return {
               ...prevInput,
               [name]: value
           }
       })
    }

    function handleClick(event){
        event.preventDefault();
        const newNote = {
            no: input.no,
            assignment: input.assignment,
            duedate: input.duedate,
            url: input.url
        }

        axios.post('http://localhost:4000/files', newNote)
    }

    

    return (
    <div className="container mt-3">
        <h1 className="my-4">Create new files</h1>
        <form>
            <div className="form-group m-2">
                <input onChange={handleChange} type="number" name="no" value={input.no} autoComplete="off" className="form-control" placeholder="note number">
                </input>
            </div>

            <div className="form-group m-2">
                <input onChange={handleChange} name="assignment" value={input.assignment} autoComplete="off" className="form-control" placeholder="note assignment">
                </input>
            </div>

            <div className="form-group m-2">
                <input onChange={handleChange} type="date" name="duedate" value={input.duedate} autoComplete="off" className="form-control" placeholder="note duedate">
                </input>
            </div>

            <div className="form-group m-2">
                <input onChange={handleChange} type="url" name="url" value={input.url} autoComplete="off" className="form-control" placeholder="note url">
                </input>
            </div>

            <button onClick={handleClick} className="btn btn-lg btn-info m-2">ADD NEW</button>
        </form>
    </div>
)
}

export default Files
