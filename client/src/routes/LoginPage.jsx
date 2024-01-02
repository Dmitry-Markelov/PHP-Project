import React, { useContext, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../components/Contexts";
import { ServerContext } from '../App';
import md5 from "md5";
import './Pages.css';

const LoginPage = () => {
    const {isAuth, setAuth} = useContext(authContext);
    const {login, setLogin} = useState('');
    const [username, setUsername] = useState('');
    const server = useContext(ServerContext);

    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = async () => {
        const hash = md5(loginRef.current.value+passwordRef.current.value)
        const user = await server.login(loginRef.current.value, hash)
        console.log(user)
        if (user) {
            if (user[0] === true) {
                setUsername(user[1].name);
                setAuth(true)
                return user;
            }
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
                {isAuth ? <Navigate to="/user" replace={true} state={{ login: loginRef.current.value, username: username} }/> : null}
        </div>
    )
}

export default LoginPage;