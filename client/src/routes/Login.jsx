import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [isAuth, setAuth] = useState(false);
    return(
        <div>
            <h1>Login</h1>
            <button onClick={() => setAuth(true)}>
                {console.log(isAuth)}
                Enter
            </button>
                {isAuth ? <Navigate to="/user" replace={true}/> : <Navigate to=""/>}
        </div>
    )
}

export default Login;