import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../components/Contexts";

const Login = () => {
    const {isAuth, setAuth} = useContext(authContext);
    return(
        <div>
            <h1>Login</h1>
            <button onClick={() => setAuth(true)}>
                Enter
            </button>
                {isAuth ? <Navigate to="/user" replace={true}/> : <Navigate to=""/>}
        </div>
    )
}

export default Login;