import React, { useContext, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { ServerContext, StoreContext } from '../App';
import md5 from "md5";
import './Pages.css';
import { getToken, getUuid } from "../Hooks/useToken";

const LoginPage = () => {
    const server = useContext(ServerContext);
    const store = useContext(StoreContext);

    const loginRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(store.isAuth());

    const handleLogin = async () => {
        if (loginRef.current?.value && passwordRef.current?.value) {
            const hash = md5(loginRef.current.value + passwordRef.current.value)
            const user = await server.login(loginRef.current.value, hash)
            if (user) {
                setIsAuthenticated(true);
            }
        }
    }

    return (
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
            {isAuthenticated ? <Navigate to="/user" replace={true}/> : null}
        </div>
    )
}

export default LoginPage;