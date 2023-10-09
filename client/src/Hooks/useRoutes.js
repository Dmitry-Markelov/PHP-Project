import React from "react";
import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom';
import Login from '../routes/Login';
import Register from '../routes/Register';
import User from '../routes/User';


export const useRouters = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Navigate to="Login"/>,
        },{
          path: "/login",
          element: <Login/>,
        },{
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/user",
          element: <User/>,
        },
    ])
    
    return (
        <RouterProvider router={router}/>
    )
}

export default useRouters;