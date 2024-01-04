import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { StoreContext } from "../App";

const User = () => {
    const store = useContext(StoreContext);
    const user = store.getUser();

    return (
        store.isAuth() ?
            <div>
                <h1>User</h1>
                <p>Login: {'login'}</p> //добавить отображение логина
                <p>Username: {user.name}</p>
            </div>
            : <Navigate to="/login" />
    )
}

export default User;