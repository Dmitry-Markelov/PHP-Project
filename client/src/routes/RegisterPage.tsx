import React, { useContext, useRef, useState } from "react";
import './Pages.css';
import { Navigate } from "react-router-dom";
import { ServerContext } from "../App";
import md5 from "md5";

const Register = () => {
    const [isReg, setReg] = useState(false);
    const server = useContext(ServerContext);

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const loginRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const secondPasswordRef = useRef<HTMLInputElement | null>(null);

    const handleRegister = async () => {
        if ((usernameRef.current?.value && loginRef.current?.value && passwordRef.current?.value) && passwordRef.current?.value == secondPasswordRef.current?.value) {
            const hash = md5(loginRef.current.value + passwordRef.current.value);
            const result = await server.register(loginRef.current.value, hash, usernameRef.current.value);
            if (result) {
                setReg(true);
            }
        }
    }

    return (
        <div className="Sign-up">
            <div className="placeholder-top"></div>
            <div className="form">
                <h1>Register</h1>
                <input
                    ref={usernameRef}
                    type="text"
                    id="username"
                    placeholder="Username"
                />
                <input
                    ref={loginRef}
                    type="text"
                    id="login"
                    placeholder="Login"
                />
                <input
                    ref={passwordRef}
                    type="password"
                    id="password"
                    placeholder="Password"
                />
                <input
                    ref={secondPasswordRef}
                    type="password"
                    id="ConfPassword"
                    placeholder="Confirm password"
                />
                <button onClick={() => handleRegister()}>
                    Sign Up
                </button>
                {isReg ? <Navigate to="/login" replace={true} /> : null}
            </div>
        </div>
    )
}

export default Register;