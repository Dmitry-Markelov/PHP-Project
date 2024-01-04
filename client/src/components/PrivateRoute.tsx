import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../Hooks/useToken";
import React from "react";

const PrivateRoute = () => {
    const token = getToken();

    return (
        token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoute;