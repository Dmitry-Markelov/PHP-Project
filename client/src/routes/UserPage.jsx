import React, { useContext } from "react";
import { authContext } from "../components/Contexts";
import { Navigate } from "react-router-dom";

const User = () => {
    const {isAuth, setAuth} = useContext(authContext);
    return(
        isAuth ? 
        <div>
            <h1>User</h1>
        </div>
        :<Navigate to="/login"/>
    )
}

export default User;