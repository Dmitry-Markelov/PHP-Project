import React, { useContext } from "react";
import { authContext } from "../components/Contexts";
import { Navigate, useLocation } from "react-router-dom";

const User = () => {
    // const {isAuth, setAuth} = useContext(authContext);
    const { state } = useLocation();
    
    return(
        // isAuth ? 
        <div>
            <h1>User</h1>
            <p>Login: {state.login}</p>
            <p>Username: {state.username}</p>
        </div>
        // :<Navigate to="/login"/>
    )
}

export default User;