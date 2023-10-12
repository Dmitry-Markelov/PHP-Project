import React, { useState } from "react";
import './Pages.css';
import { Navigate } from "react-router-dom";

const Register = () => {
    const [isReg, setReg] = useState(false);
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
            <button onClick={() => setReg(true)}>
                Sign Up
            </button>
            {isReg ? <Navigate to="/login" replace='true'/>: null}
        </div>
    </div>
    )
}

export default Register;