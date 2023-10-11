import React, { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../components/Contexts";
import { ServerContext } from '../App';
import './Pages.css';

const LoginPage = () => {
    const {isAuth, setAuth} = useContext(authContext);
    const server = useContext(ServerContext);

    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = async () => {
        const user = await server.login(loginRef.current.value, passwordRef.current.value);
        if (user) {
            setAuth(true)
            return user;
        }
    }

    return(
        <div className="sign-in">
            <div className="placeholder-top"></div>
            <div className="form">
                <h1>Sign In</h1>
                <input 
                    type="text"
                    id="login" 
                    placeholder="Login"
                    ref={loginRef}
                />
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Password"
                    ref={passwordRef}
                />
                <button onClick={() => handleLogin()}>
                    Sign In
                </button>
            </div>
                {isAuth ? <Navigate to="/user" replace={true}/> : <Navigate to=""/>}
        </div>
    )
}

export default LoginPage;