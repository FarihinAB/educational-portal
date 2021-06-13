import React from 'react'

function Login() {
    return (
        <div className="d-flex align-items-center justify-content-center"
        style={{ minHeight:"100vh"}}>
        <div className="card w-100" style={{ maxWidth: "400px"}}>
            <div className="card-body">
            <h1 className="text-center mb-4">Login</h1>
            <form>
                <div class="form-group mt-2">
                    <label className="control-label" for="email">Email:</label>
                    <input  
                    name="email"
                    type="email" 
                    className="form-control" 
                    id="email"/>
                </div>
                <div className="form-group mt-2">
                    <label className="control-label" for="pwd">Password:</label>
                    <input  
                    name="password" 
                    type="password" 
                    className="form-control" 
                    id="pwd"/>
                </div>
                <div className="w-100 mt-3">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
        </div>
        </div>
    )
}

export default Login
