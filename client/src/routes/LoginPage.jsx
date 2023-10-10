import React, { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../components/Contexts";
import { ServerContext } from '../App';
import './LoginPage.css';

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
        <div>
            <div className="form">
                <h1>Login</h1>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="login"
                    ref={loginRef}
                />
                <input 
                    type="password" 
                    id="password" 
                    placeholder="password"
                    ref={passwordRef}
                /><br></br>
                <button onClick={() => handleLogin()}>
                    Enter
                </button>
            </div>
                {isAuth ? <Navigate to="/user" replace={true}/> : <Navigate to=""/>}
        </div>
    )
}

export default LoginPage;