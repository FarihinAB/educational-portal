import React, {useState} from "react";
import axios from "axios";

function StudentsAdd(){
    const [input, setInput] = useState({
        module: '',
        email: ''
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    }
    function handleClick(event) {
        event.preventDefault();
        const newStudent = {
            module: input.module,
            email: input.email
        }
        
        axios.post('http://localhost:4000/addstudent', newStudent)
}
    return <div className="container mt-3">
        <h2 className="my-4">Add Student</h2>
            <form className="form-group">
                <h3>Select Course/Subject/Module</h3>
                <select className="form-control mt-4" onChange={handleChange} name="module" value={input.module}>
                    <option value="">Pick Subject</option>
                    <option name="Mathematics" value="Mathematics">Mathematics</option>
                    <option name="Korean" value="Korean">Korean</option>
                    <option name="Physics" value="Physics">Physics</option>
                    <option name="Biology" value="Biology">Biology</option>
                    <option name="Economics" value="Economics">Economics</option>
                </select>
                <h3 className="mt-3">Add Student via Email</h3>
                <input className="form-control mt-3" onChange={handleChange} name="email" type="email" placeholder="Enter email" />
                <button className="btn btn-primary mt-3" onClick={handleClick} name="submit">Add Student</button>
                <hr />
                </form>
            
    </div>
}

export default StudentsAdd;