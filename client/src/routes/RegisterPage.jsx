import React from "react";
import './Pages.css';

const Register = () => {
    return(
    <div className="Sign-up">
        <div className="placeholder-top"></div>
        <div className="form">
            <h1>Register</h1>
            <input 
                type="text" 
                id="username" 
                placeholder="Username"
            />
            <input 
                type="text" 
                id="login" 
                placeholder="Login"
            />
            <input 
                type="password" 
                id="password" 
                placeholder="Password"
            />
            <input 
                type="password" 
                id="ConfPassword" 
                placeholder="Confirm password"
            />
            <button>
                Sign Up
            </button>
        </div>
    </div>
    )
}

export default Register;