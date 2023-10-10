import React from "react";
import {Route, Routes} from 'react-router-dom';
import LoginPage from '../routes/LoginPage';
import RegisterPage from '../routes/RegisterPage';
import UserPage from '../routes/UserPage';


export const useRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={ <LoginPage/> }></Route>
        <Route path="/login" element={ <LoginPage/> }></Route>
        <Route path="/register" element={ <RegisterPage/> }></Route>
        <Route path="/user" element={ <UserPage/> }></Route>
      </Routes>
    )
}

export default useRoutes