import React, { useState } from 'react';
import axios from 'axios'

function Signup() {
    const [input, setInput] = useState({
        fullName:'',
        userId:'',
        email:'',
        password:'',
        passwordConf:''
    })

    function handleChange(event){
        const {name, value} = event.target;
    
        setInput(prevInput => {
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newUser = {
            fullName: input.fullName,
            userId: input.userId,
            email: input.email,
            password: input.password,
            passwordConf: input.passwordConf
        }

        axios.post('http://localhost:4000/signup', newUser);
    }

    return (
        <div className="d-flex align-items-center justify-content-center"
        style={{ minHeight:"100vh"}}>
        <div className="card w-100" style={{ maxWidth: "400px"}}>
            <div className="card-body">
            <h1 className="text-center mb-4">Sign up</h1>
            <form>
                <div className="form-group">
                    <label className="control-label" for="fullname">Full Name:</label>
                    <input onChange={handleChange} 
                    name="fullName" 
                    value={input.fullName} 
                    type="text" 
                    className="form-control" 
                    id="fname"/>
                </div>
                <div className="form-group mt-2">
                    <label className="control-label" for="email">User ID:</label>
                    <input onChange={handleChange} 
                    name="userId" value={input.userId} 
                    type="number" 
                    className="form-control" 
                    id="userId"/>
                </div>
                <div className="form-group mt-2">
                    <label className="control-label" for="email">Email:</label>
                    <input onChange={handleChange} 
                    name="email" value={input.email} 
                    type="email" 
                    className="form-control" 
                    id="email"/>
                </div>
                <div className="form-group mt-2">
                    <label className="control-label" for="pwd">Password:</label>
                    <input onChange={handleChange} 
                    name="password" 
                    value={input.password} 
                    type="password" 
                    className="form-control" 
                    id="pwd"/>
                </div>
                <div className="form-group mt-2">
                    <label className="control-label" for="pwdconf">Password Confirmation:</label>
                    <input onChange={handleChange} 
                    name="passwordConf" 
                    value={input.passwordConf} 
                    type="password" 
                    className="form-control" 
                    id="pwdconf"/>
                </div>
                <div className="w-100 mt-3">
                    <button onClick={handleClick} type="submit" className="btn btn-primary">Register</button>
                </div>
                </form>
                <div className="w-100 text-center mt-2">
                    <p>Already have an account? Log in</p>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Signup
