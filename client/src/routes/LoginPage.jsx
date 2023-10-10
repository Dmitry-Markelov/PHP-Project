import React, { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../components/Contexts";
import { ServerContext } from '../App';

const LoginPage = () => {
    const {isAuth, setAuth} = useContext(authContext);
    const server = useContext(ServerContext);

    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = async () => {
        const user = await server.login(loginRef.current.value, passwordRef.current.value);
        console.log(user);
    }

    return(
        <div>
            <h1>Login</h1>
            <div className="form">
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
                />
            </div>
            <button onClick={() => handleLogin()}>
                Enter
            </button>
                {isAuth ? <Navigate to="/user" replace={true}/> : <Navigate to=""/>}
        </div>
    )
}

export default LoginPage;