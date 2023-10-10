import React from "react";
import {Route, Routes} from 'react-router-dom';
import Login from '../routes/Login';
import Register from '../routes/Register';
import User from '../routes/User';


export const useRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={ <Login/> }></Route>
        <Route path="/login" element={ <Login/> }></Route>
        <Route path="/register" element={ <Register/> }></Route>
        <Route path="/user" element={ <User/> }></Route>
      </Routes>
    )
}

export default useRoutes